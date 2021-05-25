import { LoremIpsum } from "lorem-ipsum";
import { generateString } from "./util/utilities";

const lorem = new LoremIpsum();

export function stringLoremSentence() {
  return lorem.generateSentences(1);
}

export function stringLoremParagraph() {
  return lorem.generateParagraphs(1);
}

export function stringAlphanumeric() {
  return generateString(
    nova.config.get("random.stringLength", "number") || 32,
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  );
}

export function stringAlphabetical() {
  return generateString(
    nova.config.get("random.stringLength", "number") || 32,
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  );
}

export function stringPassword() {
  return generateString(
    nova.config.get("random.stringLength", "number") || 32,
    `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@£#$%^&*()_-+=[]{}\|;:'",.<>/?`
  );
}

export function stringSingleLetter() {
  return generateString(1, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
}
