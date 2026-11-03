import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, Eyebrow, ContactBand } from "@/components/ui";
import { strengths } from "@/lib/experience";
export const metadata: Metadata = {
  title: "Why hire me?",
  description:
    "Six evidence-backed reasons to work with Sikandar Ali: ownership, technical range, adaptability, user understanding, care and clear communication.",
  alternates: { canonical: "/why-work-with-me" },
};
export default function Why() {
  return (
    <>
      <PageIntro
        label="Why hire me / beyond the code"
        title={
          <>
            A developer’s mindset.
            <br />
            <span>A people-first perspective.</span>
          </>
        }
        description="I bring technical foundations, practical delivery experience and an understanding of the people behind the systems we build. Here’s what that could mean for your team."
      />
      <section className="why-manifesto">
        <div className="wrap">
          <Eyebrow>What you can expect</Eyebrow>
          <h2>
            Someone who takes ownership,
            <br />
            asks thoughtful questions
            <br />
            and <span>keeps moving the work forward.</span>
          </h2>
          <div className="manifesto-footer">
            <p>
              I’m early in my career. I bring curiosity, a willingness to learn
              from others and concrete experience of taking responsibility for
              useful work.
            </p>
            <span>
              SIKANDAR ALI
              <br />
              SOFTWARE DEVELOPER · LONDON
            </span>
          </div>
        </div>
      </section>
      <section className="strengths wrap">
        {strengths.map((s, i) => (
          <article className="strength" key={s.title}>
            <span className="strength-number">0{i + 1}</span>
            <div>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
              <span className="strength-proof">{s.proof}</span>
            </div>
            <Link
              href={`/projects/${s.project}`}
              className="strength-link"
              aria-label={`Evidence for ${s.title}`}
            >
              <ArrowUpRight size={28} />
              <span>See the evidence</span>
            </Link>
          </article>
        ))}
      </section>
      <section className="fit-section wrap">
        <div>
          <Eyebrow>A good fit</Eyebrow>
          <h2>
            Room to contribute.
            <br />
            <span>Space to grow.</span>
          </h2>
        </div>
        <div>
          <p>
            I’m looking for a graduate technology role where I can contribute to
            real software, learn from experienced colleagues and develop sound
            engineering habits.
          </p>
          <p>
            I’m particularly interested in software development, web products,
            AI-enabled workflows and technology roles that combine
            problem-solving with understanding users.
          </p>
          <Link className="button primary" href="/contact">
            Let’s start a conversation
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
