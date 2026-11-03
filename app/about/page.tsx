import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro, Eyebrow, ArrowLink, ContactBand } from "@/components/ui";
export const metadata: Metadata = {
  title: "About me",
  description:
    "Meet Sikandar Ali, a London-based Computer Science graduate interested in useful software, AI and practical problem-solving.",
  alternates: { canonical: "/about" },
};
export default function About() {
  return (
    <>
      <PageIntro
        label="About / a little more human"
        title={
          <>
            Curious by nature.
            <br />
            <span>Practical by choice.</span>
          </>
        }
        description="I’m Sikandar, a Computer Science graduate based in London. I like understanding how things work — and finding ways to make them work better for people."
      />
      <section className="about-story wrap">
        <div className="about-portrait">
          <Image
            src="/images/sikandar-ali.webp"
            width={800}
            height={800}
            alt="Sikandar Ali, London-based software developer"
            sizes="(max-width: 700px) 90vw, 500px"
            priority
          />
          <span>LONDON, UK / OPEN TO THE NEXT CHAPTER</span>
        </div>
        <div className="story-copy">
          <Eyebrow>The story so far</Eyebrow>
          <h2>
            Technology makes sense
            <br />
            when it helps someone.
          </h2>
          <p>
            Studying Computer Science at the University of Westminster gave me a
            foundation in programming and a chance to explore how software ideas
            become working applications. I graduated in 2026 with a 2:1.
          </p>
          <p>
            Since then, my experience has stretched across public websites,
            Python research workflows, client applications and AI feedback
            systems. Each project has offered a different version of the same
            challenge: understand the need, make a considered decision and
            deliver something useful.
          </p>
          <p>
            Alongside development, I’ve worked in university admissions and
            enrolment. Helping people navigate complex systems has made me more
            attentive to clear information, reliable records and the small
            details that shape someone’s experience.
          </p>
          <p>
            I’m drawn to teams where I can ask questions, take responsibility
            and keep learning through the work itself.
          </p>
          <ArrowLink href="/why-work-with-me">
            What I could bring to your team
          </ArrowLink>
        </div>
      </section>
      <section className="about-values wrap">
        <Eyebrow>A few things I value</Eyebrow>
        <div>
          <article>
            <span>01 / CURIOSITY</span>
            <h3>Understand before deciding.</h3>
            <p>
              Read the source, ask a better question and make room for a
              different explanation.
            </p>
          </article>
          <article>
            <span>02 / USEFULNESS</span>
            <h3>Make the next step clearer.</h3>
            <p>
              A useful interface or a well-written handover can make someone
              else’s work easier.
            </p>
          </article>
          <article>
            <span>03 / OWNERSHIP</span>
            <h3>Stay with the problem.</h3>
            <p>
              Follow the details through, communicate the limits and leave the
              work in a better place.
            </p>
          </article>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
