import { cities } from "../data/cities";
import { postcodeAreas } from "../data/gb-postcode";
import {
  prefixes,
  suffixes,
  extraSuffixes,
  names,
} from "../data/street-address";
import { usStates } from "../data/us-states";
import {
  pickFromArray,
  generateString,
  generateNumber,
} from "./util/utilities";

export function addressStreet() {
  let addr = generateNumber(1, 100) + " ";
  addr += Math.random() < 0.1 ? pickFromArray(prefixes) + " " : "";
  addr += pickFromArray(names) + " " + pickFromArray(suffixes) + " ";
  addr += Math.random() < 0.1 ? pickFromArray(extraSuffixes) + " " : "";
  return addr.trim();
}

export function addressCity() {
  return pickFromArray(cities);
}

export function addressGBPostcode() {
  const randomArea = pickFromArray(postcodeAreas);
  const randomDistrict = generateNumber(0, 50);
  // Area
  let postcode = randomArea.area;
  // District
  postcode += randomDistrict;
  // If area allows subdistricts, and district is between 1 and 9 include a
  // subdistrict from allowed letters. Different groups of letters are used
  // depending on if the area is one character or two.
  if (
    typeof randomArea.hasSubdistricts !== "undefined" &&
    randomArea.hasSubdistricts === true &&
    randomDistrict >= 1 &&
    randomDistrict <= 9
  ) {
    postcode +=
      randomArea.area.length === 2
        ? generateString(1, "ABEHMNPRVWXY")
        : generateString(1, "ABCDEFGHJKPSTUW");
  }
  // Sector
  postcode += " " + generateNumber(0, 9);
  // Unit
  postcode += generateString(2, "ABDEFGHJLNPQRSTUWXYZ");
  return postcode;
}

export function addressUSStateName() {
  return pickFromArray(usStates).name;
}

export function addressUSStateCode() {
  return pickFromArray(usStates).code;
}

export function addressUSZipCode() {
  return generateString(5, "0123456789");
}

export function addressUSZipCodePlus4() {
  return `${addressUSZipCode()}-${generateString(4, "0123456789")}`;
}
