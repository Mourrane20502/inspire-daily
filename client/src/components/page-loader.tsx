import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const STATUS_STEPS = [
  { at: 0, label: "Préparation du voyage" },
  { at: 28, label: "Chargement des départs" },
  { at: 58, label: "Sélection des formules" },
  { at: 82, label: "Ouverture des portes" },
  { at: 100, label: "Bienvenue" },
] as const;

type PageLoaderProps = {
  duration?: number;
  onComplete: () => void;
};

export function PageLoader({ duration = 1000, onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const status =
    [...STATUS_STEPS].reverse().find((step) => progress >= step.at)?.label ??
    STATUS_STEPS[0].label;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(100, (elapsed / duration) * 100);
      setProgress(next);

      if (next < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => setExiting(true), 60);
        window.setTimeout(() => onCompleteRef.current(), 420);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration]);

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Chargement de la page"
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-primary-deep transition-[opacity,visibility] duration-400 ease-out",
        exiting ? "pointer-events-none opacity-0 invisible" : "opacity-100 visible",
      )}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 size-[28rem] -translate-x-1/2 -translate-y-1/2">
          <div className="size-full rounded-full bg-gold/10 blur-3xl loader-glow" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/40 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, oklch(0.965 0.014 88) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div
        className={cn(
          "relative z-10 flex w-full max-w-md flex-col items-center px-8 transition-all duration-400 ease-out",
          exiting ? "translate-y-6 scale-[0.98] opacity-0" : "translate-y-0 scale-100 opacity-100",
        )}
      >
        {/* Logo mark */}
        <div className="relative mb-10 flex size-24 items-center justify-center">
          <span className="absolute inset-0 rounded-full border border-gold/20 loader-ring-outer" />
          <span className="absolute inset-2 rounded-full border border-gold/30 loader-ring-inner" />
          <span className="absolute inset-4 rounded-full border-2 border-transparent border-t-gold border-r-gold/40 loader-spin" />
          <span className="relative flex flex-col items-center">
            <span className="font-display text-2xl font-semibold tracking-tight text-cream">Omra</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-gold-light">Lumen</span>
          </span>
        </div>

        {/* Progress counter */}
        <div className="mb-6 flex items-end gap-1">
          <span className="font-display text-6xl font-semibold tabular-nums leading-none text-cream">
            {Math.round(progress)}
          </span>
          <span className="mb-2 font-mono text-sm text-gold-light">%</span>
        </div>

        {/* Progress bar */}
        <div className="relative h-1 w-full overflow-hidden rounded-full bg-cream/10 ring-1 ring-cream/10">
          <div
            className="loader-bar-shimmer absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold transition-[width] duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status */}
        <p className="mt-5 min-h-[1.25rem] font-mono text-[10px] uppercase tracking-[0.22em] text-cream/60 transition-opacity duration-300">
          {status}
          <span className="loader-dots inline-flex w-4" aria-hidden />
        </p>

        <p className="mt-8 max-w-xs text-center text-sm leading-relaxed text-cream/45">
          Voyages Omra encadrés · Départs Casablanca, Rabat & Marrakech
        </p>
      </div>

      {/* Exit curtain */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-0 bg-background transition-[height] duration-400 ease-in-out",
          exiting && "h-full",
        )}
      />
    </div>
  );
}
