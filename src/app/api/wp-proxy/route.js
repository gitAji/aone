import { NextResponse } from 'next/server';
import https from 'https';
import { rewriteWpImageUrls } from '@/lib/wordpress-server';

export const runtime = 'nodejs';

/**
 * Enhanced WordPress API Proxy - SSL Bypass Version
 * Handles expired SSL on blog.aone.no by using custom https agent
 */
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const endpoint = searchParams.get('endpoint');

    if (!endpoint) {
        return NextResponse.json({ error: 'Endpoint is required' }, { status: 400 });
    }

    const wpApiUrl = `https://blog.aone.no/wp-json/wp/v2/${endpoint}`;
    const targetUrl = new URL(wpApiUrl);
    
    searchParams.forEach((value, key) => {
        if (key !== 'endpoint') {
            targetUrl.searchParams.set(key, value);
        }
    });

    try {
        const fetchUrl = targetUrl.toString();
        
        // Fetch data using https module to bypass expired certificate
        const data = await new Promise((resolve, reject) => {
            const options = {
                rejectUnauthorized: false,
                headers: {
                    'Accept': 'application/json',
                    'User-Agent': 'Aone-WP-Proxy/1.1',
                }
            };

            https.get(fetchUrl, options, (res) => {
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
        
        response.headers.set('X-Data-Source', 'Aone-WP-Engine-Legacy-SSL');
        
        return response;
    } catch (error) {
        console.error('WP Proxy Fatal Error:', error);
        return NextResponse.json({ 
            error: 'WP Communication Failure', 
            details: error.message 
        }, { status: 500 });
    }
}
