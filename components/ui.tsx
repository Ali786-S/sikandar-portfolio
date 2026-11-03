import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}
export function ArrowLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link className={`arrow-link ${light ? "on-dark" : ""}`} href={href}>
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}
export function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <section className="page-intro wrap">
      <Eyebrow>{label}</Eyebrow>
      <h1>{title}</h1>
      <p className="intro-copy">{description}</p>
    </section>
  );
}
export function ProjectArt({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <div
      className={`project-art ${large ? "large" : ""} art-${project.slug}`}
      style={{ background: project.colour }}
    >
      {project.image ? (
        <div className="browser-frame">
          <div className="browser-bar">
            <i />
            <i />
            <i />
            <span>
              {project.live
                ? new URL(project.live).hostname
                : "flosendo · source preview"}
            </span>
          </div>
          <Image
            sizes="(max-width: 600px) 90vw, 600px"
            src={project.image}
            alt={`${project.title}: authentic ${project.live ? "public website" : "source interface"} screenshot`}
            loading="lazy"
            width="1440"
            height="900"
          />
        </div>
      ) : (
        <div className="technical-art" aria-hidden="true">
          <div className="art-grid" />
          <span className="art-caption">
            {project.category} / {project.status.split(" · ")[0]}
          </span>
          {project.slug === "bookstore-api" ? (
            <>
              <div className="code-method">
                GET <span>/api/books</span>
              </div>
              <pre>{'{\n  "title": "A better API",\n  "status": 200\n}'}</pre>
              <span className="art-tag">Java / Jersey</span>
            </>
          ) : project.slug === "openstack-data-lake" ? (
            <>
              <div className="data-flow">
                <span>
                  01
                  <br />
                  UPLOAD
                </span>
                <ArrowRight />
                <span>
                  02
                  <br />
                  CLEAN
                </span>
                <ArrowRight />
                <span>
                  03
                  <br />
                  PROCESS
                </span>
              </div>
              <span className="art-tag">Python × OpenStack</span>
            </>
          ) : project.slug === "restart-housing" ? (
            <>
              <div className="housing-lines">
                <i />
                <i />
                <i />
                <i />
              </div>
              <strong className="art-word">
                Built around
                <br />
                real workflows.
              </strong>
              <span className="art-tag">
                Private client · conceptual diagram
              </span>
            </>
          ) : (
            <>
              <strong className="art-word">
                {project.slug === "student-progression"
                  ? "Logic.\nMade visible."
                  : "Small details.\nBetter experiences."}
              </strong>
              <span className="art-tag">{project.languages.join(" / ")}</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <article className="project-card">
      <Link
        href={`/projects/${project.slug}`}
        className="project-image-link"
        aria-label={`Read ${project.title} case study`}
      >
        <ProjectArt project={project} />
        <span className="project-open">
          <ArrowUpRight size={23} />
        </span>
      </Link>
      <div className="project-meta">
        <span>
          0{index + 1} / {project.category}
        </span>
        <span>{project.year}</span>
      </div>
      <Link className="project-title" href={`/projects/${project.slug}`}>
        <h3>{project.title}</h3>
        <ArrowUpRight size={24} />
      </Link>
      <p>{project.description}</p>
      <div className="tags">
        {project.languages.length ? (
          project.languages.map((l) => <span key={l}>{l}</span>)
        ) : (
          <span>Private stack · CV-verified capabilities</span>
        )}
      </div>
    </article>
  );
}
export function ContactBand() {
  return (
    <section className="contact-band">
      <div className="wrap">
        <Eyebrow>Good work starts with a conversation</Eyebrow>
        <div className="contact-band-row">
          <h2>
            Let’s build
            <br />
            something meaningful<span>.</span>
          </h2>
          <Link
            href="/contact"
            className="circle-link"
            aria-label="Get in touch"
          >
            <ArrowUpRight size={40} />
          </Link>
        </div>
        <p>
          Graduate technology roles, thoughtful teams and interesting problems.
        </p>
      </div>
    </section>
  );
}
