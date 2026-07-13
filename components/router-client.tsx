"use client";

import dynamic from "next/dynamic";

const AppRouterShell = dynamic(() => import("./app-router-shell").then((mod) => ({ default: mod.AppRouterShell })), { ssr: false });

export function RouterClient() {
  return <AppRouterShell />;
}
