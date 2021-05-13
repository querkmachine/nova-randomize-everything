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
  let { min, max } = parseRange(range);
  min = Math.ceil(min);
  max = Math.floor(max);
  return String(Math.floor(Math.random() * (max - min + 1) + min));
}

export function numberFloat(range) {
  const { min, max } = parseRange(range);
  return (Math.random() * (min - max) + max).toFixed(
    nova.config.get("random.floatDecimalPlaces", "number")
  );
}
