import { AppState } from '../store'

export function getDomains(state: AppState): string[] {
  return state.domains
}

export function getCountries(state: AppState): string[] {
  const countries = state.domains.map(domain => domain.substring(0,2));
  return countries.filter((country, index) => countries.indexOf(country) === index);
}

export function getClassifications(state: AppState): string[] {
  const classifications = state.domains.map(domain => domain.substring(3,5));
  return classifications.filter((classification, index) => classifications.indexOf(classification) === index);
}

export function getSubClassifications(state: AppState): string[] {
  const subClassifications = state.domains.map(domain => domain.substring(6));
  return subClassifications.filter((subClassification, index) => subClassifications.indexOf(subClassification) === index);
}