import { LoremIpsum } from "lorem-ipsum";
import { nameFirst, nameLast } from "./name";
import {
  pickFromArray,
  generateNumber,
  replaceDiacritics,
} from "./util/utilities";

const lorem = new LoremIpsum();

const localPartJoiners = ["", ".", "_"];
const realEmailDomains = [
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "protonmail.com",
  "aol.com",
  "icloud.com",
];
const domainExtensions = nova.config.get("random.domainTLDs", "array") || [
  ".com",
  ".net",
  ".org",
];

function stripPunctuation(str) {
  return str.replace(/[\W_]+/g, "");
}

function emailLocalPart() {
  const localPart1 = stripPunctuation(
    Math.random() > 0.5 ? lorem.generateWords(1) : nameFirst()
  );
  const localPart2 = stripPunctuation(
    Math.random() > 0.5 ? lorem.generateWords(1) : nameLast()
  );
  const localPart3 = Math.random() > 0.5 ? generateNumber(2, 99) : "";
  return `${localPart1}${pickFromArray(
    localPartJoiners
  )}${localPart2}${localPart3}`.toLowerCase();
}

function emailDomainPart() {
  if (nova.config.get("random.useRealEmailDomains", "boolean")) {
    return pickFromArray(realEmailDomains);
  } else {
    return `${stripPunctuation(
      lorem.generateWords(generateNumber(1, 3))
    )}${pickFromArray(domainExtensions)}`.toLowerCase();
  }
}

export function webEmail() {
  return replaceDiacritics(
    `${emailLocalPart()}@${emailDomainPart()}`
  ).toLowerCase();
}
