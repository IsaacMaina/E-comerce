import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { mockProducts } from '@/data/products';
import ProductDetailContent from '@/components/ProductDetailContent';

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = mockProducts.find(p => p.id === params.id);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist',
    };
  }

  return {
    title: `${product.name} | 3D E-Commerce Store`,
    description: product.description,
    keywords: [product.category, product.name, '3D visualization', 'electronics'],
    openGraph: {
      title: product.name,
      description: product.description,
      type: 'website', // Changed from 'product' to 'website'
      url: `https://electronicsales.com/product/${product.id}`,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
    },
  };
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = mockProducts.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetailContent params={params} />;
}