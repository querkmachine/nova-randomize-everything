export function datetimeISO8601() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const min = currentDate.setFullYear(currentYear - 25);
  const max = currentDate.setFullYear(currentYear + 25);
  return new Date(+min + Math.random() * (max - min)).toISOString();
}

export function dateISO8601() {
  return datetimeISO8601().slice(0, 10);
}
