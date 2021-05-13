import { generateNumber } from "./util/utilities";

export function colorHex() {
  const color =
    "#" + (Math.random() * 0xffffff * 1000000).toString(16).slice(0, 6);
  return nova.config.get("random.hexColorCapitalize", "boolean")
    ? color.toUpperCase()
    : color;
}

export function colorRGB() {
  return `rgb(${generateNumber(0, 255)}, ${generateNumber(
    0,
    255
  )}, ${generateNumber(0, 255)})`;
}

export function colorHSL() {
  return `hsl(${generateNumber(0, 359)}, ${generateNumber(
    0,
    100
  )}%, ${generateNumber(0, 100)}%)`;
}
