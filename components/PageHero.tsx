import Link from "next/link";

type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type Props = {
  title: string;
  description?: string;
  ctas?: Cta[];
};

function CtaLink({ href, label, variant = "primary" }: Cta) {
  if (variant === "secondary") {
    return (
      <Link
        href={href}
        className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold bg-white/5 text-white border border-white/15 hover:bg-white/10 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/15 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
    >
      {label}
    </Link>
  );
}

export default function PageHero({ title, description, ctas }: Props) {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 py-20 lg:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            {title}
          </h1>

          {description ? (
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          ) : null}

          {ctas?.length ? (
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {ctas.slice(0, 2).map((cta) => (
                <CtaLink key={`${cta.href}-${cta.label}`} {...cta} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}


