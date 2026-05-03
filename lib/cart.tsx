'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { products } from './data';

export type CartItem = {
  product: (typeof products)[number];
  qty: number;
};

type CartContextType = {
  items: CartItem[];
  add: (product: CartItem['product']) => void;
  remove: (name: string) => void;
  increment: (name: string) => void;
  decrement: (name: string) => void;
  clear: () => void;
  count: number;
  total: string;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('alm-cart');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setItems(parsed);
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e);
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('alm-cart', JSON.stringify(items));
    }
  }, [items, mounted]);

  const add = (product: CartItem['product']) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.product.name === product.name ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { product, qty: 1 }];
    });
  };

  const remove = (name: string) => {
    setItems((prev) => prev.filter((item) => item.product.name !== name));
  };

  const increment = (name: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.product.name === name ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrement = (name: string) => {
    setItems((prev) => {
      const updated = prev.map((item) =>
        item.product.name === name ? { ...item, qty: Math.max(1, item.qty - 1) } : item
      );
      return updated.filter((item) => item.qty > 0);
    });
  };

  const clear = () => {
    setItems([]);
  };

  const count = items.reduce((sum, item) => sum + item.qty, 0);

  const total = items.reduce((sum, item) => {
    const priceStr = item.product.price.replace('UGX ', '').replace(/,/g, '');
    const price = parseInt(priceStr, 10);
    return sum + price * item.qty;
  }, 0);

  const formattedTotal = new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: 'UGX',
    minimumFractionDigits: 0,
  }).format(total);

  return (
    <CartContext.Provider
      value={{
        items,
        add,
        remove,
        increment,
        decrement,
        clear,
        count,
        total: formattedTotal,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
