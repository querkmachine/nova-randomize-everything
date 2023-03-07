export function repeat(times, func) {
  for (let i = 0; i < times; i++) {
    func();
  }
}

export function getMinMaxNumberFromRange(range, delimiter = ",") {
  const nums = range.split(delimiter).map(x => Number(x.trim()));
  return {
    min: Math.min(...nums),
    max: Math.max(...nums)
  }
}