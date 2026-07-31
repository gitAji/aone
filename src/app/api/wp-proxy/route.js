import { NextResponse } from 'next/server';
import https from 'https';

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

        // Deep Rewrite Function
        const rewriteUrls = (obj) => {
            if (!obj || typeof obj !== 'object') return obj;
            if (Array.isArray(obj)) return obj.map(rewriteUrls);

            const newObj = {};
            for (const key in obj) {
                let value = obj[key];
                if (typeof value === 'string' && value.includes('blog.aone.no/wp-content/uploads/')) {
                    const trimmed = value.trim();
                    const isPureUrl = !trimmed.includes(' ') && !trimmed.includes('<') && !trimmed.includes('>');
                    
                    if (isPureUrl) {
                        const cleanUrl = trimmed.replace(/\\\//g, '/');
                        value = `/api/image-proxy?url=${encodeURIComponent(cleanUrl)}`;
                    } else {
                        // It's a block of text/HTML. Replace only the URLs inside it.
                        value = value.replace(/(https?:\/\/blog\.aone\.no\/wp-content\/uploads\/[^\s"'>]+)/g, (match) => {
                            const cleanUrl = match.replace(/\\\//g, '/').trim();
                            return `/api/image-proxy?url=${encodeURIComponent(cleanUrl)}`;
                        });
                    }
                } else if (typeof value === 'object' && value !== null) {
                    value = rewriteUrls(value);
                }
                newObj[key] = value;
            }
            return newObj;
        };

        const processedData = rewriteUrls(data.data);
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
