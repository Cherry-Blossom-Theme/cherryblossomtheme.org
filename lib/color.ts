export type RGB = [number, number, number];

export function rgbToHex([r, g, b]: RGB): string {
  return `#${[r, g, b].map((value) => value.toString(16).padStart(2, "0")).join("")}`;
}

export function hexToRgb(hex: string): RGB {
  const normalized = hex.replace("#", "");
  const value = normalized.length === 3 ? normalized.split("").map((char) => char + char).join("") : normalized;
  const parsed = parseInt(value, 16);
  return [(parsed >> 16) & 255, (parsed >> 8) & 255, parsed & 255];
}

export function rgbToHsl([r, g, b]: RGB): string {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const delta = max - min;
  const l = (max + min) / 2;

  if (delta === 0) {
    return `hsl(0 0% ${Math.round(l * 100)}%)`;
  }

  const s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  let h = 0;

  if (max === rn) {
    h = ((gn - bn) / delta) % 6;
  } else if (max === gn) {
    h = (bn - rn) / delta + 2;
  } else {
    h = (rn - gn) / delta + 4;
  }

  const hue = Math.round(h * 60);
  const saturation = Math.round(s * 100);
  const lightness = Math.round(l * 100);

  return `hsl(${hue} ${saturation}% ${lightness}%)`;
}

export function rgbToCssVar(colorName: string, [r, g, b]: RGB): string {
  return `--${colorName}: ${rgbToHex([r, g, b])};`;
}
