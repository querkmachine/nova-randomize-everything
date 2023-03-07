export function uuidV4() {
  // if nova.crypto is available, use it
  if (typeof nova === "object" && "crypto" in nova) {
    return nova.crypto.randomUUID().toLowerCase();
  }

  // if not, generate one manually
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
