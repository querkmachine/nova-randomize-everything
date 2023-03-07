import { generateNumber } from "./util/utilities";

function parseRange(rangeQuery) {
  if (rangeQuery.includes(",")) {
    rangeQuery = rangeQuery.split(/,/g);
  } else {
    rangeQuery = rangeQuery.split(/[\-–—]/g);
  }
  const sanitizedRange = rangeQuery.filter((input) => {
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

export function numberInt({ range } = {}) {
  const { min, max } = parseRange(range);
  return String(generateNumber(min, max));
}

export function numberFloat({ range, decimalPlaces = 5 } = {}) {
  const { min, max } = parseRange(range);
  return (Math.random() * (min - max) + max).toFixed(decimalPlaces);
}

export function numberBinary({ range } = {}) {
  const { min, max } = parseRange(range);
  if (min < 0) {
    min = 0;
  }
  if (max < min) {
    max = min;
  }
  const stringLength = max.toString(2).length;
  return generateNumber(min, max).toString(2).padStart(stringLength, "0");
}
