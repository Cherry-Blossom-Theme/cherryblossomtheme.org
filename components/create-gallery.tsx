"use client";

export function CreateGallery() {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5 shadow-[0_18px_34px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-6 lg:p-7">
      <div className="max-w-2xl">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-pink-300">Create</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Build your own calm theme system.</h1>
        <p className="mt-3 text-sm leading-7 text-slate-300">Start from the palette, refine the contrast, and publish a focused theme package for editors, shells, and interface surfaces.</p>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-pink-300">Step 1</p>
          <p className="mt-2 text-sm font-semibold text-white">Choose your core palette.</p>
        </div>
        <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-pink-300">Step 2</p>
          <p className="mt-2 text-sm font-semibold text-white">Map colors to UI layers.</p>
        </div>
        <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-pink-300">Step 3</p>
          <p className="mt-2 text-sm font-semibold text-white">Publish the theme package.</p>
        </div>
      </div>
    </section>
  );
}
