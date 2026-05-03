'use client';

import Image from 'next/image';
import { SubScreenHeader } from '@/app/(mobile)/_components/SubScreenHeader';
import { blogPosts } from '@/lib/data';

export default function BlogPage() {
  return (
    <div className="pt-4 pb-8">
      <SubScreenHeader title="Insights" />

      <div className="px-4 pt-4 space-y-4">
        {blogPosts.map((post, idx) => (
          <button
            key={idx}
            className="w-full bg-[var(--m-s1)] border border-[var(--m-border)] rounded-xl overflow-hidden flex gap-3 active:opacity-70 transition-opacity"
          >
            <div className="relative w-24 h-24 flex-shrink-0 bg-[var(--m-s2)]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <div className="flex-1 p-3 text-left flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold text-[var(--m-accent)] uppercase tracking-wide">
                  {post.category}
                </p>
                <h3 className="text-sm font-semibold text-[var(--m-text)] mt-1 line-clamp-2">
                  {post.title}
                </h3>
              </div>
              <p className="text-xs text-[var(--m-sub)]">
                {post.date} • {post.readTime}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
