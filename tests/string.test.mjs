import { repeat } from "./util/helpers";
import {
  stringLoremSentence,
  stringLoremParagraph,
  stringAlphanumeric,
  stringAlphabetical,
  stringPassword,
  stringSingleLetter,
} from "../src/generators/string";

describe("string", () => {
  describe("stringAlphanumeric", () => {
    it("generates alphanumeric strings", () => {
      const regex = new RegExp(/^[A-Za-z0-9]{32}$/);
      repeat(5, () => expect(stringAlphanumeric()).toMatch(regex));
    });

    it("generates alphanumeric strings - configurable length", () => {
      const regex = new RegExp(/^[A-Za-z0-9]{10}$/);
      const config = { length: 10 };
      repeat(5, () => expect(stringAlphanumeric(config)).toMatch(regex));
    });
  });

  describe("stringAlphabetical", () => {
    it("generates alphabetic strings", () => {
      const regex = new RegExp(/^[A-Za-z]{32}$/);
      repeat(5, () => expect(stringAlphabetical()).toMatch(regex));
    });

    it("generates alphabetic strings - configurable length", () => {
      const regex = new RegExp(/^[A-Za-z]{10}$/);
      const config = { length: 10 };
      repeat(5, () => expect(stringAlphabetical(config)).toMatch(regex));
    });
  });

  describe("stringPassword", () => {
    it("generates password-like strings", () => {
      const regex = new RegExp(
        /^[A-Za-z0-9!@£#$%^&*()_\-+=\[\]{}\|;:'",.<>/?]{32}$/
      );
      repeat(5, () => expect(stringPassword()).toMatch(regex));
    });

    it("generates password-like strings - configurable length", () => {
      const regex = new RegExp(
        /^[A-Za-z0-9!@£#$%^&*()_\-+=\[\]{}\|;:'",.<>/?]{10}$/
      );
      const config = { length: 10 };
      repeat(5, () => expect(stringPassword(config)).toMatch(regex));
    });
  });

  describe("stringSingleLetter", () => {
    it("generates a letter", () => {
      const regex = new RegExp(/^[A-Z]{1}$/);
      repeat(5, () => expect(stringSingleLetter()).toMatch(regex));
    });
  });
});
