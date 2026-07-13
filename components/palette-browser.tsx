"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { buildPalette } from "../lib/palette";

export function PaletteBrowser() {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const palette = useMemo(() => buildPalette(mode), [mode]);
  const filtered = useMemo(() => [...palette.colors].sort((a, b) => a.name.localeCompare(b.name)), [palette.colors]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
    }
  };

  return (
    <section className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 shadow-[0_18px_34px_rgba(0,0,0,0.24)] backdrop-blur-xl">
      <div className="border-b border-white/10 bg-white/5/60 p-5 sm:p-6 lg:p-7">
        <div className="mb-4 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="space-y-3">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-slate-500">Palette</p>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Palette</h1>
              <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-pink-300">Editable</span>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-400">Browse the full palette in a compact editorial layout with calm contrast, easy copy gestures, and a cleaner token presentation.</p>
            <p className="text-sm text-slate-500">Tap any value to copy it directly to your clipboard.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setMode("dark")} className={`whitespace-nowrap rounded-full px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition ${mode === "dark" ? "bg-pink-500 text-white shadow-sm shadow-pink-500/30" : "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"}`}>Dark</button>
            <button onClick={() => setMode("light")} className={`whitespace-nowrap rounded-full px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition ${mode === "light" ? "bg-pink-500 text-white shadow-sm shadow-pink-500/30" : "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"}`}>Light</button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto p-5 sm:p-6 lg:p-7">
        {filtered.length === 0 ? (
          <div className="rounded-[1.25rem] border border-dashed border-white/10 bg-slate-950/60 p-8 text-center text-slate-400">
            No colors found.
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/90 text-left text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-500 backdrop-blur">
                <th className="pb-3 pr-4">Role</th>
                <th className="pb-3 pr-4">Hex</th>
                <th className="pb-3 pr-4">HSL</th>
                <th className="pb-3">RGB</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((color) => (
                <motion.tr
                  key={color.name}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                  className="border-b border-white/5 bg-slate-950/60 text-sm last:border-b-0"
                >
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full border border-white/20" style={{ backgroundColor: color.hex }} />
                      <span className="text-slate-200">{color.name}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-4 cursor-pointer">
                    <div onClick={() => void copyToClipboard(color.hex)} title="Click to copy" className="inline-flex items-center gap-2 rounded-md bg-slate-900/70 px-3 py-1 transition hover:bg-slate-900/80">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-slate-300 opacity-90"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 4h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM9 4v3h6V4" /></svg>
                      <span className="font-mono text-slate-300">{color.hex}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-4 cursor-pointer">
                    <div onClick={() => void copyToClipboard(color.hsl)} title="Click to copy" className="inline-flex items-center gap-2 rounded-md bg-slate-900/70 px-3 py-1 transition hover:bg-slate-900/80">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-slate-300 opacity-90"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 4h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM9 4v3h6V4" /></svg>
                      <span className="text-slate-400">{color.hsl}</span>
                    </div>
                  </td>
                  <td className="py-3 cursor-pointer">
                    <div onClick={() => void copyToClipboard(color.rgb.join(", "))} title="Click to copy" className="inline-flex items-center gap-2 rounded-md bg-slate-900/70 px-3 py-1 transition hover:bg-slate-900/80">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-slate-300 opacity-90"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 4h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM9 4v3h6V4" /></svg>
                      <span className="text-slate-400">{color.rgb.join(", ")}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
