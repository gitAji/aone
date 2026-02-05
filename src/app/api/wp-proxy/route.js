import { NextResponse } from 'next/server';
import https from 'https';
import http from 'http';

export const runtime = 'nodejs';

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
        const urlToFetch = targetUrl.toString().replace('http://', 'https://');

        const data = await new Promise((resolve, reject) => {
            https.get(urlToFetch, {
                rejectUnauthorized: false
            }, (res) => {
                let body = '';
                res.on('data', chunk => body += chunk);
                res.on('end', () => {
                    try {
                        resolve({
                            status: res.statusCode,
                            headers: res.headers,
                            body: JSON.parse(body)
                        });
                    } catch (e) {
                        reject(new Error('Failed to parse WP response'));
                    }
                });
            }).on('error', (err) => {
                http.get(targetUrl.toString(), (res) => {
                    let body = '';
                    res.on('data', chunk => body += chunk);
                    res.on('end', () => {
                        try {
                            resolve({
                                status: res.statusCode,
                                headers: res.headers,
                                body: JSON.parse(body)
                            });
                        } catch (e) {
                            reject(new Error('Failed to parse WP response via HTTP fallback'));
                        }
                    });
                }).on('error', reject);
            });
        });

        let responseBody = data.body;

        // Recursive function to replace URLs in the response object
        const rewriteUrls = (obj) => {
            if (!obj || typeof obj !== 'object') return obj;

            if (Array.isArray(obj)) {
                return obj.map(rewriteUrls);
            }

            const newObj = {};
            for (const key in obj) {
                let value = obj[key];

                if (typeof value === 'string') {
                    // Check if value is a WordPress image URL
                    // Also handle escaped slashes that might be present in some contexts
                    if (value.includes('blog.aone.no/wp-content/uploads/')) {
                        value = `/api/image-proxy?url=${value.replace(/\\\//g, '/')}`;
                    }
                } else if (typeof value === 'object') {
                    value = rewriteUrls(value);
                }
                newObj[key] = value;
            }
            return newObj;
        };

        if (responseBody) {
            responseBody = rewriteUrls(responseBody);
        }

        const response = NextResponse.json(responseBody, { status: data.status });

        if (data.headers['x-wp-total']) {
            response.headers.set('X-WP-Total', data.headers['x-wp-total']);
        }
        if (data.headers['x-wp-totalpages']) {
            response.headers.set('X-WP-TotalPages', data.headers['x-wp-totalpages']);
        }

        return response;
    } catch (error) {
        console.error('WP Proxy Error:', error);
        return NextResponse.json({ error: 'Failed to fetch from WordPress' }, { status: 500 });
    }
}
