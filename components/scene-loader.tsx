"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Component, useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
const Hero = dynamic(() => import("./scenes").then((m) => m.HeroScene), {
  ssr: false,
});
const Device = dynamic(() => import("./scenes").then((m) => m.DeviceScene), {
  ssr: false,
});
class SceneBoundary extends Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}
export function Scene({
  kind = "hero",
  src = "/images/flosendo-source.webp",
}: {
  kind?: "hero" | "device";
  src?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [capable, setCapable] = useState(false);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const screen = window.matchMedia("(min-width: 900px)");
    const check = () => {
      const connection = (
        navigator as Navigator & { connection?: { saveData?: boolean } }
      ).connection;
      setCapable(screen.matches && !motion.matches && !connection?.saveData);
    };
    check();
    motion.addEventListener("change", check);
    screen.addEventListener("change", check);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "80px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", check);
      screen.removeEventListener("change", check);
    };
  }, []);
  const fallback =
    kind === "hero" ? (
      <div
        className="orbit-fallback"
        role="img"
        aria-label="Static orbital engineering sculpture"
      >
        <i />
        <i />
        <i />
        <b />
        <span />
        <em />
      </div>
    ) : (
      <div className="device-fallback">
        <Image
          sizes="(max-width: 600px) 90vw, 600px"
          src={src}
          alt="Authentic project interface in a static laptop display"
          width={1440}
          height={900}
        />
        <i />
      </div>
    );
  return (
    <div className={`scene scene-${kind}`} ref={ref}>
      <div className="scene-static">{fallback}</div>
      {capable && visible && !paused && (
        <div className="scene-canvas">
          <SceneBoundary fallback={fallback}>
            {kind === "hero" ? <Hero /> : <Device src={src} />}
          </SceneBoundary>
        </div>
      )}
      {capable && (
        <button
          className="motion-toggle"
          onClick={() => setPaused(!paused)}
          aria-label={paused ? "Play 3D animation" : "Pause 3D animation"}
        >
          {paused ? <Play size={12} /> : <Pause size={12} />}
          <span>{paused ? "Play motion" : "Pause motion"}</span>
        </button>
      )}
    </div>
  );
}
