import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, ContactBand } from "@/components/ui";
import { experience } from "@/lib/experience";
export const metadata: Metadata = {
  title: "Experience",
  description:
    "Software development, research, consulting and university systems experience at Westminster and the University of East London.",
  alternates: { canonical: "/experience" },
};
export default function Experience() {
  return (
    <>
      <PageIntro
        label="Experience / the wider perspective"
        title={
          <>
            Technical work.
            <br />
            <span>Human understanding.</span>
          </>
        }
        description="My experience connects development with the people and organisations using technology. These roles have taught me to investigate carefully, communicate clearly and follow the work through."
      />
      <section className="wrap experience-list">
        <div className="timeline-label">
          <span>THE JOURNEY SO FAR</span>
          <a href="/Sikandar-Ali-CV.docx" download>
            Download full CV
            <ArrowUpRight size={15} />
          </a>
        </div>
        {experience.map((e, i) => (
          <article className="timeline-entry" key={e.role}>
            <div className="timeline-date">
              <span className="timeline-dot" />
              {e.dates}
            </div>
            <div>
              <span className="role-kind">{e.kind}</span>
              <h2>{e.role}</h2>
              <p className="organisation">{e.organisation}</p>
              <ul>
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              {e.project && (
                <Link href={`/projects/${e.project}`} className="text-link">
                  Related case study
                  <ArrowUpRight size={16} />
                </Link>
              )}
            </div>
            <span className="timeline-index">
              {String(i + 1).padStart(2, "0")}
            </span>
          </article>
        ))}
      </section>
      <section className="education-strip wrap">
        <div>
          <span className="eyebrow">Education</span>
          <h2>BSc (Hons) Computer Science</h2>
          <p>University of Westminster · 2023–2026 · 2:1</p>
        </div>
        <div>
          <span className="eyebrow">Professional development</span>
          <p>Skyscanner Software Engineering Job Simulation · Forage, 2025</p>
          <p>Westminster Working Cultures · Cairo Programme, 2024</p>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
