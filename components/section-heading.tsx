type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
};

export function SectionHeading({ id, eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2
        id={id}
        className="mt-3 mb-0 text-3xl leading-tight font-semibold tracking-[-0.025em] text-balance text-paper sm:text-4xl"
      >
        {title}
      </h2>
      {children && (
        <p className="mt-4 mb-0 text-lg leading-relaxed text-pretty text-muted">{children}</p>
      )}
    </div>
  );
}
