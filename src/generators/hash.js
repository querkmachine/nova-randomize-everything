import { generateString } from "./util/utilities";

export function hashMD5() {
  return generateString(32, "0123456789abcdef");
}

export function hashSHA1() {
  return generateString(40, "0123456789abcdef");
}

export function hashSHA256() {
  return generateString(64, "0123456789abcdef");
}
