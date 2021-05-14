import { countries } from "../data/countries";
import { pickFromArray } from "./util/utilities";

export function countryName() {
  return pickFromArray(countries).name;
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
