"use client";

export function CreateGallery() {
  return (
    <section className="rounded-[28px] border border-border/70 bg-card/80 p-5 shadow-[0_24px_80px_rgba(195,55,105,0.14)] backdrop-blur-xl sm:p-6 lg:p-7">
      <div className="max-w-2xl">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-primary">Create</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Build your own calm theme system.</h1>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">Start from the palette, refine the contrast, and publish a focused theme package for editors, shells, and interface surfaces.</p>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-[1.2rem] border border-border/70 bg-background/70 p-4">
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-primary">Step 1</p>
          <p className="mt-2 text-sm font-semibold text-foreground">Choose your core palette.</p>
        </div>
        <div className="rounded-[1.2rem] border border-border/70 bg-background/70 p-4">
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-primary">Step 2</p>
          <p className="mt-2 text-sm font-semibold text-foreground">Map colors to UI layers.</p>
        </div>
        <div className="rounded-[1.2rem] border border-border/70 bg-background/70 p-4">
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-primary">Step 3</p>
          <p className="mt-2 text-sm font-semibold text-foreground">Publish the theme package.</p>
        </div>
      </div>
    </section>
  );
}
