'use client';

import { useState, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StarIcon, ShoppingCartIcon, HeartIcon, RotateCcwIcon } from 'lucide-react';
import { mockProducts } from '@/data/products';
import { formatCurrency } from '@/lib/utils';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import * as THREE from 'three';
import dynamic from 'next/dynamic';

// Dynamically import the 3D product model to ensure it only runs on the client
const ProductModel = dynamic(() => import('@/components/3d/ProductModel'), {
  ssr: false
});

interface ProductDetailContentProps {
  params: {
    id: string;
  };
}

export default function ProductDetailContent({ params }: ProductDetailContentProps) {
  const [quantity, setQuantity] = useState(1);

  // Find the product based on the ID from params
  const product = mockProducts.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <p className="mt-4">The product you're looking for doesn't exist.</p>
        <Button asChild className="mt-6">
          <Link href="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '#000000');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images and 3D Viewer */}
        <div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 h-96 flex items-center justify-center">
            {product.images && product.images.length > 0 ? (
              <img
                src={product.images[activeImageIndex]}
                alt={product.name}
                className="object-contain w-full h-full rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop
                  target.src = `https://placehold.co/400x400?text=${encodeURIComponent(product.name.substring(0, 3))}`;
                }}
              />
            ) : (
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 flex items-center justify-center">
                Product Image
              </div>
            )}
          </div>

          <div className="grid grid-cols-4 gap-4 mt-4">
            {product.images && product.images.length > 0 ? (
              product.images.map((image, index) => (
                <div
                  key={index}
                  className={`bg-gray-100 dark:bg-gray-800 rounded-lg p-2 h-24 flex items-center justify-center cursor-pointer ${activeImageIndex === index ? 'ring-2 ring-blue-500' : ''}`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} - Image ${index + 1}`}
                    className="object-cover w-16 h-16 rounded"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; // Prevent infinite loop
                      target.src = `https://placehold.co/64x64?text=Image+${index + 1}`;
                    }}
                  />
                </div>
              ))
            ) : (
              [1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className={`bg-gray-100 dark:bg-gray-800 rounded-lg p-2 h-24 flex items-center justify-center cursor-pointer ${activeImageIndex === index - 1 ? 'ring-2 ring-blue-500' : ''}`}
                  onClick={() => setActiveImageIndex(index - 1)}
                >
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <div className="mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    <StarIcon className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 font-medium">{product.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600 dark:text-gray-400">{product.category}</span>
                </div>
              </div>
              <Badge variant="secondary">{product.stock > 10 ? 'In Stock' : product.stock > 0 ? 'Low Stock' : 'Out of Stock'}</Badge>
            </div>
          </div>

          <p className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{formatCurrency(product.price)}</p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-8">{product.description}</p>

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-blue-500' : 'border-gray-300'}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select color ${color}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-3">Quantity</h3>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                <span className="text-lg">-</span>
              </Button>
              <span className="mx-4 text-lg w-10 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(q => q + 1)}
                aria-label="Increase quantity"
              >
                <span className="text-lg">+</span>
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button className="flex-1 min-w-40">
              <ShoppingCartIcon className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button variant="outline" size="icon" aria-label="Add to wishlist">
              <HeartIcon className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Compare">
              <RotateCcwIcon className="h-5 w-5" />
            </Button>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="text-xl font-semibold mb-4">Product Specifications</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.specs || {}).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-600 dark:text-gray-400">{key}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts
            .filter(p => p.id !== product.id && p.category === product.category)
            .slice(0, 4)
            .map((relatedProduct) => (
              <Card key={relatedProduct.id} className="overflow-hidden group relative flex flex-col cursor-pointer h-96">
                <div className="absolute inset-0">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; // Prevent infinite loop
                      target.src = `https://placehold.co/400x400?text=${encodeURIComponent(relatedProduct.name.substring(0, 3))}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="relative pt-48 flex flex-col h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white drop-shadow-lg">{relatedProduct.name}</CardTitle>
                    <CardDescription className="line-clamp-2 text-white/90 drop-shadow">{relatedProduct.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex justify-between items-center text-white">
                      <span className="text-lg font-bold drop-shadow-lg">{formatCurrency(relatedProduct.price)}</span>
                      <div className="flex items-center">
                        <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm drop-shadow">{relatedProduct.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" asChild>
                      <Link href={`/product/${relatedProduct.id}`}>View Details</Link>
                    </Button>
                    <Button className="bg-white text-black hover:bg-gray-200">Add to Cart</Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}