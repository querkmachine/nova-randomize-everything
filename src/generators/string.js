import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

export function stringLoremSentence() {
  return lorem.generateSentences(1);
}

export function stringLoremParagraph() {
  return lorem.generateParagraphs(1);
}
