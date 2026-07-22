import { repeat } from "./util/helpers";
import { date, time, datetimeISO8601 } from "../src/generators/datetime";

const isoDateRegex = "[0-9]{4}-[0-9]{2}-[0-9]{2}";
const ddmmDateRegex = "[0-9]{2}/[0-9]{2}/[0-9]{4}";

const secondsRegex = ":[0-9]{2}";

const h24TimeRegex = "[0-9]{2}:[0-9]{2}";
const h24TimeWithSecondsRegex = `${h24TimeRegex}${secondsRegex}`;
const h24TimeWithoutSecondsRegex = h24TimeRegex;

const h12TimeSuffixRegex = " [a|p]\.m\.";
const h12TimeRegex = `[0-9]{1,2}:[0-9]{2}`;
const h12TimeWithSecondsRegex = `${h12TimeRegex}${secondsRegex}${h12TimeSuffixRegex}`;
const h12TimeWithoutSecondsRegex = `${h12TimeRegex}${h12TimeSuffixRegex}`;

const zoneRegex = "[+-][0-9]{2}:[0-9]{2}";

describe("datetime", () => {
  describe("date", () => {
    it("generates valid dates", () => {
      repeat(5, () => {
        const result = Date.parse(date());
        return expect(result).not.toBeNaN();
      });
    });

    it("generates dates that are ISO-8601 formatted", () => {
      const regex = new RegExp(`^${isoDateRegex}$`);
      const config = { format: "iso " };
      repeat(5, () => expect(date(config)).toMatch(regex));
    });

    it("generates dates that are DD/MM/YYYY formatted", () => {
      const regex = new RegExp(`^${ddmmDateRegex}$`);
      const config = { format: "ddmmyyyy" };
      repeat(5, () => expect(date(config)).toMatch(regex));
    });

    it("generates dates that are MM/DD/YYYY formatted", () => {
      const regex = new RegExp(`^${ddmmDateRegex}$`);
      const config = { format: "mmddyyyy" };
      repeat(5, () => expect(date(config)).toMatch(regex));
    });

    it("generates dates within a given range - minYear, maxYear", () => {
      const config = { minYear: 2000, maxYear: 2000 };
      repeat(5, () => {
        const year = date(config).substring(0, 4);
        return expect(year).toBe("2000");
      });
    });
  });

  describe("time", () => {
    it("generates valid times", () => {
      const config = { format: "24hour", includeSeconds: true };

      repeat(5, () => {
        const timePieces = time(config).split(":");
        const hours = timePieces[0] >= 0 && timePieces[0] < 24;
        const minutes = timePieces[1] >= 0 && timePieces[1] < 60;
        const seconds = timePieces[2] >= 0 && timePieces[2] < 60;
        return [
          expect(hours).toBeTruthy(),
          expect(minutes).toBeTruthy(),
          expect(seconds).toBeTruthy(),
        ];
      });
    });

    it("generates times that are 24 hour formatted (with seconds)", () => {
      const regex = new RegExp(`^${h24TimeWithSecondsRegex}$`);
      const config = { format: "24hour", includeSeconds: true };
      repeat(5, () => expect(time(config)).toMatch(regex));
    });

    it("generates times that are 24 hour formatted (without seconds)", () => {
      const regex = new RegExp(`^${h24TimeWithoutSecondsRegex}$`);
      const config = { format: "24hour", includeSeconds: false };
      repeat(5, () => expect(time(config)).toMatch(regex));
    });

    it("generates times that are 12 hour formatted (with seconds)", () => {
      const regex = new RegExp(`^${h12TimeWithSecondsRegex}$`);
      const config = { format: "12hour", includeSeconds: true };
      repeat(5, () => expect(time(config)).toMatch(regex));
    });

    it("generates times that are 12 hour formatted (without seconds)", () => {
      const regex = new RegExp(`^${h12TimeWithoutSecondsRegex}$`);
      const config = { format: "12hour", includeSeconds: false };
      repeat(5, () => expect(time(config)).toMatch(regex));
    });
  });

  describe("datetimeISO8601", () => {
    it("generates valid datetimes", () => {
      repeat(5, () => {
        const date = Date.parse(datetimeISO8601());
        return expect(date).not.toBeNaN();
      });
    });

    it("generates datetimes that are ISO-8601 formatted", () => {
      const regex = new RegExp(`^${isoDateRegex}T${h24TimeWithSecondsRegex}$`);
      const config = { timezoneType: "none" };
      repeat(5, () => expect(datetimeISO8601(config)).toMatch(regex));
    });

    it("generates datetimes with timezones - UTC timezone", () => {
      const regex = new RegExp(`^${isoDateRegex}T${h24TimeWithSecondsRegex}Z$`);
      const config = { timezoneType: "utc" };
      repeat(5, () => expect(datetimeISO8601(config)).toMatch(regex));
    });

    it("generates datetimes with timezones - random offset", () => {
      const regex = new RegExp(
        `^${isoDateRegex}T${h24TimeWithSecondsRegex}${zoneRegex}$`,
      );
      const config = { timezoneType: "full" };
      repeat(5, () => expect(datetimeISO8601(config)).toMatch(regex));
    });
  });
});
