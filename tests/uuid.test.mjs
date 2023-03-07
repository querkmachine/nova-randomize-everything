import { repeat } from "./util/helpers";
import { uuidV4 } from "../src/generators/uuid";

describe("uuid", () => {
  describe("uuidV4", () => {
    it("generates valid UUIDs v4", () => {
      const regex = new RegExp(
        /^[a-z0-9]{8}-[a-z0-9]{4}-4[a-z0-9]{3}-[89ab][a-z0-9]{3}-[a-z0-9]{12}$/
      );
      repeat(5, () => expect(uuidV4()).toMatch(regex));
    });
  });
});
