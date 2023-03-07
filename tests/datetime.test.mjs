import { repeat } from "./util/helpers";
import {
  dateISO8601,
  timeISO8601,
  datetimeISO8601,
} from "../src/generators/datetime";

const dateRegex = "[0-9]{4}-[0-9]{2}-[0-9]{2}";
const timeRegex = "[0-9]{2}:[0-9]{2}:[0-9]{2}";
const zoneRegex = "[+-][0-9]{2}:[0-9]{2}";

describe("datetime", () => {
  describe("dateISO8601", () => {
    it("generates valid dates", () => {
      repeat(5, () => {
        const date = Date.parse(dateISO8601());
        return expect(date).not.toBeNaN();
      });
    });

    it("generates dates that are ISO-8601 formatted", () => {
      const regex = new RegExp(`^${dateRegex}$`);
      repeat(5, () => expect(dateISO8601()).toMatch(regex));
    });

    it("generates dates within a given range - minYear, maxYear", () => {
      const config = { minYear: 2000, maxYear: 2000 };
      repeat(5, () => {
        const year = dateISO8601(config).substring(0, 4);
        return expect(year).toBe("2000");
      });
    });
  });

  describe("timeISO8601", () => {
    it("generates valid times", () => {
      repeat(5, () => {
        const timePieces = timeISO8601().split(":");
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

    it("generates times that are ISO-8601 formatted", () => {
      const regex = new RegExp(`^${timeRegex}$`);
      repeat(5, () => expect(timeISO8601()).toMatch(regex));
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
      const regex = new RegExp(`^${dateRegex}T${timeRegex}$`);
      const config = { timezoneType: "none" };
      repeat(5, () => expect(datetimeISO8601(config)).toMatch(regex));
    });

    it("generates datetimes with timezones - UTC timezone", () => {
      const regex = new RegExp(`^${dateRegex}T${timeRegex}Z$`);
      const config = { timezoneType: "utc" };
      repeat(5, () => expect(datetimeISO8601(config)).toMatch(regex));
    });

    it("generates datetimes with timezones - random offset", () => {
      const regex = new RegExp(`^${dateRegex}T${timeRegex}${zoneRegex}$`);
      const config = { timezoneType: "full" };
      repeat(5, () => expect(datetimeISO8601(config)).toMatch(regex));
    });
  });
});
