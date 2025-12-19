'use client';

import { CartProvider } from '@/context/CartContext';
import LenisSmoothScrollProvider from '@/context/LenisSmoothScrollProvider';
import { Header, Footer } from '@/components/layout/HeaderFooter';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '@/components/ui/PageTransition';
import { ReactNode } from 'react';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LenisSmoothScrollProvider>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <PageTransition>
                {children}
              </PageTransition>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </LenisSmoothScrollProvider>
  );
}