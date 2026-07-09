/**
 * Placeholder covers when Figma-export hero images aren’t wired yet.
 * Uses existing token colors only (no new palette).
 */
type Variant = 'cla' | 'pokey' | 'nature' | 'blunit';

const styles: Record<
  Variant,
  { label: string; kicker: string; deco: 'arches' | 'grid' }
> = {
  cla: {
    label: 'Casa Lica',
    kicker: 'Architecture · slide narrative · brand',
    deco: 'arches',
  },
  pokey: {
    label: 'Pokey Battle Predictors',
    kicker: 'Python + DB · matchup UX · players first',
    deco: 'grid',
  },
  nature: {
    label: 'Nature Conservatory',
    kicker: 'Brand direction · poster · brochure · installation',
    deco: 'arches',
  },
  blunit: {
    label: 'Blunit Final',
    kicker: 'UX case study · environmentalism',
    deco: 'grid',
  },
};

function DecoArches({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M ${40 + i * 70} 260 V 140 A 35 35 0 0 1 ${110 + i * 70} 140 V 260`}
          stroke="currentColor"
          strokeWidth="1.25"
          opacity={0.35 + i * 0.08}
        />
      ))}
      <line x1="20" y1="265" x2="380" y2="265" stroke="currentColor" strokeWidth="1" opacity={0.2} />
    </svg>
  );
}

function DecoGrid({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {[...Array(6)].map((_, r) => (
        <line
          key={`h${r}`}
          x1="0"
          y1={50 + r * 42}
          x2="400"
          y2={50 + r * 42}
          stroke="currentColor"
          strokeWidth="0.75"
          opacity={0.12 + r * 0.04}
        />
      ))}
      {[...Array(8)].map((_, c) => (
        <line
          key={`v${c}`}
          x1={30 + c * 48}
          y1="20"
          x2={30 + c * 48}
          y2="280"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity={0.1 + (c % 3) * 0.05}
        />
      ))}
      <circle cx="200" cy="150" r="48" stroke="currentColor" strokeWidth="1.5" opacity={0.25} />
      <circle cx="200" cy="150" r="72" stroke="currentColor" strokeWidth="1" opacity={0.15} />
    </svg>
  );
}

export function WorkCoverPlaceholder({
  variant,
  className = '',
}: {
  variant: Variant;
  className?: string;
}) {
  const cfg = styles[variant];
  return (
    <div
      className={`relative h-full w-full bg-muted text-primary overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/40 to-muted" />
      {cfg.deco === 'arches' ? (
        <DecoArches className="absolute -right-8 -bottom-4 h-[120%] w-[120%] text-primary" />
      ) : (
        <DecoGrid className="absolute inset-0 w-full h-full text-primary" />
      )}
      <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8">
        <p className="mb-1 font-medium tracking-[0.2em] text-xs md:text-sm uppercase text-muted-foreground">
          Case study
        </p>
        <p className="text-lg md:text-3xl font-medium tracking-tight text-foreground max-w-md">
          {cfg.label}
        </p>
        <p className="mt-2 max-w-lg text-sm md:text-base text-muted-foreground">{cfg.kicker}</p>
      </div>
    </div>
  );
}
