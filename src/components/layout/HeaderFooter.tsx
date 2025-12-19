'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, ShoppingBag, Search, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="mr-4 lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <nav className="flex flex-col space-y-4">
                  <SheetClose asChild>
                    <Link href="/" className="text-lg font-medium">Home</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/products" className="text-lg font-medium">Products</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/about" className="text-lg font-medium">About</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/contact" className="text-lg font-medium">Contact</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/faq" className="text-lg font-medium">FAQ</Link>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>

            <Link href="/" className="text-2xl font-bold">
              Electronic<span className="text-blue-600">Sales</span>
            </Link>
          </div>

          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-blue-600">Home</Link>
            <Link href="/products" className="text-sm font-medium hover:text-blue-600">Products</Link>
            <Link href="/about" className="text-sm font-medium hover:text-blue-600">About</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-600">Contact</Link>
            <Link href="/faq" className="text-sm font-medium hover:text-blue-600">FAQ</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">3DShop</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Experience the future of online shopping with our immersive 3D product visualization.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="/products" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">All Products</a></li>
              <li><a href="/products" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Featured</a></li>
              <li><a href="/products" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">New Arrivals</a></li>
              <li><a href="/products" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Sale</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Contact Us</a></li>
              <li><a href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">FAQs</a></li>
              <li><a href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Terms of Service</a></li>
              <li><a href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-600 dark:text-gray-400">
              <p>123 Technology Plaza</p>
              <p>Nairobi, Kenya</p>
              <p className="mt-2">Email: mainaisaacwachira2000@gmail.com</p>
              <p>Phone: +254 758 302725</p>
            </address>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} 3D E-Commerce Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export { Header, Footer };