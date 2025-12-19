'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import LoadingButton from '@/components/ui/LoadingButton';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trash2Icon, PlusIcon, MinusIcon, ShoppingCartIcon } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/lib/utils';
import Link from 'next/link';

export default function CartPage() {
  const { state, dispatch } = useCart();

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: { productId } });
    } else {
      dispatch({ 
        type: 'UPDATE_QUANTITY', 
        payload: { 
          productId, 
          quantity: newQuantity 
        } 
      });
    }
  };

  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId } });
  };

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <ShoppingCartIcon className="w-24 h-24 mx-auto text-gray-400" />
          <h1 className="text-2xl font-bold mt-4">Your cart is empty</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Looks like you haven't added anything to your cart yet
          </p>
          <Button asChild className="mt-6">
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {state.items.map((item) => (
                <motion.div
                  key={item.product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border rounded-lg overflow-hidden"
                >
                  <Card>
                    <div className="flex">
                      <div className="w-32 h-32 p-4 bg-gray-100 dark:bg-gray-800 flex-shrink-0 flex items-center justify-center">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="object-cover w-full h-full"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null; // Prevent infinite loop
                            target.src = `https://placehold.co/128x128?text=${encodeURIComponent(item.product.name.substring(0, 3))}`;
                          }}
                        />
                      </div>
                      <div className="flex-1 p-4">
                        <CardHeader className="p-0">
                          <div className="flex justify-between">
                            <CardTitle>{item.product.name}</CardTitle>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.product.id)}
                              aria-label="Remove item"
                            >
                              <Trash2Icon className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent className="p-0 pt-2">
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{item.product.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="font-bold">{formatCurrency(item.product.price)}</span>
                            <div className="flex items-center">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                aria-label="Decrease quantity"
                              >
                                <MinusIcon className="h-4 w-4" />
                              </Button>
                              <span className="mx-3">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                aria-label="Increase quantity"
                              >
                                <PlusIcon className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatCurrency(state.items.reduce((total, item) => total + (item.product.price * item.quantity), 0))}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{formatCurrency(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>{formatCurrency(state.items.reduce((total, item) => total + (item.product.price * item.quantity * 0.08), 0))}</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>
                    {formatCurrency(
                      state.items.reduce((total, item) => total + (item.product.price * item.quantity), 0) * 1.08
                    )}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button asChild className="w-full" size="lg">
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/products">Continue Shopping</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}