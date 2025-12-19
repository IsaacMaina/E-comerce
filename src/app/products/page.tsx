'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StarIcon, GridIcon, ListIcon } from 'lucide-react';
import { mockProducts, categories } from '@/data/products';
import { formatCurrency } from '@/lib/utils';
import Link from 'next/link';

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredProducts = selectedCategory 
    ? mockProducts.filter(product => product.category.toLowerCase().includes(selectedCategory.toLowerCase()))
    : mockProducts;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Our Products</h1>
        <p className="text-gray-600 dark:text-gray-400">Discover our range of premium electronics</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <div className="space-y-2">
              <button
                className={`block w-full text-left px-3 py-2 rounded ${!selectedCategory ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                onClick={() => setSelectedCategory(null)}
              >
                All Products
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`block w-full text-left px-3 py-2 rounded ${selectedCategory === category.id ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="flex items-center">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-5 h-5 mr-2 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // Prevent infinite loop
                        target.src = `https://placehold.co/20x20?text=${encodeURIComponent(category.name.substring(0, 1))}`;
                      }}
                    />
                    {category.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : 'All Products'}
              <span className="text-gray-500 text-base font-normal ml-2">({filteredProducts.length} products)</span>
            </h2>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">View:</span>
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <GridIcon className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <ListIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="transition-all duration-300"
                >
                  <Link href={`/product/${product.id}`} className="block">
                    <Card className="h-80 overflow-hidden group relative flex flex-col cursor-pointer">
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
                    <div className="relative pt-48 flex flex-col h-full">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-white drop-shadow-lg">{product.name}</CardTitle>
                        <CardDescription className="line-clamp-2 text-white/90 drop-shadow">{product.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex justify-between items-center text-white">
                          <span className="text-xl font-bold drop-shadow-lg">{formatCurrency(product.price)}</span>
                          <div className="flex items-center">
                            <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm drop-shadow">{product.rating}</span>
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
          ) : (
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden group flex">
                  <div className="w-32 h-32 p-4 bg-gray-100 dark:bg-gray-800 flex-shrink-0 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // Prevent infinite loop
                        target.src = `https://placehold.co/128x128?text=${encodeURIComponent(product.name.substring(0, 3))}`;
                      }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <CardHeader className="pb-2">
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <div className="flex-1 px-6 pb-4 flex flex-col justify-between">
                      <div className="flex items-center mb-2">
                        <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm mr-4">{product.rating}</span>
                        <Badge variant="secondary">{product.category}</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                        <div className="space-x-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/product/${product.id}`}>View Details</Link>
                          </Button>
                          <Button size="sm">Add to Cart</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}