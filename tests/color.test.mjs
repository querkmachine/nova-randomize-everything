import { repeat } from "./util/helpers";
import { colorHex, colorRGB, colorHSL } from "../src/generators/color";

describe("color", () => {
  describe("colorHex", () => {
    it("generates valid hex codes", () => {
      const regex = new RegExp(/^#[0-9a-f]{6}$/);
      repeat(5, () => expect(colorHex()).toMatch(regex));
    });

    it("generates valid hex codes - capitalized", () => {
      const regex = new RegExp(/^#[0-9A-F]{6}$/);
      const config = { capitalized: true };
      repeat(5, () => expect(colorHex(config)).toMatch(regex));
    });
  });

  describe("colorRGB", () => {
    it("generates valid RGB values", () => {
      const regex = new RegExp(
        /^([01]?[0-9]{1,2}|2[0-4][0-9]|25[0-5]), ([01]?[0-9]{1,2}|2[0-4][0-9]|25[0-5]), ([01]?[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/
      );
      repeat(5, () => expect(colorRGB()).toMatch(regex));
    });

    it("generates valid RGB values - CSS formatted", () => {
      const regex = new RegExp(
        /^rgb\(([01]?[0-9]{1,2}|2[0-4][0-9]|25[0-5]), ([01]?[0-9]{1,2}|2[0-4][0-9]|25[0-5]), ([01]?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\)$/
      );
      const config = { cssFormatted: true };
      repeat(5, () => expect(colorRGB(config)).toMatch(regex));
    });
  });

  describe("colorHSL", () => {
    it("generates valid HSL values", () => {
      const regex = new RegExp(
        /^(?:[0-9]|[1-9][0-9]|[1-2][0-9]{2}|3[0-5][0-9]), (?:100|[1-9][0-9]?|0), (?:100|[1-9][0-9]?|0)$/
      );
      repeat(5, () => expect(colorHSL()).toMatch(regex));
    });

    it("generates valid HSL values - CSS formatted", () => {
      const regex = new RegExp(
        /^hsl\((?:[0-9]|[1-9][0-9]|[1-2][0-9]{2}|3[0-5][0-9]), (?:100|[1-9][0-9]?|0)%, (?:100|[1-9][0-9]?|0)%\)$/
      );
      const config = { cssFormatted: true };
      repeat(5, () => expect(colorHSL(config)).toMatch(regex));
    });
  });
});
