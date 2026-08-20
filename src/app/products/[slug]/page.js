import { notFound } from 'next/navigation';
import products from "@/app/data/products";
import ProductDetailClient from "./ProductDetailClient";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) {
    return { title: 'Produkt ikke funnet | Aone' };
  }

  const url = `https://aone.no/products/${slug}`;

  return {
    title: `${product.title} | Aone Produkter`,
    description: product.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.title} | Aone`,
      description: product.description,
      type: 'website',
      url,
      images: [{ url: product.imageUrl, width: 1200, height: 630, alt: product.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.title} | Aone`,
      description: product.description,
      images: [product.imageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  const currentIndex = products.findIndex((p) => p.id === slug);
  const prevProduct = products[(currentIndex - 1 + products.length) % products.length];
  const nextProduct = products[(currentIndex + 1) % products.length];

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.imageUrl,
    url: `https://aone.no/products/${slug}`,
    brand: { '@type': 'Organization', name: 'Aone' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductDetailClient product={product} prevProduct={prevProduct} nextProduct={nextProduct} />
    </>
  );
}
