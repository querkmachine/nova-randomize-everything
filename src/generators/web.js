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

const domainExtensions = nova.config.get("random.domainTLDs", "array").length
  ? nova.config.get("random.domainTLDs", "array")
  : [".com", ".net", ".org"];

function stripPunctuation(str) {
  return str.replace(/[\W_]+/g, "");
}

function emailLocalPart() {
  const localPart1 = stripPunctuation(
    Math.random() > 0.5 ? lorem.generateWords(1) : nameFirst()
  );
  const localPart2 =
    Math.random() > 0.25
      ? stripPunctuation(
          Math.random() > 0.5 ? lorem.generateWords(1) : nameLast()
        )
      : "";
  const localPart3 = Math.random() > 0.5 ? generateNumber(2, 99) : "";
  return replaceDiacritics(
    `${localPart1}${pickFromArray(localPartJoiners)}${localPart2}${localPart3}`
  ).toLowerCase();
}

function emailDomainPart() {
  if (nova.config.get("random.useRealEmailDomains", "boolean")) {
    return pickFromArray(realEmailDomains);
  } else {
    return webDomainName();
  }
}

export function webEmail() {
  return `${emailLocalPart()}@${emailDomainPart()}`.toLowerCase();
}

export function webDomainName() {
  return `${stripPunctuation(
    lorem.generateWords(generateNumber(1, 3))
  )}${pickFromArray(domainExtensions)}`.toLowerCase();
}

export function webURL() {
  let str = Math.random() > 0.5 ? "https" : "http";
  str += "://";
  str +=
    Math.random() > 0.5
      ? "www."
      : Math.random() > 0.5
      ? lorem.generateWords(1) + "."
      : "";
  str += webDomainName();
  str += "/" + lorem.generateWords(1);
  str += "/" + lorem.generateWords(1);
  str += "?" + lorem.generateWords(1) + "=" + lorem.generateWords(1);
  str += "&" + lorem.generateWords(1) + "=" + generateNumber(1, 9999);
  str += "#" + lorem.generateWords(1);
  return str.toLowerCase();
}
