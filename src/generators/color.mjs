import { generateNumber } from "./util/utilities";

export function colorHex({ capitalized = false } = {}) {
  const color =
    "#" + (Math.random() * 0xffffff * 1000000).toString(16).slice(0, 6);
  return capitalized
    ? color.toUpperCase()
    : color;
}

export function colorRGB({ cssFormatted = false } = {}) {
  const r = generateNumber(0, 255),
    g = generateNumber(0, 255),
    b = generateNumber(0, 255);
  return cssFormatted ? `rgb(${r}, ${g}, ${b})` : `${r}, ${g}, ${b}`;
}

export function colorHSL({ cssFormatted = false } = {}) {
  const h = generateNumber(0, 359),
    s = generateNumber(0, 100),
    l = generateNumber(0, 100);
  return cssFormatted ? `hsl(${h}, ${s}%, ${l}%)` : `${h}, ${s}, ${l}`;
}
