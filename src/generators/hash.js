import { generateString } from "./util/utilities";

const hexChars = "0123456789abcdef";

export function hashMD5() {
  return generateString(32, hexChars);
}

export function hashSHA1() {
  return generateString(40, hexChars);
}

export function hashSHA256() {
  return generateString(64, hexChars);
}
