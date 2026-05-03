import { CartProvider } from '@/lib/cart';
import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the mobile-first responsive site
  redirect('/m/home');
}
