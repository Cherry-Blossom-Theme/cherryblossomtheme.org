"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { buildCssVariables, buildJsonPalette, buildPalette, buildTomlPalette, buildYamlPalette } from "../lib/palette";

const exportFormats = [
  { label: "JSON", value: "json" },
  { label: "CSS", value: "css" },
  { label: "YAML", value: "yaml" },
  { label: "TOML", value: "toml" },
] as const;

type ExportFormat = (typeof exportFormats)[number]["value"];

export function PaletteBrowser() {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const [activeExport, setActiveExport] = useState<ExportFormat>("json");
  const palette = useMemo(() => buildPalette(mode), [mode]);
  const filtered = useMemo(() => [...palette.colors].sort((a, b) => a.name.localeCompare(b.name)), [palette.colors]);

  const exportText = useMemo(() => {
    switch (activeExport) {
      case "css":
        return buildCssVariables(mode);
      case "yaml":
        return buildYamlPalette(mode);
      case "toml":
        return buildTomlPalette(mode);
      case "json":
      default: {
        const data = buildJsonPalette(mode);
        const entries = Object.entries(data)
          .map(([key, value]) => `  "${key}": {"hex": "${value.hex}", "rgb": [${value.rgb.join(", ")}], "hsl": "${value.hsl}"}`)
          .join(",\n");

        return `{
  "mode": "${mode}",
  "colors": {
${entries}
  }
}`;
      }
    }
  }, [activeExport, mode]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
    }
  };

  return (
    <section className="overflow-hidden rounded-[28px] border border-border/70 bg-card/80 shadow-[0_24px_80px_rgba(195,55,105,0.14)] backdrop-blur-xl">
      <div className="border-b border-border/70 bg-accent/60 p-5 sm:p-6 lg:p-7">
        <div className="mb-4 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="space-y-3">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-muted-foreground">Palette</p>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Palette</h1>
              <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-primary">Editable</span>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground">A cleaner palette workspace with quick copy actions, live format previews, and export support for common config styles.</p>
            <p className="text-sm text-muted-foreground/80">Tap a swatch or any value to copy it instantly.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setMode("dark")} className={`whitespace-nowrap rounded-full px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition ${mode === "dark" ? "bg-primary text-white shadow-sm shadow-primary/30" : "border border-border/70 bg-background/70 text-foreground hover:bg-accent/80"}`}>Dark</button>
            <button onClick={() => setMode("light")} className={`whitespace-nowrap rounded-full px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition ${mode === "light" ? "bg-primary text-white shadow-sm shadow-primary/30" : "border border-border/70 bg-background/70 text-foreground hover:bg-accent/80"}`}>Light</button>
          </div>
        </div>

      </div>

      <div className="overflow-x-auto p-5 sm:p-6 lg:p-7">
        {filtered.length === 0 ? (
          <div className="rounded-[1.25rem] border border-dashed border-border/70 bg-background/60 p-8 text-center text-muted-foreground">
            No colors found.
          </div>
        ) : (
          <div className="rounded-[22px] border border-border/70 bg-background/60 p-2">
            <table className="w-full">
              <thead>
                <tr className="sticky top-0 z-10 border-b border-border/70 bg-background/90 text-left text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground backdrop-blur">
                  <th className="pb-3 pl-3 pr-4">Role</th>
                  <th className="pb-3 pr-4">Hex</th>
                  <th className="pb-3 pr-4">HSL</th>
                  <th className="pb-3 pr-4">RGB</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((color) => (
                  <motion.tr
                    key={color.name}
                    whileHover={{ backgroundColor: "rgba(195, 55, 105, 0.06)" }}
                    className="border-b border-border/50 bg-transparent text-sm last:border-b-0"
                  >
                    <td className="py-3 pl-3 pr-4">
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full border border-border/60" style={{ backgroundColor: color.hex }} />
                        <span className="text-foreground">{color.name}</span>
                      </div>
                    </td>
                    <td className="py-3 pr-4">
                      <button onClick={() => void copyToClipboard(color.hex)} title="Click to copy" className="inline-flex items-center gap-2 rounded-md bg-background/70 px-3 py-1 transition hover:bg-accent/80">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-muted-foreground opacity-90"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 4h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM9 4v3h6V4" /></svg>
                        <span className="font-mono text-foreground">{color.hex}</span>
                      </button>
                    </td>
                    <td className="py-3 pr-4">
                      <button onClick={() => void copyToClipboard(color.hsl)} title="Click to copy" className="inline-flex items-center gap-2 rounded-md bg-background/70 px-3 py-1 transition hover:bg-accent/80">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-muted-foreground opacity-90"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 4h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM9 4v3h6V4" /></svg>
                        <span className="text-muted-foreground">{color.hsl}</span>
                      </button>
                    </td>
                    <td className="py-3 pr-4">
                      <button onClick={() => void copyToClipboard(color.rgb.join(", "))} title="Click to copy" className="inline-flex items-center gap-2 rounded-md bg-background/70 px-3 py-1 transition hover:bg-accent/80">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-muted-foreground opacity-90"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 4h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1-2-2ZM9 4v3h6V4" /></svg>
                        <span className="text-muted-foreground">{color.rgb.join(", ")}</span>
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-5 rounded-[20px] border border-border/70 bg-background/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.24)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-muted-foreground">Export</p>
              <p className="mt-1 text-sm text-foreground">Copy the full palette in a format that fits your stack.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {exportFormats.map((format) => (
                <button
                  key={format.value}
                  onClick={() => setActiveExport(format.value)}
                  className={`rounded-full px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition ${activeExport === format.value ? "bg-primary text-white" : "border border-border/70 bg-transparent text-muted-foreground hover:bg-accent/80 hover:text-foreground"}`}
                >
                  {format.label}
                </button>
              ))}
              <button
                onClick={() => void copyToClipboard(exportText)}
                className="rounded-full border border-border/70 bg-primary/10 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary transition hover:bg-primary/20"
              >
                Copy {activeExport.toUpperCase()}
              </button>
            </div>
          </div>
          <pre className="mt-4 overflow-x-auto rounded-[16px] border border-border/60 bg-background/90 p-4 text-[0.8rem] leading-6 text-muted-foreground">
            <code>{exportText}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
