"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, filters } from "@/lib/projects";
import { ProjectCard, Eyebrow } from "./ui";
import { Scene } from "./scene-loader";
export function ProjectGallery() {
  const [filter, setFilter] = useState("All work");
  const list = projects.filter(
    (p) => filter === "All work" || p.category === filter,
  );
  return (
    <>
      <div
        className="filter-row"
        role="group"
        aria-label="Filter projects by discipline"
      >
        {filters.map((f) => (
          <button
            key={f}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
            {f === "All work" && <span>{projects.length}</span>}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {list.length} projects shown
      </p>
      <div className="projects-grid">
        {list.map((p) => (
          <ProjectCard key={p.slug} project={p} index={projects.indexOf(p)} />
        ))}
      </div>
    </>
  );
}
const featured = projects.slice(0, 3);
export function ProjectExplorer() {
  const [selected, setSelected] = useState(0);
  const project = featured[selected];
  return (
    <section className="showcase">
      <div className="wrap showcase-grid">
        <div className="showcase-copy">
          <Eyebrow>Ideas, made tangible</Eyebrow>
          <h2>
            Different problems.
            <br />
            <span>The same care.</span>
          </h2>
          <p>
            Explore a few things I’ve built. Real interfaces, considered
            decisions and the technical story behind each one.
          </p>
          <div
            className="project-tabs"
            role="group"
            aria-label="Choose a featured project"
          >
            {featured.map((p, i) => (
              <button
                key={p.slug}
                aria-pressed={i === selected}
                onClick={() => setSelected(i)}
              >
                <span>0{i + 1}</span>
                {p.title}
                <ArrowUpRight size={18} />
              </button>
            ))}
          </div>
          <Link href={`/projects/${project.slug}`} className="text-link">
            Explore {project.title}
            <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="showcase-display">
          <span className="display-label">
            INTERACTIVE PROJECT VIEW / 0{selected + 1}
          </span>
          <Scene kind="device" src={project.image!} />
          <div className="display-caption">
            <span>{project.languages.join(" · ")}</span>
            <span>Move your pointer to explore ↗</span>
          </div>
          <p className="image-note">{project.imageNote}</p>
        </div>
      </div>
    </section>
  );
}
