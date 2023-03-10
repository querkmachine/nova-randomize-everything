import { LoremIpsum } from "lorem-ipsum";
import { nameFirst, nameLast } from "./name";
import {
  pickFromArray,
  generateNumber,
  replaceDiacritics,
} from "./util/utilities";

const lorem = new LoremIpsum();
const defaultDomainExtensions = [
  ".com",
  ".net",
  ".org",
  ".info",
  ".biz",
  ".edu",
];
const realEmailDomains = [
  "aol.com",
  "gmail.com",
  "googlemail.com",
  "hotmail.com",
  "icloud.com",
  "msn.com",
  "outlook.com",
  "protonmail.com",
  "yahoo.com",
];

function sanitize(str) {
  // Replace diacritics
  str = replaceDiacritics(str);
  // Remove punctuation
  str = str.replace(/[\W_]+/g, "");
  return str;
}

export function webUsername() {
  const usernameJoiners = ["", ".", "-", "_", "+"];
  const noOfParts = generateNumber(1, 4);
  const parts = [];

  // Put some parts together
  for (let i = 0; i < noOfParts; i++) {
    // 90% chance of word, 10% chance of digit
    if (Math.random() < 0.9) {
      parts.push(
        sanitize(
          pickFromArray([lorem.generateWords(1), nameFirst(), nameLast()])
        )
      );
    } else {
      parts.push(String(generateNumber(0, 999)));
    }
    // Additional 25% chance of punctuation if this isn't the last iteration
    // of the loop
    if (i != noOfParts - 1 && Math.random() < 0.25) {
      parts.push(pickFromArray(usernameJoiners));
    }
  }

  // Join them together
  return parts.join("");
}

export function webDomainName({
  domainExtensions = defaultDomainExtensions,
} = {}) {
  domainExtensions = domainExtensions.length
    ? domainExtensions
    : defaultDomainExtensions;
  const domainNameJoiners = ["", "-"];
  const noOfParts = generateNumber(1, 3);
  const parts = [];

  for (let i = 0; i < noOfParts; i++) {
    // 95% chance of word, 5% chance of digit
    if (Math.random() < 0.95) {
      parts.push(
        sanitize(
          pickFromArray([lorem.generateWords(1), nameFirst(), nameLast()])
        )
      );
    } else {
      parts.push(String(generateNumber(0, 999)));
    }
  }

  return (
    parts.join(pickFromArray(domainNameJoiners)) +
    pickFromArray(domainExtensions)
  ).toLowerCase();
}

export function webEmail({
  domainExtensions = defaultDomainExtensions,
  useRealEmailDomains = false,
} = {}) {
  domainExtensions = domainExtensions.length
    ? domainExtensions
    : defaultDomainExtensions;
  const domainPart = useRealEmailDomains
    ? pickFromArray(realEmailDomains)
    : webDomainName({ domainExtensions });
  return `${webUsername().toLowerCase()}@${domainPart}`;
}

export function webURL({
  domainExtensions = defaultDomainExtensions,
  urlsIncludeSubdomains = true,
  urlsIncludeFilePaths = true,
  urlsIncludeQueryStrings = true,
  urlsIncludeHashes = true,
} = {}) {
  domainExtensions = domainExtensions.length
    ? domainExtensions
    : defaultDomainExtensions;
  const joiners = ["", "-", "_"];
  const parts = [];

  // Protocol
  parts.push(pickFromArray(["http://", "https://"]));

  // Subdomain
  if (urlsIncludeSubdomains) {
    parts.push(pickFromArray(["www.", `${sanitize(lorem.generateWords(1))}.`]));
  }

  // Domain
  parts.push(webDomainName());

  // File path/extension
  if (urlsIncludeFilePaths) {
    const noOfFilePathParts = generateNumber(1, 3);
    const filePathParts = [];
    for (let i = 0; i < noOfFilePathParts; i++) {
      let string = sanitize(lorem.generateWords(generateNumber(1, 3)));
      string = string.replace(" ", pickFromArray(joiners));
      filePathParts.push(pickFromArray([string, generateNumber(1, 1000)]));
    }
    parts.push(`/${filePathParts.join("/")}`);
  }

  // Query string
  if (urlsIncludeQueryStrings) {
    const noOfQueryStringParts = generateNumber(1, 3);
    const queryStringParts = [];
    for (let i = 0; i < noOfQueryStringParts; i++) {
      let key = sanitize(lorem.generateWords(generateNumber(1, 3)));
      key = key.replace(" ", pickFromArray(joiners));
      const value = pickFromArray([
        sanitize(lorem.generateWords(1)),
        generateNumber(1, 1000000),
      ]);
      queryStringParts.push(`${key}=${value}`);
    }
    parts.push(`?${queryStringParts.join("&")}`);
  }

  // Hash
  if (urlsIncludeHashes) {
    let string = sanitize(lorem.generateWords(generateNumber(1, 3)));
    string = string.replace(" ", pickFromArray(joiners));
    parts.push(`#${string}`);
  }

  return parts.join("").toLowerCase();
}
