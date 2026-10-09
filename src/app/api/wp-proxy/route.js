import { NextResponse } from 'next/server';
import http from 'http';
import { rewriteWpImageUrls } from '@/lib/wordpress-server';

export const runtime = 'nodejs';

/**
 * WordPress API Proxy
 * blog.aone.no does not accept connections on 443 -- NEXT_PUBLIC_WP_API_URL
 * is configured site-wide as the http:// URL for this host; fall back to
 * it directly if that env var is ever unset.
 */
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const endpoint = searchParams.get('endpoint');

    if (!endpoint) {
        return NextResponse.json({ error: 'Endpoint is required' }, { status: 400 });
    }

    const wpApiBase = (process.env.NEXT_PUBLIC_WP_API_URL || 'http://blog.aone.no/wp-json/wp/v2').replace(/\/$/, '');
    const wpApiUrl = `${wpApiBase}/${endpoint}`;
    const targetUrl = new URL(wpApiUrl);
    
    searchParams.forEach((value, key) => {
        if (key !== 'endpoint') {
            targetUrl.searchParams.set(key, value);
        }
    });

    try {
        const fetchUrl = targetUrl.toString();

        const data = await new Promise((resolve, reject) => {
            const options = {
                headers: {
                    'Accept': 'application/json',
                    'User-Agent': 'Aone-WP-Proxy/1.1',
                }
            };

            http.get(fetchUrl, options, (res) => {
                let rawData = '';
                res.on('data', (chunk) => { rawData += chunk; });
                res.on('end', () => {
                    try {
                        const parsedData = JSON.parse(rawData);
                        resolve({ 
                            data: parsedData, 
                            headers: res.headers,
                            status: res.statusCode 
                        });
                    } catch (e) {
                        reject(new Error('Failed to parse WP JSON'));
                    }
                });
            }).on('error', (e) => {
                reject(e);
            });
        });

        if (data.status >= 400) {
            return NextResponse.json({ error: 'WP Upstream Error', status: data.status }, { status: data.status });
        }

        const processedData = rewriteWpImageUrls(data.data);
        const response = NextResponse.json(processedData, { status: 200 });

        // Forward vital WordPress pagination headers
        const wpTotal = data.headers['x-wp-total'];
        const wpTotalPages = data.headers['x-wp-totalpages'];
        
        if (wpTotal) response.headers.set('X-WP-Total', wpTotal);
        if (wpTotalPages) response.headers.set('X-WP-TotalPages', wpTotalPages);
        
        response.headers.set('X-Data-Source', 'Aone-WP-Engine');
        
        return response;
    } catch (error) {
        console.error('WP Proxy Fatal Error:', error);
        return NextResponse.json({ 
            error: 'WP Communication Failure', 
            details: error.message 
        }, { status: 500 });
    }
}
