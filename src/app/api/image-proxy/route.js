import { NextResponse } from 'next/server';
import https from 'https';
import http from 'http';

export const runtime = 'nodejs';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const imageUrl = searchParams.get('url');

    if (!imageUrl) {
        return new NextResponse('URL is required', { status: 400 });
    }

    if (!imageUrl.includes('blog.aone.no')) {
        return new NextResponse('Invalid domain', { status: 403 });
    }

    try {
        const protocol = imageUrl.startsWith('https') ? https : http;
        const options = imageUrl.startsWith('https') ? { rejectUnauthorized: false } : {};

        const response = await new Promise((resolve, reject) => {
            protocol.get(imageUrl, options, (res) => {
                const chunks = [];
                res.on('data', (chunk) => chunks.push(chunk));
                res.on('end', () => {
                    resolve({
                        statusCode: res.statusCode,
                        headers: res.headers,
                        data: Buffer.concat(chunks)
                    });
                });
            }).on('error', (err) => {
                console.error('Fetch error:', err);
                reject(err);
            });
        });

        if (response.statusCode >= 400) {
            return new NextResponse(`Upstream error: ${response.statusCode}`, { status: response.statusCode });
        }

        const headers = new Headers();
        if (response.headers['content-type']) {
            headers.set('Content-Type', response.headers['content-type']);
        }
        headers.set('Cache-Control', 'public, max-age=31536000, immutable');

        return new NextResponse(response.data, {
            status: response.statusCode,
            headers
        });
    } catch (error) {
        console.error('Image Proxy Error:', error);
        return new NextResponse('Failed to fetch image', { status: 500 });
    }
}
