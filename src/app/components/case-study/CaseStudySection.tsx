import { ReactNode } from 'react';

export function CaseStudySection({
  eyebrow,
  title,
  children,
  className = '',
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="mb-2 font-medium tracking-[0.18em] text-xs uppercase text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export function CaseStudyPullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="border-l-2 border-foreground pl-4 md:pl-6 my-8 text-foreground text-lg md:text-xl font-medium leading-snug">
      {children}
    </blockquote>
  );
}
