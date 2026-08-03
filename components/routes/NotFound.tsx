"use client";

import React from "react";

export default function NotFoundRoute() {
  return (
    <section className="rounded-[28px] border border-border/70 bg-card/80 p-5 shadow-[0_24px_80px_rgba(195,55,105,0.14)] backdrop-blur-xl sm:p-6">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-primary">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">This page is still being composed.</h1>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">The route exists in the map, but the page hasn’t been written yet. Return home and browse the main collection.</p>
    </section>
  );
}
