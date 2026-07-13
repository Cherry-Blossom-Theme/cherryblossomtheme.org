"use client";

import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { appRoutes } from "../lib/routes";
import { siteName, siteTagline } from "../theme";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  useEffect(() => {
    const stored = window.localStorage.getItem("cb-theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
    window.localStorage.setItem("cb-theme", theme);
  }, [theme]);

  const activeRoute = useMemo(() => appRoutes.find((route) => route.path === pathname) ?? appRoutes[0], [pathname]);
  const buttonLabel = theme === "dark" ? "Light mode" : "Dark mode";

  return (
    <div className="min-h-screen overflow-x-hidden text-[color:var(--foreground)]">
      <header className="fixed inset-x-0 top-6 z-50 pointer-events-none">
        <div className="mx-auto max-w-6xl px-4">
          <div className="pointer-events-auto flex items-center justify-between rounded-full border border-white/10 bg-slate-900/40 backdrop-blur px-4 py-2">
            <button type="button" onClick={() => navigate("/")} className="flex items-center gap-3 text-left">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-pink-400/20 bg-white/5 text-sm shadow-sm">✿</div>
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-pink-300">Cherry Blossom</p>
                <p className="text-[0.7rem] text-slate-400">{siteTagline}</p>
              </div>
            </button>
            <nav className="hidden items-center gap-2 md:flex">
              {appRoutes.map((item) => {
                const active = item.path === activeRoute.path;
                if (item.disabled) {
                  return (
                    <div key={item.path} className={`rounded-full px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] transition opacity-50 cursor-not-allowed text-slate-500`}>
                      {item.label}
                    </div>
                  );
                }
                return (
                  <button key={item.path} type="button" onClick={() => navigate(item.path)} className={`rounded-full px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] transition ${active ? "bg-white/12 text-white" : "text-slate-300 hover:bg-white/8 hover:text-pink-200"}`}>
                    {item.label}
                  </button>
                );
              })}
            </nav>
            <div className="flex items-center gap-2">
              <button
                className="rounded-full border border-pink-400/20 bg-white/5 px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-slate-200 transition hover:border-pink-300"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {buttonLabel}
              </button>
              <button className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 md:hidden" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle navigation">
                ☰
              </button>
            </div>
          </div>
        </div>
        {menuOpen ? (
          <div className="mt-3 mx-auto max-w-6xl px-4 pointer-events-auto">
            <div className="rounded-[1rem] border border-white/10 bg-slate-950/80 px-4 py-3 md:hidden">
              <div className="flex flex-col gap-2">
                {appRoutes.map((item) => (
                  item.disabled ? (
                    <div key={item.path} className="rounded-full px-3 py-2 text-left text-sm text-slate-500 opacity-50">{item.label}</div>
                  ) : (
                    <button key={item.path} type="button" onClick={() => { navigate(item.path); setMenuOpen(false); }} className="rounded-full px-3 py-2 text-left text-sm text-slate-300">
                      {item.label}
                    </button>
                  )
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </header>
      <main style={{ paddingTop: "var(--header-offset)", paddingBottom: "var(--header-offset)" }} className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8 lg:py-4">
        <div className="mb-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.68rem] uppercase tracking-[0.3em] text-slate-400">
          {activeRoute.title} • {activeRoute.description}
        </div>
        {children}
      </main>
      <footer className="fixed inset-x-0 bottom-6 z-40 pointer-events-none">
        <div className="mx-auto max-w-6xl px-4">
          <div className="pointer-events-auto rounded-full border border-white/8 bg-slate-900/40 backdrop-blur px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-pink-300">{siteName}</p>
                <p className="mt-1 text-sm text-slate-400">{siteTagline}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Cherry-Blossom-Theme" target="_blank" rel="noreferrer" className="text-sm text-slate-400 transition hover:text-pink-300">GitHub</a>
              <span className="text-sm text-slate-500">© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
