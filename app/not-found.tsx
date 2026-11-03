import Link from "next/link";
import { PageIntro } from "@/components/ui";
export default function NotFound() {
  return (
    <>
      <PageIntro
        label="404 / a small detour"
        title={
          <>
            This page took
            <br />
            <span>a different path.</span>
          </>
        }
        description="The page you’re looking for isn’t here. The projects are a good place to pick up the trail."
      />
      <div className="wrap not-found-actions">
        <Link className="button primary" href="/projects">
          Explore the projects ↗
        </Link>
        <Link className="button secondary" href="/">
          Back to home
        </Link>
      </div>
    </>
  );
}
