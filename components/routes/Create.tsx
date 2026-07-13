"use client";

import React from "react";
import { CreateGallery } from "../create-gallery";

export default function CreateRoute() {
  return (
    <div className="relative">
      <div className="absolute right-6 -top-3 z-20 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-pink-300 border border-white/8">
        Coming soon
      </div>
      <CreateGallery />
    </div>
  );
}
