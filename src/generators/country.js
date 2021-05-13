import { countries } from "../data/countries";

export function countryName() {
  return countries[(countries.length * Math.random()) | 0].name;
}

export function countryISO3166alpha2() {
  return countries[(countries.length * Math.random()) | 0].alpha2;
}

export function countryISO3166alpha3() {
  return countries[(countries.length * Math.random()) | 0].alpha3;
}

export function countryISO3166numeric() {
  return countries[(countries.length * Math.random()) | 0].numeric;
}
