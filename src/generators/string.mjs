import { LoremIpsum } from "lorem-ipsum";
import { generateString } from "./util/utilities";

const lorem = new LoremIpsum();

export function stringLoremSentence() {
  return lorem.generateSentences(1);
}

export function stringLoremParagraph() {
  return lorem.generateParagraphs(1);
}

export function stringAlphanumeric({ length = 32 } = {}) {
  return generateString(
    length,
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  );
}

export function stringAlphabetical({ length = 32 } = {}) {
  return generateString(
    length,
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  );
}

export function stringPassword({ length = 32 } = {}) {
  return generateString(
    length,
    `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@£#$%^&*()_-+=[]{}\|;:'",.<>/?`
  );
}

export function stringSingleLetter() {
  return generateString(1, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
}
