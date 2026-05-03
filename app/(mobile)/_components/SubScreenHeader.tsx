'use client';

import { useRouter } from 'next/navigation';

export function SubScreenHeader({ title }: { title: string }) {
  const router = useRouter();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[var(--m-s1)]/90 backdrop-blur-md border-b border-[var(--m-border)]">
      <div className="flex items-center gap-4 h-14 px-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[var(--m-accent)] active:opacity-70 transition-opacity"
          aria-label="Go back"
        >
          <span className="text-xl">←</span>
        </button>
        <h1 className="text-lg font-semibold text-[var(--m-text)]">{title}</h1>
      </div>
    </header>
  );
}
