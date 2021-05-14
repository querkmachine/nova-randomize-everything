import { generateNumber } from "./util/utilities";

function parseRange(range) {
  range =
    range && typeof range !== "undefined"
      ? range
      : nova.config.get("random.defaultNumberRange", "string") || "0-100";
  range = range.split("-");
  let min = Number(range[0] < 0 ? 0 : range[0]);
  let max = Number(range[1] < min ? min : range[1]);
  return {
    min,
    max,
  };
}

export function numberInt(range) {
  const { min, max } = parseRange(range);
  return String(generateNumber(min, max));
}

export function numberFloat(range) {
  const { min, max } = parseRange(range);
  return (Math.random() * (min - max) + max).toFixed(
    nova.config.get("random.floatDecimalPlaces", "number")
  );
}

export function numberBinary(range) {
  const { min, max } = parseRange(range);
  const stringLength = max.toString(2).length;
  return generateNumber(min, max).toString(2).padStart(stringLength, "0");
}
