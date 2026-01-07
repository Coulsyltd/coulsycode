'use client';

import { useState } from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 'fire-doors',
    title: 'Fire Door Services',
    tagline: 'Local SEO at scale (without the mess).',
    industry: 'Fire Safety Services',
    year: '2024',
    liveUrl: 'https://coulsyfiredoors.co.uk/',
    challenge:
      'Needed a website that could rank across Yorkshire for “near me” searches — without turning into a maintenance nightmare.',
    solution:
      'I built a location-driven site with a consistent page template, clean internal linking, and a structure designed around real search intent.',
    result:
      'Page 1 rankings for multiple local terms, with consistent monthly enquiries.',
    metrics: {
      "Areas covered": '54',
      "Local terms": 'Page 1',
      "Enquiries": 'Consistent',
    },
    keyMoves: [
      'Generated location pages from a single data source (no manual page-bloat).',
      'Built intent-led service pages + location variants that stay consistent and easy to maintain.',
      'Added structured internal linking (nearby areas + service pathways) so pages support each other.',
    ],
    outcomes: [
      'More qualified calls/enquiries from the target areas.',
      'A scalable structure that stays manageable as pages grow.',
    ],
    proof: {
      title: 'Proof (at a glance)',
      lines: ['54 areas × 4 services = 216 location pages', 'Built from templates, not manual page bloat'],
    },
    tech: ['Astro', 'TypeScript', 'Local SEO', 'Geolocation'],
    colorClasses: {
      border: 'border-amber-300',
      text: 'text-amber-700',
      bg: 'bg-amber-50/50',
      bgGradient: 'from-amber-50/30 to-orange-50/30',
      gradient: 'from-amber-100 to-orange-100',
      borderLight: 'border-amber-200',
      borderMedium: 'border-amber-300',
      textLight: 'text-amber-600',
      bgLight: 'bg-amber-50',
    },
    highlight: 'Every page and internal link was built to earn its keep — because it does.',
    image: '🔥',
  },
  {
    id: 'joinery',
    title: 'Joinery Services',
    tagline: 'Human voice + local SEO structure.',
    industry: 'Construction & Joinery',
    year: '2024',
    liveUrl: 'https://coulsyjoinery.co.uk/',
    challenge:
      'Needed strong local visibility, but the site also had to feel personal and trustworthy — not corporate.',
    solution:
      'I rebuilt the service pages with a founder-led voice, clearer CTAs, and a location structure that targets Yorkshire searches properly.',
    result:
      'More trust, better conversion to calls, and stronger local visibility.',
    metrics: {
      "Areas covered": '56',
      "Services": '18',
      "Calls": 'Up',
    },
    keyMoves: [
      'Wrote everything in first person so it sounds like a real trades business (because it is).',
      'Built 18 service pages with consistent structure + strong phone CTAs.',
      'Generated location-service pages and kept the template maintainable.',
    ],
    outcomes: [
      'More calls from “near me” search traffic.',
      'Content that feels human and builds confidence quickly.',
    ],
    proof: {
      title: 'Proof (at a glance)',
      lines: ['56 areas × 18 services = 1008 location pages', 'Founder-led tone + strong phone CTAs'],
    },
    tech: ['Astro', 'Components', 'Content Strategy', 'Local SEO'],
    colorClasses: {
      border: 'border-emerald-300',
      text: 'text-emerald-700',
      bg: 'bg-emerald-50/50',
      bgGradient: 'from-emerald-50/30 to-teal-50/30',
      gradient: 'from-emerald-100 to-teal-100',
      borderLight: 'border-emerald-200',
      borderMedium: 'border-emerald-300',
      textLight: 'text-emerald-600',
      bgLight: 'bg-emerald-50',
    },
    highlight: 'I rewrote it to sound like the actual business — because trust is what converts.',
    image: '🪵',
  },
  {
    id: 'trade-services',
    title: 'Trade Services Platform',
    tagline: 'A working system, not just a brochure site.',
    industry: 'Construction & Joinery',
    year: '2024',
    liveUrl: null,
    challenge:
      'Needed one place to run the day-to-day: jobs, customers, scheduling, and admin — with multiple users and roles.',
    solution:
      'I built a multi-user platform with authentication, role-based access, and the core workflow features that save time.',
    result:
      'Less admin, smoother handoffs, and better visibility across the business.',
    metrics: {
      "Users": 'Multi-user',
      "Workflow": 'Job → invoice',
      "Admin time": 'Reduced',
    },
    keyMoves: [
      'Built role-based access so teams can work safely (admin/staff/customer).',
      'Designed the workflow around real trade operations: leads → jobs → invoicing.',
      'Kept it practical: remove repetitive admin and reduce mistakes.',
    ],
    outcomes: [
      'More time spent on paid work, less time on admin.',
      'Clearer tracking of jobs, customers, and money in/out.',
    ],
    proof: {
      title: 'Proof (at a glance)',
      lines: ['Multi-user + role-based access', 'Job → schedule → invoice workflow'],
    },
    tech: ['Laravel', 'PHP', 'MySQL', 'Multi-User'],
    colorClasses: {
      border: 'border-slate-300',
      text: 'text-slate-700',
      bg: 'bg-slate-50/50',
      bgGradient: 'from-slate-50/30 to-blue-50/30',
      gradient: 'from-slate-100 to-blue-100',
      borderLight: 'border-slate-200',
      borderMedium: 'border-slate-300',
      textLight: 'text-slate-600',
      bgLight: 'bg-slate-50',
    },
    highlight: 'I built this around real workflows — the stuff that actually makes (or loses) money.',
    image: '🔨',
  },
];

export default function PortfolioPage() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Animated */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 py-24 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-500/20 text-blue-200 backdrop-blur-sm border border-blue-400/30">
                Real Projects. Real Results.
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Portfolio
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Real projects, built for real businesses — with a focus on enquiries, revenue, and maintainability.
              <span className="text-white font-semibold"> No fluff.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Projects - Clean & Subtle */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {projects.map((project, index) => {
                const isHovered = hoveredProject === project.id;
                const isSelected = selectedProject === project.id;
                const colors = project.colorClasses;
                
                return (
                  <div
                    key={project.id}
                    className={`group relative transition-all duration-300 ${
                      isSelected ? 'mb-20' : ''
                    }`}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Project Card */}
                    <div
                      className={`relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isHovered
                          ? `${colors.border} shadow-lg`
                          : 'border-gray-200 shadow-sm'
                      }`}
                      onClick={() => setSelectedProject(isSelected ? null : project.id)}
                    >
                      {/* Background Tint - Apple-like subtlety */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${colors.bgGradient} transition-opacity duration-300 ${
                          isHovered ? 'opacity-70' : 'opacity-35'
                        }`}
                      ></div>
                      
                      <div className="relative p-8 lg:p-12">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="text-5xl">
                                {project.image}
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-500 mb-1">
                                  {project.industry} • {project.year}
                                </div>
                                <h2 className={`text-3xl lg:text-4xl font-bold mb-2 transition-colors duration-300 ${isHovered ? colors.text : 'text-gray-900'}`}>
                                  {project.title}
                                </h2>
                                <p className="text-lg text-gray-600 font-medium">
                                  {project.tagline}
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-start gap-3">
                            {/* Outcome badges (scan-first) */}
                            <div className="flex flex-wrap gap-2">
                              {Object.entries(project.metrics).map(([key, value]) => (
                                <div
                                  key={key}
                                  className={`px-3 py-2 rounded-xl bg-white/80 backdrop-blur-sm border transition-all duration-300 ${
                                    isHovered
                                      ? `${colors.borderLight} shadow-md`
                                      : 'border-gray-200'
                                  }`}
                                >
                                  <div className="text-[11px] font-semibold text-gray-500 tracking-wide">
                                    {key}
                                  </div>
                                  <div className={`text-sm font-semibold transition-colors duration-300 ${isHovered ? colors.text : 'text-gray-900'}`}>
                                    {value}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* External link / status */}
                            {project.liveUrl ? (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-white transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                View live site <span aria-hidden="true">↗</span>
                              </a>
                            ) : (
                              <span className="inline-flex items-center rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm px-3 py-2 text-sm font-semibold text-gray-600">
                                In development
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Result-first block */}
                        <div
                          className={`rounded-2xl border bg-white/80 backdrop-blur-sm p-6 lg:p-7 mb-7 transition-all duration-300 ${
                            isHovered ? `${colors.borderLight} shadow-md` : 'border-gray-200'
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            <div className={`mt-1 h-2.5 w-2.5 rounded-full ${colors.bgLight} border ${colors.borderLight}`} />
                            <div className="flex-1">
                              <div className="text-[11px] font-semibold text-gray-500 tracking-widest">
                                RESULT
                              </div>
                              <div className="mt-2 text-lg lg:text-xl font-semibold text-gray-900 leading-snug">
                                {project.result}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Mini Case Study */}
                        <div className={`grid gap-6 mb-6 transition-all duration-300 ${
                          isSelected ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 lg:grid-cols-2'
                        }`}>
                          <div className={`bg-white/60 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                            isHovered ? colors.borderLight : 'border-gray-100'
                          }`}>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                The problem
                              </h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                              {project.challenge}
                            </p>
                          </div>

                          <div className={`bg-white/55 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                            isHovered ? colors.borderLight : 'border-gray-100'
                          }`}>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                What I did
                              </h3>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                              {project.keyMoves.map((move: string) => (
                                <li key={move} className="flex gap-2">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                                  <span>{move}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                                isHovered
                                  ? `${colors.bgLight} ${colors.textLight} ${colors.borderLight} border`
                                  : 'bg-gray-100 text-gray-700 border border-gray-200'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Why This Worked */}
                        <div className={`border-l-2 pl-6 py-4 transition-all duration-300 rounded-r-lg ${
                          isHovered ? `${colors.border} ${colors.bg}` : 'border-gray-200 bg-gray-50/50'
                        }`}>
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold text-gray-900">Why it worked:</span> {project.highlight}
                          </p>
                        </div>

                        {/* Expanded details */}
                        {isSelected && (
                          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6">
                              <div className="text-[11px] font-semibold text-gray-500 tracking-widest">
                                DETAILS
                              </div>
                              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                                How I approached it
                              </h3>
                              <p className="mt-3 text-gray-700 leading-relaxed">
                                {project.solution}
                              </p>

                              <h4 className="mt-6 text-sm font-semibold text-gray-900">
                                Outcomes
                              </h4>
                              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                                {project.outcomes.map((o: string) => (
                                  <li key={o} className="flex gap-2">
                                    <span className="mt-1.5 h-4 w-4 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] flex-shrink-0">
                                      ✓
                                    </span>
                                    <span>{o}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className={`rounded-2xl border bg-white/80 backdrop-blur-sm p-6 transition-all duration-300 ${
                              isHovered ? `${colors.borderLight} shadow-md` : 'border-gray-200'
                            }`}>
                              <div className="text-[11px] font-semibold text-gray-500 tracking-widest">
                                {project.proof.title.toUpperCase()}
                              </div>
                              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                                {project.proof.lines.map((line: string) => (
                                  <li key={line} className="flex gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                                    <span>{line}</span>
                                  </li>
                                ))}
                              </ul>
                              {project.liveUrl && (
                                <div className="mt-5">
                                  <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    View live site <span aria-hidden="true">↗</span>
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Expand Indicator */}
                        <div className="mt-6 text-center">
                          <button
                            type="button"
                            className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(isSelected ? null : project.id);
                            }}
                          >
                            {isSelected ? 'Hide details ↑' : 'See details ↓'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach - Clean Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              Why this approach works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-md group">
                <div className="text-4xl mb-4">👨‍💼</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Business Owner Perspective
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I build with a commercial lens: rankings are great, but revenue comes from enquiries and conversion.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-md group">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Forensic Attention to Detail
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I keep the fundamentals tight: structure, speed, internal linking, and copy that’s easy to act on.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-md group">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  SEO-led from day one
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I don’t “sprinkle SEO on”. I build the site structure and page intent so it can rank properly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to See Your Project Here?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              If you want more enquiries (and less admin), I’ll tell you what I’d do — and what I wouldn’t.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors duration-200 shadow-md text-lg"
            >
              Book a quick call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
