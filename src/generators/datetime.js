import { generateNumber } from "./util/utilities";

function randomDateTime() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const min = currentDate.setFullYear(
    nova.config.get("random.yearMin", "number") || currentYear - 25
  );
  const max = currentDate.setFullYear(
    nova.config.get("random.yearMax", "number") || currentYear + 25
  );
  return new Date(+min + Math.random() * (max - min)).toISOString();
}

function timezone() {
  const configOption = nova.config.get("random.generateTimezones", "string");
  if (configOption === "none") {
    return "";
  } else if (configOption === "utc") {
    return "Z";
  } else {
    const existingTimezones = [
      "-12:00",
      "-11:00",
      "-10:00",
      "-09:30",
      "-09:00",
      "-08:00",
      "-07:00",
      "-06:00",
      "-05:00",
      "-04:00",
      "-03:30",
      "-03:00",
      "-02:00",
      "-01:00",
      "+00:00",
      "+01:00",
      "+02:00",
      "+03:00",
      "+03:30",
      "+04:00",
      "+04:30",
      "+05:00",
      "+05:30",
      "+05:45",
      "+06:00",
      "+06:30",
      "+07:00",
      "+08:00",
      "+08:45",
      "+09:00",
      "+09:30",
      "+10:00",
      "+10:30",
      "+11:00",
      "+12:00",
      "+12:45",
      "+13:00",
      "+14:00",
    ];
    return existingTimezones[(existingTimezones.length * Math.random()) | 0];
  }
}

export function dateISO8601() {
  return randomDateTime().slice(0, 10);
}

export function timeISO8601() {
  return randomDateTime().slice(11, 19);
}

export function datetimeISO8601() {
  return `${dateISO8601()}T${timeISO8601()}${timezone()}`;
}
