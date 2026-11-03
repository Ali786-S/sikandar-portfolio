import type { Metadata } from "next";
import { PageIntro } from "@/components/ui";
export const metadata: Metadata = {
  title: "Privacy & accessibility",
  alternates: { canonical: "/privacy" },
};
export default function Privacy() {
  return (
    <>
      <PageIntro
        label="The details"
        title={
          <>
            Privacy &<br />
            <span>accessibility.</span>
          </>
        }
        description="A straightforward portfolio should be straightforward about how it works."
      />
      <section className="prose-page wrap">
        <h2>Privacy</h2>
        <p>
          This portfolio does not include advertising, analytics scripts,
          tracking cookies or a contact-form database. The hosting provider may
          process standard request information, such as IP addresses and server
          logs, to deliver and protect the site.
        </p>
        <p>
          Email links open your email application. LinkedIn, GitHub and project
          websites have their own privacy policies. The CV is a public download
          provided by Sikandar Ali.
        </p>
        <h2>Accessibility & motion</h2>
        <p>
          The site uses semantic structure, keyboard-accessible controls,
          visible focus states and a skip-to-content link. It respects your
          device’s reduced-motion setting. On smaller screens, when data saving
          is enabled, or when reduced motion is requested, static visual
          alternatives replace the WebGL scenes.
        </p>
        <p>
          On supported larger screens, each 3D scene includes a pause control.
          Essential content and links remain available without the 3D scenes.
        </p>
        <h2>Something isn’t working?</h2>
        <p>
          Please email{" "}
          <a href="mailto:alissikandar7788@gmail.com">
            alissikandar7788@gmail.com
          </a>{" "}
          with the page and issue so I can investigate.
        </p>
        <p className="image-note">Last updated: 3 November 2026.</p>
      </section>
    </>
  );
}
