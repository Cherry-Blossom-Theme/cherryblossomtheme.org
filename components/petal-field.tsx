"use client";

import { motion } from "framer-motion";

const petals = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  size: 10 + (index % 4) * 4,
  left: `${(index * 11) % 100}%`,
  delay: index * 0.2,
  duration: 8 + (index % 3) * 2,
}));

export function PetalField() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute top-[-8%] rounded-full bg-white/70 blur-[1px]"
          style={{ left: petal.left, width: petal.size, height: petal.size }}
          animate={{ y: [0, 1200], x: [0, 20, -20, 0], rotate: [0, 180, 360], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: petal.duration, repeat: Number.POSITIVE_INFINITY, delay: petal.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
