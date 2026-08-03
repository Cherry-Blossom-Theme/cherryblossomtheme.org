"use client";

import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { appRoutes } from "../lib/routes";
import { siteName, siteTagline } from "../theme";
import { PetalField } from "./petal-field";

function getStoredTheme(): "dark" | "light" {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = window.localStorage.getItem("cb-theme");
  return stored === "light" || stored === "dark" ? stored : "dark";
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">(getStoredTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
    window.localStorage.setItem("cb-theme", theme);
  }, [theme]);

  const activeRoute = useMemo(() => appRoutes.find((route) => route.path === pathname) ?? appRoutes[0], [pathname]);
  const buttonLabel = theme === "dark" ? "Light mode" : "Dark mode";

  return (
    <div className="relative min-h-screen overflow-x-hidden text-foreground">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <PetalField />
        <div className="absolute left-[-8%] top-[-10%] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-12%] right-[-8%] h-80 w-80 rounded-full bg-rose-200/20 blur-3xl" />
      </div>

      <header className="fixed inset-x-0 top-6 z-50 pointer-events-none">
        <div className="mx-auto max-w-6xl px-4">
          <div className="pointer-events-auto flex items-center justify-between rounded-full border border-border/70 bg-card/85 px-4 py-2 shadow-[0_12px_40px_rgba(195,55,105,0.12)] backdrop-blur-xl">
            <button type="button" onClick={() => navigate("/")} className="flex items-center gap-3 text-left">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-background/70 text-sm shadow-sm">✿</div>
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-primary">Cherry Blossom</p>
                <p className="text-[0.7rem] text-muted-foreground">{siteTagline}</p>
              </div>
            </button>
            <nav className="hidden items-center gap-2 md:flex">
              {appRoutes.map((item) => {
                const active = item.path === activeRoute.path;
                if (item.disabled) {
                  return (
                    <div key={item.path} className="cursor-not-allowed rounded-full px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-muted-foreground/70 opacity-60">
                      {item.label}
                    </div>
                  );
                }
                return (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => navigate(item.path)}
                    className={`rounded-full px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] transition ${active ? "bg-primary/12 text-primary" : "text-muted-foreground hover:bg-accent/70 hover:text-foreground"}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
            <div className="flex items-center gap-2">
              <button
                className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-foreground transition hover:border-primary/30"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {buttonLabel}
              </button>
              <button className="rounded-full border border-border/70 bg-background/70 p-2 text-muted-foreground md:hidden" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle navigation">
                ☰
              </button>
            </div>
          </div>
        </div>
        {menuOpen ? (
          <div className="pointer-events-auto mx-auto mt-3 max-w-6xl px-4">
            <div className="rounded-[1rem] border border-border/70 bg-card/90 px-4 py-3 shadow-[0_12px_40px_rgba(195,55,105,0.12)] backdrop-blur-xl md:hidden">
              <div className="flex flex-col gap-2">
                {appRoutes.map((item) => (
                  item.disabled ? (
                    <div key={item.path} className="rounded-full px-3 py-2 text-left text-sm text-muted-foreground/70 opacity-60">
                      {item.label}
                    </div>
                  ) : (
                    <button key={item.path} type="button" onClick={() => { navigate(item.path); setMenuOpen(false); }} className="rounded-full px-3 py-2 text-left text-sm text-muted-foreground">
                      {item.label}
                    </button>
                  )
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </header>
      <main style={{ paddingTop: "var(--header-offset)", paddingBottom: "var(--header-offset)" }} className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8 lg:py-4">
        <div className="mb-3 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-[0.68rem] uppercase tracking-[0.3em] text-muted-foreground">
          {activeRoute.title} • {activeRoute.description}
        </div>
        {children}
      </main>
      <footer className="fixed inset-x-0 bottom-6 z-40 pointer-events-none">
        <div className="mx-auto max-w-6xl px-4">
          <div className="pointer-events-auto flex items-center justify-between rounded-full border border-border/70 bg-card/85 px-4 py-2 shadow-[0_12px_40px_rgba(195,55,105,0.12)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-primary">{siteName}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Cherry-Blossom-Theme" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition hover:text-primary">GitHub</a>
              <span className="text-sm text-muted-foreground/70">© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
