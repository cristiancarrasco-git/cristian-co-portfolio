export function CaseStudySlide({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="space-y-3">
      <div className="overflow-hidden rounded-lg border border-border bg-muted shadow-sm">
        <img src={src} alt={alt} className="w-full h-auto" loading="lazy" />
      </div>
      {caption ? (
        <figcaption className="text-sm text-muted-foreground leading-relaxed">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
