import { generateNumber, pickFromArray } from "./util/utilities";

function randomDateTime({ minYear = 1900, maxYear = 2100 } = {}) {
  const currentDate = new Date();
  const min = currentDate.setFullYear(minYear);
  const max = currentDate.setFullYear(maxYear);
  return new Date(+min + Math.random() * (max - min)).toISOString();
}

function timezone(configOption) {
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
    return pickFromArray(existingTimezones);
  }
}

export function dateISO8601({ minYear, maxYear } = {}) {
  return randomDateTime({ minYear, maxYear }).slice(0, 10);
}

export function timeISO8601({ minYear, maxYear } = {}) {
  return randomDateTime({ minYear, maxYear }).slice(11, 19);
}

export function datetimeISO8601({ minYear, maxYear, timezoneType } = {}) {
  return `${dateISO8601({ minYear, maxYear })}T${timeISO8601({
    minYear,
    maxYear,
  })}${timezone(timezoneType)}`;
}
