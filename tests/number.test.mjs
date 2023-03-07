import { repeat, getMinMaxNumberFromRange } from "./util/helpers";
import { numberInt, numberFloat, numberBinary } from "../src/generators/number";

// Note for a future self: Having number tests using strings may seem a bit
// weird, but it's because the numbers are always returned as strings, as
// they're really kinda just text when it comes to an IDE's text editor.
// Cool? Cool.

describe("number", () => {
  describe("numberInt", () => {
    it("only generates whole integers", () => {
      repeat(5, () => expect(Number(numberInt()) % 1).toBe(0));
    });

    it("returns a fixed value if provided only one option", () => {
      const config = { range: "5" };
      repeat(5, () => expect(numberInt(config)).toBe("5"));
    });

    describe("within a given range", () => {
      it("mixed range", () => {
        const config = { range: "-10,10" };
        const minMax = getMinMaxNumberFromRange(config.range);
        repeat(5, () => {
          const int = numberInt(config);
          return expect(int >= minMax.min && int <= minMax.max).toBeTruthy();
        });
      });

      it("positive only", () => {
        const config = { range: "0,10" };
        const minMax = getMinMaxNumberFromRange(config.range);
        repeat(5, () => {
          const int = numberInt(config);
          return expect(int >= minMax.min && int <= minMax.max).toBeTruthy();
        });
      });

      it("positive only - legacy hyphen syntax", () => {
        const config = { range: "0-10" };
        const minMax = getMinMaxNumberFromRange(config.range, "-");
        repeat(5, () => {
          const int = numberInt(config);
          return expect(int >= minMax.min && int <= minMax.max).toBeTruthy();
        });
      });

      it("negative only", () => {
        const config = { range: "-1,-10" };
        const minMax = getMinMaxNumberFromRange(config.range);
        repeat(5, () => {
          const int = numberInt(config);
          return expect(int >= minMax.min && int <= minMax.max).toBeTruthy();
        });
      });

      it("deduces the minimum and maximum bounds from a range of options", () => {
        const config = { range: "-9,22,47,13,-29,40,-31,87,33,9" };
        const minMax = getMinMaxNumberFromRange(config.range);
        repeat(10, () => {
          const int = numberInt(config);
          return expect(int >= minMax.min && int <= minMax.max).toBeTruthy();
        });
      });
    });
  });

  describe("numberFloat", () => {
    it("generates decimal numbers", () => {
      const regex = new RegExp(/^[0-9]\.[0-9]{5}$/);
      const config = { range: "0,9" };
      repeat(5, () => expect(numberFloat(config)).toMatch(regex));
    });

    it("returns a fixed value if provided only one option", () => {
      const config = { range: "9.472" };
      repeat(5, () => expect(numberFloat(config)).toBe("9.47200"));
    });

    it("generates numbers with a configurable number of decimal places", () => {
      repeat(5, () =>
        expect(numberFloat({ range: "0,9", decimalPlaces: 4 })).toMatch(
          new RegExp(/^[0-9]\.[0-9]{4}$/)
        )
      );
      repeat(5, () =>
        expect(numberFloat({ range: "0,9", decimalPlaces: 15 })).toMatch(
          new RegExp(/^[0-9]\.[0-9]{15}$/)
        )
      );
      repeat(5, () =>
        expect(numberFloat({ range: "0,9", decimalPlaces: 0 })).toMatch(
          new RegExp(/^[0-9]$/)
        )
      );
    });

    describe("within a given range", () => {
      it("mixed range", () => {
        const config = { range: "-10,10" };
        const minMax = getMinMaxNumberFromRange(config.range);
        repeat(5, () => {
          const flt = numberFloat(config);
          return expect(flt >= minMax.min && flt <= minMax.max).toBeTruthy();
        });
      });

      it("positive only", () => {
        const config = { range: "0,10" };
        const minMax = getMinMaxNumberFromRange(config.range);
        repeat(5, () => {
          const flt = numberFloat(config);
          return expect(flt >= minMax.min && flt <= minMax.max).toBeTruthy();
        });
      });

      it("positive only - legacy hyphen syntax", () => {
        const config = { range: "0-10" };
        const minMax = getMinMaxNumberFromRange(config.range, "-");
        repeat(5, () => {
          const flt = numberFloat(config);
          return expect(flt >= minMax.min && flt <= minMax.max).toBeTruthy();
        });
      });

      it("negative only", () => {
        const config = { range: "-1,-10" };
        const minMax = getMinMaxNumberFromRange(config.range);
        repeat(5, () => {
          const flt = numberFloat(config);
          return expect(flt >= minMax.min && flt <= minMax.max).toBeTruthy();
        });
      });

      it("deduces the minimum and maximum bounds from a range of options", () => {
        const config = { range: "-9,22,47,13,-29,40,-31,87,33,9" };
        const minMax = getMinMaxNumberFromRange(config.range);
        repeat(10, () => {
          const flt = numberFloat(config);
          return expect(flt >= minMax.min && flt <= minMax.max).toBeTruthy();
        });
      });
    });
  });

  describe("numberBinary", () => {
    it("only generates binary numbers", () => {
      repeat(5, () => expect(numberBinary()).toMatch(/^[01]+$/));
    });

    it("pads the result to the length of the largest option provided", () => {
      // Without padding:
      // - 1 would return 1
      // - 47 would return 101111
      // - 128 would return 10000000
      // With padding:
      // - 1 should return 00000001
      // - 47 should return 00101111
      // - 128 should return 10000000
      const config = { range: "1,128" };
      repeat(10, () =>
        expect(numberBinary(config)).toMatch(new RegExp(/^[01]{8}$/))
      );
    });

    describe("within a given range", () => {
      it("positive only", () => {
        const config = { range: "0,10" };
        // 10 = 1010
        repeat(5, () =>
          expect(numberBinary(config)).toMatch(new RegExp(/^[01]{4}$/))
        );
      });

      it("positive only - legacy hyphen syntax", () => {
        const config = { range: "0-10" };
        // 10 = 1010
        repeat(5, () =>
          expect(numberBinary(config)).toMatch(new RegExp(/^[01]{4}$/))
        );
      });

      it("deduces the minimum and maximum bounds from a range of options", () => {
        const config = { range: "9,47,22,19,13,7" };
        // 47 = 101111
        repeat(5, () =>
          expect(numberBinary(config)).toMatch(new RegExp(/^[01]{6}$/))
        );
      });
    });
  });
});
