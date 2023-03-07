import { repeat } from "./util/helpers";
import {
  computerAddressIPV4,
  computerAddressIPV6,
  computerAddressMAC48,
  computerAddressMAC64,
} from "../src/generators/computer-address";

describe("computer address", () => {
  describe("computerAddressIPV4", () => {
    it("generates valid IPv4 addresses", () => {
      const regex = new RegExp(
        /^((?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:\.(?!$)|$)){4}$/
      );
      repeat(5, () => expect(computerAddressIPV4()).toMatch(regex));
    });
  });

  describe("computerAddressIPV6", () => {
    it("generates valid IPv6 addresses", () => {
      const regex = new RegExp(/^([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}$/);
      repeat(5, () => expect(computerAddressIPV6()).toMatch(regex));
    });
  });

  describe("computerAddressMAC48", () => {
    it("generates valid MAC-48 addresses", () => {
      const regex = new RegExp(/^([0-9A-F]{2}:){5}([0-9A-F]{2})$/);
      repeat(5, () => expect(computerAddressMAC48()).toMatch(regex));
    });
  });

  describe("computerAddressMAC64", () => {
    it("generates valid MAC-64 addresses", () => {
      const regex = new RegExp(/^([0-9A-F]{2}:){7}([0-9A-F]{2})$/);
      repeat(5, () => expect(computerAddressMAC64()).toMatch(regex));
    });
  });
});
