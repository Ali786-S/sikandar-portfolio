import type { Metadata } from "next";
import { PageIntro, ContactBand } from "@/components/ui";
import { ProjectGallery } from "@/components/project-explorer";
export const metadata: Metadata = {
  title: "Selected projects",
  description:
    "Eight source-verified software projects: AI feedback, public websites, Java APIs, Python workflows and client delivery.",
  alternates: { canonical: "/projects" },
};
export default function Projects() {
  return (
    <>
      <PageIntro
        label="Work / a closer look"
        title={
          <>
            Different challenges.
            <br />
            <span>Considered solutions.</span>
          </>
        }
        description="From public-facing websites to AI and research workflows. Each project includes the technical decisions, my contribution and an honest account of what was delivered."
      />
      <section className="wrap gallery-section">
        <ProjectGallery />
        <div className="evidence-note">
          <span>ABOUT THE DETAILS</span>
          <p>
            Languages and frameworks are checked against public source where
            available. CV-supported work is identified, development status is
            explicit, and private client implementation details are kept
            private.
          </p>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
