"use client";

import { useEffect, useState } from "react";

const TRIGGER_PROBABILITY = 0.15;
const MIN_DELAY_MS = 5000;
const MAX_DELAY_MS = 15000;

interface Overlay {
  color: string;
  opacity: number;
}

export default function ParanormalEffects() {
  const [overlay, setOverlay] = useState<Overlay | null>(null);

  useEffect(() => {
    if (Math.random() > TRIGGER_PROBABILITY) return;

    const delay = MIN_DELAY_MS + Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS);

    const t = setTimeout(() => {
      // Black surge — like a power spike
      setOverlay({ color: "#000", opacity: 0.6 });
      // Briefly off
      setTimeout(() => setOverlay(null), 65);
      // Blood red wash
      setTimeout(() => setOverlay({ color: "#3d0000", opacity: 0.72 }), 100);
      // Fade down
      setTimeout(() => setOverlay({ color: "#3d0000", opacity: 0.4 }), 210);
      // Gone
      setTimeout(() => setOverlay(null), 330);
    }, delay);

    return () => clearTimeout(t);
  }, []);

  if (!overlay) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: overlay.color,
        opacity: overlay.opacity,
        pointerEvents: "none",
        zIndex: 9998,
        transition: "none",
      }}
    />
  );
}
