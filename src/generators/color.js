import { generateNumber } from "./util/utilities";

export function colorHex() {
  const color =
    "#" + (Math.random() * 0xffffff * 1000000).toString(16).slice(0, 6);
  return nova.config.get("random.hexColorCapitalize", "boolean")
    ? color.toUpperCase()
    : color;
}

export function colorRGB() {
  const r = generateNumber(0, 255),
    g = generateNumber(0, 255),
    b = generateNumber(0, 255);
  if (nova.config.get("random.colorsCSSFormatted", "boolean")) {
    return `rgb(${r}, ${g}, ${b})`;
  } else {
    return `${r}, ${g}, ${b}`;
  }
}

export function colorHSL() {
  const h = generateNumber(0, 359),
    s = generateNumber(0, 100),
    l = generateNumber(0, 100);
  if (nova.config.get("random.colorsCSSFormatted", "boolean")) {
    return `hsl(${h}, ${s}%, ${l}%)`;
  } else {
    return `${h}, ${s}, ${l}`;
  }
}
