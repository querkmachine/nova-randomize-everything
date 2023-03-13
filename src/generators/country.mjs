import { countries } from "../data/countries";
import { pickFromArray } from "./util/utilities";

export function countryName({ useShortCountryNames = false } = {}) {
  const c = pickFromArray(countries);
  return useShortCountryNames ? c.nameShort || c.name : c.name;
}

export function countryISO3166alpha2() {
  return pickFromArray(countries).alpha2;
}

export function countryISO3166alpha3() {
  return pickFromArray(countries).alpha3;
}

export function countryISO3166numeric() {
  return pickFromArray(countries).numeric;
}
