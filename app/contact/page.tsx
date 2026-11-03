import type { Metadata } from "next";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { PageIntro, Eyebrow } from "@/components/ui";
import { CopyEmail } from "@/components/contact-actions";
import { email, github, linkedin } from "@/lib/site";
export const metadata: Metadata = {
  title: "Get in touch",
  description:
    "Contact Sikandar Ali about graduate software development and technology opportunities. Email, LinkedIn, GitHub and CV.",
  alternates: { canonical: "/contact" },
};
export default function Contact() {
  return (
    <>
      <PageIntro
        label="Contact / start a conversation"
        title={
          <>
            Something in mind?
            <br />
            <span>I’d love to hear it.</span>
          </>
        }
        description="A graduate opportunity, an interesting project or a thoughtful conversation about technology — the best place to reach me is by email."
      />
      <section className="contact-page wrap">
        <div className="email-panel">
          <Eyebrow>Say hello</Eyebrow>
          <a className="big-email" href={`mailto:${email}`}>
            {email}
            <ArrowUpRight />
          </a>
          <CopyEmail />
          <div className="contact-details">
            <span>
              <MapPin size={15} />
              London, United Kingdom
            </span>
            <span>Interested in graduate technology opportunities</span>
          </div>
        </div>
        <div className="contact-options">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <div>
              <span>01 / CONNECT</span>
              <h2>Find me on LinkedIn</h2>
              <p>Experience, updates and professional connections.</p>
            </div>
            <ArrowUpRight />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <div>
              <span>02 / EXPLORE</span>
              <h2>Look through my GitHub</h2>
              <p>The source behind the projects.</p>
            </div>
            <ArrowUpRight />
          </a>
          <a href="/Sikandar-Ali-CV.docx" download>
            <div>
              <span>03 / KEEP A COPY</span>
              <h2>Download my CV</h2>
              <p>The original CV · Microsoft Word document.</p>
            </div>
            <Download />
          </a>
        </div>
        <div className="contact-footnote">
          No contact form, no extra account. Your message goes directly to my
          inbox through your email app.
        </div>
      </section>
    </>
  );
}
