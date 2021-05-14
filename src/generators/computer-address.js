import { generateString, generateNumber } from "./util/utilities";

const hexChars = "0123456789abcdef";

export function computerAddressIPV4() {
  let str = String(generateNumber(0, 255));
  for (let i = 0; i < 3; i++) {
    str += "." + generateNumber(0, 255);
  }
  return str;
}

export function computerAddressIPV6() {
  let str = generateString(4, hexChars);
  for (let i = 0; i < 7; i++) {
    str += ":" + generateString(4, hexChars);
  }
  return str;
}

export function computerAddressMAC48() {
  let str = generateString(2, hexChars);
  for (let i = 0; i < 5; i++) {
    str += ":" + generateString(2, hexChars);
  }
  return str.toUpperCase();
}

export function computerAddressMAC64() {
  let str = generateString(2, hexChars);
  for (let i = 0; i < 7; i++) {
    str += ":" + generateString(2, hexChars);
  }
  return str.toUpperCase();
}
