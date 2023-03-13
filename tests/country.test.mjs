import { repeat } from "./util/helpers";
import { countries } from "../src/data/countries";
import {
  countryName,
  countryISO3166alpha2,
  countryISO3166alpha3,
  countryISO3166numeric,
} from "../src/generators/country";

describe("country", () => {
  describe("countryName", () => {
    it("selects a valid country name", () => {
      const countryNames = countries.map((i) => i.name);
      repeat(5, () => expect(countryNames).toContain(countryName()));
    });

    it("selects a valid country name - short names", () => {
      const countryNamesShort = countries.map((i) => i.nameShort);
      const config = { useShortCountryNames: true };
      // This is a bit of a weird one, as we're testing something that's only
      // applicable against a small subset of our randomly selected data.
      //
      // Basically, we keep rolling the dice until we get one that we know has
      // a nameShort version (aka, it's in the `countryNamesShort` array), then
      // make sure that it returned the short name. Does that make sense?
      // I'm not sure myself.
      repeat(5, () => {
        const roll = () => countryName(config);
        let c = roll();
        while (!countryNamesShort.includes(c)) {
          c = roll();
        }
        return expect(countryNamesShort).toContain(c);
      });
    });
  });

  describe("countryISO3166alpha2", () => {
    it("selects a valid ISO-3166 alpha-2 code", () => {
      const countryAlpha2Codes = countries.map((i) => i.alpha2);
      repeat(5, () =>
        expect(countryAlpha2Codes).toContain(countryISO3166alpha2())
      );
    });
  });

  describe("countryISO3166alpha3", () => {
    it("selects a valid ISO-3166 alpha-3 code", () => {
      const countryAlpha3Codes = countries.map((i) => i.alpha3);
      repeat(5, () =>
        expect(countryAlpha3Codes).toContain(countryISO3166alpha3())
      );
    });
  });

  describe("countryISO3166numeric", () => {
    it("selects a valid ISO-3166 numeric code", () => {
      const countryNumericCodes = countries.map((i) => i.numeric);
      repeat(5, () =>
        expect(countryNumericCodes).toContain(countryISO3166numeric())
      );
    });
  });
});
