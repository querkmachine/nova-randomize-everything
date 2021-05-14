export function generateNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateString(
  length,
  charString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
) {
  let str = "";
  for (let i = 0; i < length; i++) {
    str += charString.charAt(Math.floor(Math.random() * charString.length));
  }
  return str;
}
