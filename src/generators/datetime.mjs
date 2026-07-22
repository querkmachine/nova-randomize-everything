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

export function time({ minYear, maxYear, format, includeSeconds } = {}) {
  const randomTime = randomDateTime({ minYear, maxYear }).slice(
    11,
    includeSeconds ? 19 : 16,
  );

  switch (format) {
    case "12hour":
      const rawHour = Number(randomTime.slice(0, 2));
      let formatHour = rawHour;

      if (rawHour === 0) {
        formatHour = 12;
      } else if (rawHour > 12) {
        formatHour = Math.floor(rawHour / 2);
      }

      return `${formatHour}${randomTime.slice(2)} ${rawHour >= 12 ? "p.m." : "a.m."}`;
      break;
    case "24hour":
    default:
      return randomTime;
      break;
  }
}

export function date({ minYear, maxYear, format } = {}) {
  const randomDate = randomDateTime({ minYear, maxYear }).slice(0, 10);
  const dateParts = randomDate.split("-");

  switch (format) {
    case "ddmmyyyy":
      return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
      break;
    case "mmddyyyy":
      return `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;
      break;
    case "iso":
    default:
      return randomDate;
      break;
  }
}

export function datetimeISO8601({ minYear, maxYear, timezoneType } = {}) {
  return `${date({ minYear, maxYear, format: "iso" })}T${time({
    minYear,
    maxYear,
    format: "24hour",
    includeSeconds: true,
  })}${timezone(timezoneType)}`;
}
