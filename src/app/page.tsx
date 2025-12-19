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

        {/* Why Choose Us Section with Stats */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl my-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust our premium electronics
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '10000+', label: 'Happy Customers' },
                { value: '98%', label: 'Customer Satisfaction' },
                { value: '500+', label: 'Products' },
                { value: '24/7', label: 'Support Hours' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Our Customers Say */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: 'John Smith',
                role: 'CEO, TechCorp',
                content: 'The products exceeded our expectations. Quality and performance are unmatched in the industry.',
                avatar: '/avatars/avatar1.jpg'
              },
              {
                id: 2,
                name: 'Sarah Johnson',
                role: 'Designer, Creative Studio',
                content: 'Fast shipping and excellent customer service. Will definitely order again!',
                avatar: '/avatars/avatar2.jpg'
              },
              {
                id: 3,
                name: 'Michael Brown',
                role: 'Developer, StartupX',
                content: 'The 3D visualization helped me make the right choice. Great attention to detail.',
                avatar: '/avatars/avatar3.jpg'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-gray-600 font-bold">U</span>
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trusted by Industry Leaders */}
        <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust our premium electronics
            </p>

            <div className="flex flex-wrap justify-center items-center gap-12 mb-12">
              {['TechCorp', 'Creative Studio', 'StartupX', 'Innovate Inc', 'Digital Solutions', 'Future Tech'].map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                >
                  {company}
                </motion.div>
              ))}
            </div>

            <Button asChild>
              <Link href="/products">Explore All Products</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}