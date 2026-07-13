"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PetalField } from "./petal-field";
import { siteDescription } from "../theme";
import { appRoutes } from "../lib/routes";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-b from-slate-950/80 to-slate-900/60 px-6 py-8 shadow-[0_30px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl ring-1 ring-white/5">
      <PetalField />
      <div className="relative grid gap-6 lg:grid-cols-2 lg:items-start">
        <div className="pt-1">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-pink-300">Cherry Blossom Theme</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">A calm palette system for thoughtful interfaces.</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">{siteDescription}</p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">A curated token set for UI, web, and workspace surfaces with subtle depth and easy copy gestures.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.5 }} className="mt-5 flex flex-wrap gap-3">
            <Link to="/palette" style={{ background: "var(--accent)" }} className="rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-95">Palette</Link>
            {appRoutes.find((r) => r.path === "/create")?.disabled ? (
              <div title="Coming soon" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 opacity-60 cursor-not-allowed">Create</div>
            ) : (
              <Link to="/create" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-pink-300">Create</Link>
            )}
            <a href="https://github.com/Cherry-Blossom-Theme" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-pink-300">GitHub</a>
          </motion.div>

          <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-400">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Palette tokens</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Copy-ready values</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Soft interface tone</span>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.12, duration: 0.6 }} className="relative rounded-2xl border border-white/8 bg-slate-900/70 p-6 lg:ml-6 shadow-lg">
          <div className="rounded-xl border border-white/6 bg-white/5 p-5 ring-1 ring-white/3">
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-pink-300" />
              <div className="h-2.5 w-2.5 rounded-full bg-rose-300" />
              <div className="h-2.5 w-2.5 rounded-full bg-fuchsia-300" />
            </div>
            <div className="mt-4 space-y-3">
              <div className="h-3 rounded-full bg-pink-200 w-3/4" />
              <div className="h-3 rounded-full bg-pink-100 w-2/3" />
              <div className="h-3 rounded-full bg-rose-100 w-11/12" />
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.1rem] border border-white/8 bg-white/5 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-slate-500">Palette tension</p>
              <p className="mt-3 text-base font-semibold text-white">Soft contrast</p>
            </div>
            <div className="rounded-[1.1rem] border border-white/8 bg-white/5 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-slate-500">Motion tone</p>
              <p className="mt-3 text-base font-semibold text-white">Gentle drift</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
