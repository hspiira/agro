export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--m-accent)]">
      {children}
    </p>
  );
}
