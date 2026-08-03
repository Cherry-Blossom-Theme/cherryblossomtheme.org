import { hexToRgb, rgbToCssVar, rgbToHex, rgbToHsl } from "./color";

export type PaletteMode = "dark" | "light";

export interface PaletteColor {
  name: string;
  rgb: [number, number, number];
  hex: string;
  hsl: string;
  cssVar: string;
}

export interface PaletteData {
  mode: PaletteMode;
  colors: PaletteColor[];
}

export const paletteDefinitions = {
  dark: {
    "bg-darkest": [35, 20, 28],
    "bg-dark": [45, 28, 38],
    "bg-mid": [55, 35, 45],
    "bg-light": [70, 45, 58],
    "bg-lighter": [85, 55, 70],
    border: [85, 55, 70],
    "text-primary": [255, 235, 245],
    "text-secondary": [200, 160, 180],
    "text-muted": [150, 110, 130],
    "accent-primary": [255, 130, 180],
    "accent-hot": [255, 90, 150],
    "accent-light": [255, 200, 220],
  },
  light: {
    "bg-darkest": [245, 220, 230],
    "bg-dark": [255, 248, 252],
    "bg-mid": [255, 240, 248],
    "bg-light": [245, 230, 240],
    "bg-lighter": [235, 220, 230],
    border: [235, 220, 230],
    "text-primary": [80, 40, 60],
    "text-secondary": [130, 80, 105],
    "text-muted": [170, 120, 145],
    "accent-primary": [220, 80, 140],
    "accent-hot": [255, 90, 150],
    "accent-light": [255, 180, 210],
  },
} as const;

export function buildPalette(mode: PaletteMode): PaletteData {
  const source = paletteDefinitions[mode];
  const colors = Object.entries(source).map(([name, rgb]) => {
    const tuple = rgb as [number, number, number];
    return {
      name,
      rgb: tuple,
      hex: rgbToHex(tuple),
      hsl: rgbToHsl(tuple),
      cssVar: rgbToCssVar(name, tuple),
    };
  });

  return { mode, colors };
}

export function buildTailwindConfig(mode: PaletteMode) {
  const palette = buildPalette(mode);
  return {
    theme: {
      extend: {
        colors: Object.fromEntries(
          palette.colors.map((color) => [color.name, color.hex]),
        ),
      },
    },
  };
}

export function buildScssVariables(mode: PaletteMode): string {
  const palette = buildPalette(mode);
  return palette.colors.map((color) => `$${color.name}: ${color.hex};`).join("\n");
}

export function buildCssVariables(mode: PaletteMode): string {
  const palette = buildPalette(mode);
  return palette.colors.map((color) => `${color.cssVar}`).join("\n");
}

export function buildJsonPalette(mode: PaletteMode) {
  const palette = buildPalette(mode);
  return Object.fromEntries(
    palette.colors.map((color) => [color.name, { rgb: color.rgb, hex: color.hex, hsl: color.hsl }]),
  );
}

export function buildYamlPalette(mode: PaletteMode): string {
  const palette = buildPalette(mode);
  return `mode: ${mode}\ncolors:\n${palette.colors
    .map((color) => `  ${color.name}:\n    hex: ${color.hex}\n    rgb: [${color.rgb.join(", ")}]\n    hsl: ${color.hsl}`)
    .join("\n")}`;
}

export function buildTomlPalette(mode: PaletteMode): string {
  const palette = buildPalette(mode);
  return `[palette]\nmode = "${mode}"\n\n[palette.colors]\n${palette.colors
    .map((color) => `${color.name} = { hex = "${color.hex}", rgb = [${color.rgb.join(", ")}], hsl = "${color.hsl}" }`)
    .join("\n")}`;
}

export function buildPaletteExport(mode: PaletteMode) {
  return {
    mode,
    palette: buildJsonPalette(mode),
    cssVariables: buildCssVariables(mode),
    scssVariables: buildScssVariables(mode),
    tailwindConfig: buildTailwindConfig(mode),
  };
}

export const defaultPalette = buildPalette("dark");
export function getColorByName(mode: PaletteMode, name: string) {
  return buildPalette(mode).colors.find((color) => color.name === name);
}

export function getContrastText(mode: PaletteMode): string {
  return mode === "dark" ? "#fbeaf3" : "#4b2537";
}

export function getAccent(mode: PaletteMode): string {
  const accent = getColorByName(mode, "accent-primary");
  return accent?.hex ?? "#dc508c";
}

export function getSurface(mode: PaletteMode): string {
  const surface = getColorByName(mode, "bg-dark");
  return surface?.hex ?? "#2d1c26";
}

export function getBorder(mode: PaletteMode): string {
  const border = getColorByName(mode, "border");
  return border?.hex ?? "#875546";
}

export function buildThemeCss(mode: PaletteMode): string {
  const palette = buildPalette(mode);
  return palette.colors.map((color) => `${color.cssVar}`).join("\n");
}

export function rgbFromHex(hex: string) {
  return hexToRgb(hex);
}
