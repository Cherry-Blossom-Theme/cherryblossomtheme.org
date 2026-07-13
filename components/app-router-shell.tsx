"use client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SiteShell } from "./site-shell";
import HomeRoute from "./routes/Home";
import CreateRoute from "./routes/Create";
import PaletteRoute from "./routes/Palette";
import AsterideRoute from "./routes/Asteride";
import NotFoundRoute from "./routes/NotFound";


export function AppRouterShell() {
  return (
    <BrowserRouter>
      <SiteShell>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/palette" element={<PaletteRoute />} />
          <Route path="/create" element={<CreateRoute />} />
          <Route path="/routes/asteride" element={<AsterideRoute />} />
          <Route path="*" element={<NotFoundRoute />} />
        </Routes>
      </SiteShell>
    </BrowserRouter>
  );
}
