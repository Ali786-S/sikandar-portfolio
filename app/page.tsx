import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  Download,
  MapPin,
  Code2,
  Workflow,
  Users,
} from "lucide-react";
import { Scene } from "@/components/scene-loader";
import { Eyebrow, ArrowLink, ProjectCard, ContactBand } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { ProjectExplorer } from "@/components/project-explorer";
import { projects } from "@/lib/projects";
import { github, linkedin } from "@/lib/site";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-topline">
          <Eyebrow>Software developer · AI & digital innovation</Eyebrow>
          <span className="location">
            <MapPin size={13} />
            London, UK
          </span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-name">Hi, I’m Sikandar Ali.</div>
            <h1>
              Building software.
              <br />
              Solving problems.
              <br />
              <span>
                Creating meaningful
                <br />
                digital experiences.
              </span>
            </h1>
            <p className="hero-description">
              I turn technical challenges into useful digital experiences — with
              curiosity, care and an understanding of the people behind the
              screen.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/projects">
                Explore my work
                <ArrowUpRight size={17} />
              </Link>
              <Link className="button secondary" href="/why-work-with-me">
                Why hire me?
                <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="hero-links">
              <a href="/Sikandar-Ali-CV.docx" download>
                <Download size={14} />
                Download CV
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer">
                GitHub
                <ArrowUpRight size={13} />
              </a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <Image
                src="/images/sikandar-ali.webp"
                alt="Sikandar Ali smiling, wearing a navy shirt and holding a jacket over his shoulder"
                width={800}
                height={800}
                priority
                sizes="(max-width: 700px) 88vw, 440px"
              />
              <div className="portrait-caption">
                <span>DEVELOPER. THINKER. DOER.</span>
              </div>
            </div>
            <div className="hero-sculpture">
              <Scene />
            </div>
            <span className="visual-coordinate" aria-hidden="true">
              FIG. 01 — CONNECTING IDEAS
            </span>
            <div className="graduate-note">
              <span className="status-dot" />
              Computer Science BSc (Hons)
              <br />
              <strong>University of Westminster · 2:1</strong>
            </div>
          </div>
        </div>
        <div className="hero-baseline">
          <a href="#selected-work">
            A little curiosity goes a long way
            <ArrowDown size={14} />
          </a>
          <span>SELECTED WORK / 2023—2026</span>
        </div>
      </section>
      <section className="proof-strip">
        <div className="wrap">
          <div>
            <strong>2:1</strong>
            <span>BSc (Hons) Computer Science</span>
          </div>
          <div>
            <strong>£250</strong>
            <span>Ignite Fund project award</span>
          </div>
          <div>
            <strong>500+</strong>
            <span>Admissions records processed</span>
          </div>
          <div>
            <strong>End to end</strong>
            <span>From idea to public website</span>
          </div>
        </div>
      </section>
      <section className="intro-section wrap">
        <Reveal className="intro-grid">
          <Eyebrow>A practical kind of curious</Eyebrow>
          <div>
            <h2>
              Good software starts
              <br />
              with a <span>real problem.</span>
            </h2>
            <p>
              I’m a London-based Computer Science graduate with experience
              across software development, AI workflows and university systems.
              I enjoy making complicated things clearer — whether that means
              building a website, working through an infrastructure issue or
              helping someone find their next step.
            </p>
            <ArrowLink href="/about">A little more about me</ArrowLink>
          </div>
        </Reveal>
      </section>
      <section className="selected-work wrap" id="selected-work">
        <Reveal>
          <div className="section-heading">
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <h2>
                Built to be <span>useful.</span>
              </h2>
            </div>
            <ArrowLink href="/projects">View all eight projects</ArrowLink>
          </div>
          <div className="projects-grid selected-grid">
            {[projects[0], projects[1], projects[2], projects[5]].map(
              (p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ),
            )}
          </div>
        </Reveal>
      </section>
      <ProjectExplorer />
      <section className="capabilities wrap">
        <Reveal>
          <div className="section-heading">
            <div>
              <Eyebrow>How I contribute</Eyebrow>
              <h2>
                A connected <span>skill set.</span>
              </h2>
            </div>
            <p className="section-aside">
              Technical foundations.
              <br />A practical perspective.
            </p>
          </div>
          <div className="capability-grid">
            {[
              {
                icon: Code2,
                n: "01",
                title: "Software & web",
                text: "Building interfaces and APIs that turn requirements into something people can use.",
                tags: ["Python", "Java", "JavaScript", "HTML & CSS"],
                link: "/projects",
                action: "Explore software projects",
              },
              {
                icon: Workflow,
                n: "02",
                title: "AI & data workflows",
                text: "Connecting APIs, structuring information and making room for validation and failure.",
                tags: ["FastAPI", "LLM APIs", "SQLite", "OpenStack"],
                link: "/projects/flosendo",
                action: "Explore AI workflows",
              },
              {
                icon: Users,
                n: "03",
                title: "People & delivery",
                text: "Listening to stakeholders, investigating issues and communicating a clear next step.",
                tags: [
                  "Requirements",
                  "Documentation",
                  "SITS & CRM",
                  "Client delivery",
                ],
                link: "/experience",
                action: "Explore my experience",
              },
            ].map((c) => (
              <article key={c.n}>
                <div className="capability-top">
                  <c.icon size={26} />
                  <span>{c.n}</span>
                </div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <div className="tags">
                  {c.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <ArrowLink href={c.link}>{c.action}</ArrowLink>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="experience-preview wrap">
        <Reveal className="experience-preview-grid">
          <div>
            <Eyebrow>Experience that connects</Eyebrow>
            <h2>
              Code is one part.
              <br />
              <span>Context is the other.</span>
            </h2>
            <p>
              Research labs, client projects and university operations have
              shaped how I approach technology and the people relying on it.
            </p>
            <ArrowLink href="/experience">Explore my experience</ArrowLink>
          </div>
          <div className="mini-timeline">
            {[
              [
                "2026",
                "Software Developer",
                "Transport Research Lab · Westminster",
              ],
              ["2025", "Web Developer", "Crisis of Migration Discourse"],
              [
                "2024—25",
                "Junior Consultant",
                "Westminster Business Consultants",
              ],
            ].map(([year, role, org]) => (
              <div key={role}>
                <span>{year}</span>
                <h3>{role}</h3>
                <p>{org}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="why-preview">
        <div className="wrap why-preview-grid">
          <div>
            <Eyebrow>Why work with me</Eyebrow>
            <h2>
              More than code.
              <br />
              <span>
                Someone who cares
                <br />
                where it leads.
              </span>
            </h2>
            <ArrowLink href="/why-work-with-me" light>
              Here’s what I bring
            </ArrowLink>
          </div>
          <div>
            <p>
              I take ownership, ask questions and stay useful when the answer
              isn’t obvious.
            </p>
            <div className="why-proof">
              <span>01 / OWNERSHIP</span>
              <h3>
                An idea. A funded project.
                <br />A website out in the world.
              </h3>
              <p>
                With Jobstrikes, I took responsibility for the work from
                planning through to hosting and launch.
              </p>
            </div>
            <div className="why-proof">
              <span>02 / ADAPTABILITY</span>
              <h3>
                When the environment stopped,
                <br />
                the work kept moving.
              </h3>
              <p>
                During an OpenStack outage, I adapted validation and documented
                a path forward for the research team.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
