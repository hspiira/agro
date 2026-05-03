'use client';

import { useEffect, useState } from 'react';

export function SwRegistrar() {
  const [swStatus, setSwStatus] = useState<'idle' | 'registering' | 'registered' | 'error'>('idle');

  useEffect(() => {
    if (!('serviceWorker' in navigator)) {
      console.warn('[PWA] Service Workers not supported');
      return;
    }

    const registerSW = async () => {
      try {
        setSwStatus('registering');
        console.log('[PWA] Registering service worker...');

        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/m/',
        });

        console.log('[PWA] Service Worker registered successfully:', registration);
        setSwStatus('registered');

        // Check for updates periodically
        setInterval(() => {
          registration.update().catch((err) => console.error('[PWA] Update check failed:', err));
        }, 60000); // Check every minute

        // Listen for controller change (new version available)
        let refreshing = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (!refreshing) {
            refreshing = true;
            console.log('[PWA] New version available, refreshing...');
            window.location.reload();
          }
        });
      } catch (err) {
        console.error('[PWA] Service Worker registration failed:', err);
        setSwStatus('error');
      }
    };

    // Delay registration slightly to ensure page is loaded
    const timeout = setTimeout(registerSW, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Development info
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      console.log('[PWA] Status:', swStatus);
      console.log('[PWA] Display mode:', (navigator as any).standalone ? 'standalone (PWA)' : 'browser');
    }
  }, [swStatus]);

  return null;
}
