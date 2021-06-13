import { generateNumber } from "./util/utilities";

function parseRange(range) {
  range =
    range && typeof range !== "undefined"
      ? range
      : nova.config.get("random.defaultNumberRange", "string") || "0,100";
  if (range.includes(",")) {
    range = range.split(/,/g);
  } else {
    range = range.split(/[\-–—]/g);
  }
  const sanitizedRange = range.filter((input) => {
    if (!input) {
      return false;
    }
    input = Number(input);
    if (isNaN(input)) {
      return false;
    }
    return true;
  });
  const min = Math.min(...sanitizedRange);
  const max = Math.max(...sanitizedRange);
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
