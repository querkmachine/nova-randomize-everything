import { repeat } from "./util/helpers";
import { hashMD5, hashSHA1, hashSHA256 } from "../src/generators/hash";

describe("hash", () => {
  describe("hashMD5", () => {
    it("generates valid MD5 hashes", () => {
      const regex = new RegExp(/^[a-f0-9]{32}$/);
      repeat(5, () => expect(hashMD5()).toMatch(regex));
    });
  });

  describe("hashSHA1", () => {
    it("generates valid SHA-1 hashes", () => {
      const regex = new RegExp(/^[a-f0-9]{40}$/);
      repeat(5, () => expect(hashSHA1()).toMatch(regex));
    });
  });

  describe("hashSHA256", () => {
    it("generates valid SHA-256 hashes", () => {
      const regex = new RegExp(/^[a-f0-9]{64}$/);
      repeat(5, () => expect(hashSHA256()).toMatch(regex));
    });
  });
});
