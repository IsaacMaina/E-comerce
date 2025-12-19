'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Truck, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function OrderConfirmationPage() {
  const [orderId, setOrderId] = useState<string | null>(null);

  useEffect(() => {
    // Generate a random order ID
    const randomId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(randomId);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-20 h-20 mx-auto mb-6 text-green-500"
        >
          <CheckCircle className="w-full h-full" />
        </motion.div>

        <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Your order has been confirmed and is being processed. We've sent a confirmation email to your inbox.
        </p>

        {orderId && (
          <div className="mb-8">
            <p className="text-lg font-medium mb-2">Order ID:</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{orderId}</p>
          </div>
        )}

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Order Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-2">
                  <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm font-medium">Payment</span>
                <span className="text-xs text-green-600">Confirmed</span>
              </div>
              
              <div className="h-1 w-16 bg-gray-200 dark:bg-gray-700"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-2">
                  <Truck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm font-medium">Processing</span>
                <span className="text-xs text-green-600">In Progress</span>
              </div>
              
              <div className="h-1 w-16 bg-gray-200 dark:bg-gray-700"></div>
              
              <div className="flex flex-col items-center opacity-50">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-2">
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
                <span className="text-sm font-medium">Shipped</span>
                <span className="text-xs text-gray-400">Pending</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/orders">View Order History</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}