import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientLayout from '@/components/layout/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Electronic Sales - Premium Electronics Shopping',
    template: '%s | Electronic Sales'
  },
  description: 'Shop the latest electronics with immersive 3D product visualization. Premium devices, competitive prices, and exceptional service.',
  keywords: ['electronics', 'e-commerce', 'tech shopping', '3D visualization', 'devices'],
  authors: [{ name: 'Electronic Sales Team' }],
  creator: 'Electronic Sales Team',
  publisher: 'Electronic Sales',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://electronicsales.com',
    title: 'Electronic Sales - Premium Electronics Shopping',
    description: 'Shop the latest electronics with immersive 3D product visualization. Premium devices, competitive prices, and exceptional service.',
    siteName: 'Electronic Sales',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Electronic Sales - Premium Electronics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electronic Sales - Premium Electronics Shopping',
    description: 'Shop the latest electronics with immersive 3D product visualization. Premium devices, competitive prices, and exceptional service.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}