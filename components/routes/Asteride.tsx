"use client";

import React from "react";

export default function AsterideRoute() {
  return (
    <div className="relative">
      <div className="absolute right-6 -top-3 z-20 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-pink-300 border border-white/8">Coming soon</div>
    
    <section className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5 shadow-[0_18px_34px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-6">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-pink-300">AsterIDE</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">A softer workspace for thoughtful coding.</h1>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
        The Cherry Blossom palette translates beautifully to an editor shell with calm surfaces, restrained contrast, and a polished blush accent.
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
          <p className="text-[0.68rem] uppercase tracking-[0.25em] text-slate-500">Why it works</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">Quiet tones reduce visual noise while keeping syntax focus and soft hierarchy intact.</p>
        </div>
        <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
          <p className="text-[0.68rem] uppercase tracking-[0.25em] text-slate-500">Install</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">Export the palette tokens into your theme package and point AsterIDE at the shipped stylesheet.</p>
        </div>
      </div>
    </section>
    </div>
  );
}
