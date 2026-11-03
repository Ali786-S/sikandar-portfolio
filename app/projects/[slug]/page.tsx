import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { projects } from "@/lib/projects";
import { ProjectArt, Eyebrow, ContactBand } from "@/components/ui";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return p
    ? {
        title: p.title,
        description: p.description,
        alternates: { canonical: `/projects/${p.slug}` },
        openGraph: {
          title: `${p.title} · Sikandar Ali`,
          description: p.description,
        },
      }
    : { title: "Project not found" };
}
export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <>
      <section className="case-intro wrap">
        <Link className="back-link" href="/projects">
          <ArrowLeft size={15} />
          All projects
        </Link>
        <Eyebrow>
          {p.category} / {p.year}
        </Eyebrow>
        <h1>
          {p.title}
          <span>.</span>
        </h1>
        <p className="case-subtitle">{p.subtitle}</p>
        <div className="case-info">
          <span className="status-badge">
            <i />
            {p.status}
          </span>
          <div className="case-links">
            {p.repo && (
              <a href={p.repo} target="_blank" rel="noopener noreferrer">
                View source
                <ArrowUpRight size={16} />
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer">
                Visit website
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
        <ProjectArt project={p} large />
        {p.imageNote ? (
          <p className="image-note">{p.imageNote}</p>
        ) : (
          <p className="image-note">
            Conceptual technical diagram based on verified project scope; not a
            screenshot of the application.
          </p>
        )}
      </section>
      <section className="case-body wrap">
        <aside className="case-sidebar">
          <span className="eyebrow">In this case study</span>
          <nav aria-label="Case study sections">
            {[
              "Overview",
              "Challenge",
              "My role",
              "Tech stack",
              "How I built it",
              "Technical challenges",
              "Outcome",
              "Lessons learned",
              "Explore",
            ].map((label, i) => (
              <a key={label} href={`#section-${i + 1}`}>
                <span>0{i + 1}</span>
                {label}
              </a>
            ))}
          </nav>
          <div className="case-metric">
            <strong>{p.metric}</strong>
            <span>{p.metricLabel}</span>
          </div>
        </aside>
        <div className="case-content">
          <section id="section-1">
            <span className="section-number">01 / Overview</span>
            <h2>What it’s about.</h2>
            <p>{p.overview}</p>
          </section>
          <section id="section-2">
            <span className="section-number">02 / The challenge</span>
            <h2>The problem to solve.</h2>
            <p>{p.challenge}</p>
          </section>
          <section id="section-3">
            <span className="section-number">03 / My role</span>
            <h2>Where I contributed.</h2>
            <p>{p.role}</p>
          </section>
          <section id="section-4">
            <span className="section-number">04 / Verified technology</span>
            <h2>The tools behind the work.</h2>
            <div className="stack-grid">
              {p.stack.map((s) => (
                <div key={s.label}>
                  <h3>{s.label}</h3>
                  <div className="tags">
                    {s.items.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section id="section-5">
            <span className="section-number">05 / How I built it</span>
            <h2>From requirement to workflow.</h2>
            <ol className="approach-list">
              {p.approach.map((a, i) => (
                <li key={a}>
                  <span>0{i + 1}</span>
                  <p>{a}</p>
                </li>
              ))}
            </ol>
            <div
              className="architecture"
              role="group"
              aria-label="Project workflow"
            >
              {p.flow.map((f, i) => (
                <div key={f}>
                  <span>0{i + 1}</span>
                  <strong>{f}</strong>
                  {i < p.flow.length - 1 && <ArrowRight size={16} />}
                </div>
              ))}
            </div>
          </section>
          <section id="section-6">
            <span className="section-number">06 / Technical challenges</span>
            <h2>The decisions that mattered.</h2>
            <p>{p.technical}</p>
          </section>
          <section id="section-7">
            <span className="section-number">07 / Outcome</span>
            <h2>What came out of it.</h2>
            <p>{p.outcome}</p>
          </section>
          <section id="section-8">
            <span className="section-number">08 / Lessons learned</span>
            <h2>What I’m taking forward.</h2>
            <p>{p.lessons}</p>
          </section>
          <section id="section-9">
            <span className="section-number">09 / Explore & evidence</span>
            <h2>Look a little closer.</h2>
            <div className="case-explore">
              {p.repo && (
                <a
                  className="button primary"
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore the repository
                  <ArrowUpRight size={17} />
                </a>
              )}
              {p.live && (
                <a
                  className="button secondary"
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open the public website
                  <ArrowUpRight size={17} />
                </a>
              )}
              {!p.repo && !p.live && (
                <p>
                  This work is described from the supplied CV. Private source
                  and operational information are not published.
                </p>
              )}
            </div>
            <div className="source-evidence">
              <Check size={18} />
              <div>
                <strong>Evidence & scope</strong>
                <p>{p.evidence}</p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="next-project wrap">
        <div>
          <Eyebrow>Up next</Eyebrow>
          <Link href={`/projects/${next.slug}`}>
            <h2>{next.title}</h2>
            <ArrowUpRight size={40} />
          </Link>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
