"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { siteDescription } from "../theme";
import { appRoutes } from "../lib/routes";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-border/70 bg-card/80 px-6 py-8 shadow-[0_24px_80px_rgba(195,55,105,0.14)] backdrop-blur-xl">
      <div className="relative grid gap-6 lg:grid-cols-2 lg:items-start">
        <div className="pt-1">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              Ported from asteride.dev
            </div>
            <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-primary">Cherry Blossom Theme</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">A calm palette system for thoughtful interfaces.</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">{siteDescription}</p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground/80">A curated token set for UI, web, and workspace surfaces with subtle depth and easy copy gestures.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.5 }} className="mt-5 flex flex-wrap gap-3">
            <Link to="/palette" className="btn-ide btn-ide-pill px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em]">Palette</Link>
            {appRoutes.find((r) => r.path === "/create")?.disabled ? (
              <div title="Coming soon" className="cursor-not-allowed rounded-full border border-border/70 bg-background/70 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground opacity-70">Create</div>
            ) : (
              <Link to="/create" className="rounded-full border border-border/70 bg-background/70 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition hover:border-primary/40 hover:text-primary">Create</Link>
            )}
            <a href="https://github.com/Cherry-Blossom-Theme" target="_blank" rel="noreferrer" className="rounded-full border border-border/70 bg-background/70 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition hover:border-primary/40 hover:text-primary">GitHub</a>
          </motion.div>

          <div className="mt-4 flex flex-wrap gap-2 text-sm text-muted-foreground">
            <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1">Palette tokens</span>
            <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1">Copy-ready values</span>
            <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1">Soft interface tone</span>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.12, duration: 0.6 }} className="relative rounded-[24px] border border-border/70 bg-background/70 p-6 shadow-[0_12px_36px_rgba(195,55,105,0.08)] lg:ml-6">
          <div className="rounded-[20px] border border-border/70 bg-card/70 p-5">
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-primary" />
              <div className="h-2.5 w-2.5 rounded-full bg-rose-300" />
              <div className="h-2.5 w-2.5 rounded-full bg-fuchsia-300" />
            </div>
            <div className="mt-4 space-y-3">
              <div className="h-3 w-3/4 rounded-full bg-primary/70" />
              <div className="h-3 w-2/3 rounded-full bg-primary/40" />
              <div className="h-3 w-11/12 rounded-full bg-rose-200/70" />
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.1rem] border border-border/70 bg-accent/70 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">Palette tension</p>
              <p className="mt-3 text-base font-semibold text-foreground">Soft contrast</p>
              <p className="mt-2 text-sm text-muted-foreground">Calm enough for long sessions without feeling flat.</p>
            </div>
            <div className="rounded-[1.1rem] border border-border/70 bg-accent/70 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">Motion tone</p>
              <p className="mt-3 text-base font-semibold text-foreground">Gentle drift</p>
              <p className="mt-2 text-sm text-muted-foreground">The petals linger like a soft, ambient breeze.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
