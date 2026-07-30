import { NextResponse } from 'next/server';
import https from 'https';

export const runtime = 'nodejs';

/**
 * Optimized Image Proxy for WordPress - SSL Bypass Version
 * Uses https module to stream images even if SSL is expired
 */
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const imageUrl = searchParams.get('url');

    if (!imageUrl) {
        return new NextResponse('URL is required', { status: 400 });
    }

    if (!imageUrl.includes('blog.aone.no')) {
        return new NextResponse('Invalid domain: Unauthorized image source', { status: 403 });
    }

    try {
        const stream = await new Promise((resolve, reject) => {
            const options = {
                rejectUnauthorized: false,
                headers: {
                    'User-Agent': 'Aone-Image-Proxy/1.1',
                }
            };

            https.get(imageUrl, options, (res) => {
                if (res.statusCode >= 400) {
                    reject(new Error(`Upstream error: ${res.statusCode}`));
                    return;
                }
                resolve(res);
            }).on('error', (e) => {
                reject(e);
            });
        });

        // Map node readable stream to web stream for Next.js response
        const webStream = new ReadableStream({
            start(controller) {
                stream.on('data', (chunk) => controller.enqueue(chunk));
                stream.on('end', () => controller.close());
                stream.on('error', (err) => controller.error(err));
            }
        });

        const headers = new Headers();
        const contentType = stream.headers['content-type'];
        const contentLength = stream.headers['content-length'];

        if (contentType) headers.set('Content-Type', contentType);
        if (contentLength) headers.set('Content-Length', contentLength);
        
        headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        headers.set('X-Proxy-Source', 'Aone-WP-Engine-Legacy-SSL');

        return new NextResponse(webStream, {
            status: 200,
            headers,
        });
    } catch (error) {
        console.error('Image Proxy Error:', error);
        return new NextResponse('Failed to fetch image from upstream', { status: 500 });
    }
}
