'use client';

import { motion } from 'framer-motion';
import Carousel from '@/components/ui/Carousel';
import { useGsapScrollAnimations } from '@/lib/gsapScrollAnimations';
import { mockProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StarIcon } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  const { sectionRef } = useGsapScrollAnimations();

  return (
    <div className="min-h-screen">
      <Carousel />

      <main className="container mx-auto px-4 py-8" ref={sectionRef}>
        <section className="text-center py-12 animate-item">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Premium Electronics Collection</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Shop the latest gadgets, devices, and tech accessories with our immersive 3D visualization
          </p>
          <Button asChild>
            <Link href="/products">Explore Products</Link>
          </Button>
        </section>

        <section className="py-12 animate-item">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockProducts
              .filter(product => product.featured)
              .map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="transition-all duration-300"
                >
                  <Link href={`/product/${product.id}`} className="block">
                    <Card
                      className="h-96 overflow-hidden relative flex flex-col cursor-pointer group"
                    >
                    <div className="absolute inset-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null; // Prevent infinite loop
                          target.src = `https://placehold.co/400x400?text=${encodeURIComponent(product.name.substring(0, 3))}`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                    <div className="relative pt-64 flex flex-col h-full">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-white drop-shadow-lg">{product.name}</CardTitle>
                        <CardDescription className="line-clamp-2 text-white/90 drop-shadow">{product.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex justify-between items-center text-white">
                          <span className="text-2xl font-bold drop-shadow-lg">{formatCurrency(product.price)}</span>
                          <div className="flex items-center">
                            <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 drop-shadow">{product.rating}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button variant="secondary" asChild>
                          <Link href={`/product/${product.id}`}>View Details</Link>
                        </Button>
                        <Button className="bg-white text-black hover:bg-gray-200">Add to Cart</Button>
                      </CardFooter>
                    </div>
                  </Card>
                </Link>
              </motion.div>
              ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}