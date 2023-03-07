import { repeat } from "./util/helpers";
import { firstNames } from "../src/data/first-names";
import { lastNames } from "../src/data/last-names";
import { nameFirst, nameLast } from "../src/generators/name";

describe("name", () => {
  describe("nameFirst", () => {
    it("selects a valid first name", () => {
      repeat(5, () => expect(firstNames).toContain(nameFirst()));
    });
  });

  describe("nameLast", () => {
    it("selects a valid last name", () => {
      repeat(5, () => expect(lastNames).toContain(nameLast()));
    });
  });
});
