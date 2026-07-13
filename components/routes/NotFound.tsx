"use client";

import React from "react";

export default function NotFoundRoute() {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5 shadow-[0_18px_34px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-6">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-pink-300">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">This page is still being composed.</h1>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">The route exists in the map, but the page hasn’t been written yet. Return home and browse the main collection.</p>
    </section>
  );
}
