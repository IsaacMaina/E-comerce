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
import { useEffect, useRef } from 'react';

export default function Home() {
  const { sectionRef } = useGsapScrollAnimations();
  const statsRef = useRef<HTMLDivElement>(null);

  // Counter animation for stats
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stats = entry.target.querySelectorAll('[data-target]');
          stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target') || '0');
            const suffix = stat.textContent?.replace(/^\d+/, '') || '';
            let count = 0;
            const duration = 2000; // Animation duration in ms
            const increment = target / (duration / 16); // 16ms ~ 60fps

            const updateCount = () => {
              count += increment;
              if (count < target) {
                stat.textContent = Math.ceil(count) + suffix;
                requestAnimationFrame(updateCount);
              } else {
                stat.textContent = target + suffix;
              }
            };

            updateCount();
          });

          // Stop observing after animation
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

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
              .slice(0, 5) // Limit to 5 featured products
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8" ref={statsRef}>
              {[
                { value: '10000', label: 'Happy Customers', suffix: '+' },
                { value: '98', label: 'Customer Satisfaction', suffix: '%' },
                { value: '500', label: 'Products', suffix: '+' },
                { value: '24', label: 'Support Hours', suffix: '/7' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div
                    className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                    data-target={stat.value}
                  >
                    0{stat.suffix}
                  </div>
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
                avatar: '/avatars/avatar1.jpg',
                color: 'bg-blue-50 dark:bg-blue-900/20'
              },
              {
                id: 2,
                name: 'Sarah Johnson',
                role: 'Designer, Creative Studio',
                content: 'Fast shipping and excellent customer service. Will definitely order again!',
                avatar: '/avatars/avatar2.jpg',
                color: 'bg-purple-50 dark:bg-purple-900/20'
              },
              {
                id: 3,
                name: 'Michael Brown',
                role: 'Developer, StartupX',
                content: 'The 3D visualization helped me make the right choice. Great attention to detail.',
                avatar: '/avatars/avatar3.jpg',
                color: 'bg-green-50 dark:bg-green-900/20'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`${testimonial.color} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
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

            <div className="py-8 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                <div className="inline-flex space-x-6">
                  {[
                    { name: 'TechCorp', logo: 'TC', description: 'Leading tech solutions provider in East Africa', since: '2010', color: 'bg-blue-100 dark:bg-blue-900/50' },
                    { name: 'Creative Studio', logo: 'CS', description: 'Award-winning design and marketing agency', since: '2012', color: 'bg-purple-100 dark:bg-purple-900/50' },
                    { name: 'StartupX', logo: 'SX', description: 'Innovation hub for African startups', since: '2015', color: 'bg-green-100 dark:bg-green-900/50' },
                    { name: 'Innovate Inc', logo: 'II', description: 'Pioneering sustainable technology solutions', since: '2011', color: 'bg-yellow-100 dark:bg-yellow-900/50' },
                    { name: 'Digital Solutions', logo: 'DS', description: 'Comprehensive digital transformation services', since: '2013', color: 'bg-red-100 dark:bg-red-900/50' },
                    { name: 'Future Tech', logo: 'FT', description: 'Cutting-edge AI and machine learning applications', since: '2016', color: 'bg-indigo-100 dark:bg-indigo-900/50' }
                  ].map((company, index) => (
                    <div
                      key={index}
                      className={`flex-shrink-0 ${company.color} rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer`}
                    >
                      <div className="flex items-center">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center">
                          <span className="text-lg font-bold">{company.logo}</span>
                        </div>
                        <div className="ml-4">
                          <h3 className="font-bold text-gray-900 dark:text-white">{company.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{company.description}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Since {company.since}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {[
                    { name: 'TechCorp', logo: 'TC', description: 'Leading tech solutions provider in East Africa', since: '2010', color: 'bg-blue-100 dark:bg-blue-900/50' },
                    { name: 'Creative Studio', logo: 'CS', description: 'Award-winning design and marketing agency', since: '2012', color: 'bg-purple-100 dark:bg-purple-900/50' },
                    { name: 'StartupX', logo: 'SX', description: 'Innovation hub for African startups', since: '2015', color: 'bg-green-100 dark:bg-green-900/50' },
                    { name: 'Innovate Inc', logo: 'II', description: 'Pioneering sustainable technology solutions', since: '2011', color: 'bg-yellow-100 dark:bg-yellow-900/50' },
                    { name: 'Digital Solutions', logo: 'DS', description: 'Comprehensive digital transformation services', since: '2013', color: 'bg-red-100 dark:bg-red-900/50' },
                    { name: 'Future Tech', logo: 'FT', description: 'Cutting-edge AI and machine learning applications', since: '2016', color: 'bg-indigo-100 dark:bg-indigo-900/50' }
                  ].map((company, index) => (
                    <div
                      key={`duplicate-${index}`}
                      className={`flex-shrink-0 ${company.color} rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer`}
                    >
                      <div className="flex items-center">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center">
                          <span className="text-lg font-bold">{company.logo}</span>
                        </div>
                        <div className="ml-4">
                          <h3 className="font-bold text-gray-900 dark:text-white">{company.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{company.description}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Since {company.since}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Button asChild className="mt-12">
              <Link href="/products">Explore All Products</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}