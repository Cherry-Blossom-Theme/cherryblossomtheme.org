"use client";

import React from "react";

export default function AsterideRoute() {
  return (
    <div className="relative">
      <div className="absolute right-6 -top-3 z-20 inline-flex items-center rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Coming soon</div>

      <section className="rounded-[28px] border border-border/70 bg-card/80 p-5 shadow-[0_24px_80px_rgba(195,55,105,0.14)] backdrop-blur-xl sm:p-6">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-primary">AsterIDE</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A softer workspace for thoughtful coding.</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
          The Cherry Blossom palette translates beautifully to an editor shell with calm surfaces, restrained contrast, and a polished blush accent.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <div className="rounded-[1.25rem] border border-border/70 bg-background/70 p-4">
            <p className="text-[0.68rem] uppercase tracking-[0.25em] text-muted-foreground">Why it works</p>
            <p className="mt-2 text-sm leading-6 text-foreground">Quiet tones reduce visual noise while keeping syntax focus and soft hierarchy intact.</p>
          </div>
          <div className="rounded-[1.25rem] border border-border/70 bg-background/70 p-4">
            <p className="text-[0.68rem] uppercase tracking-[0.25em] text-muted-foreground">Install</p>
            <p className="mt-2 text-sm leading-6 text-foreground">Export the palette tokens into your theme package and point AsterIDE at the shipped stylesheet.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
