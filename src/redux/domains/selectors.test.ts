import { getClassifications, getCountries, getDomains, getSubClassifications } from "./selectors";
import { AppState } from "../store";


describe('selectors', () => {
  const state: AppState = {
    domains: [
      'SU_PE-RTE',
      'ST_TE_STT'
    ]
  }

  describe('getDomains', () => {
    // This describe must be left untouched, this selector is used on other parts of the application.
    it('should return the domains', () => {
      const domains = getDomains(state);

      expect(domains).toEqual([
        'SU_PE-RTE',
        'ST_TE_STT'
      ])
    })
  })

  describe('getCountries', () => {
    it('should return the list of country from domains', () => {
      const domains = getCountries(state);

      expect(domains).toEqual(['SU', 'ST'])
    })
    it('should remove duplicate countries', () => {
      const inMemoryState: AppState = {
        domains: [
          ...state.domains,
          'SU_PZ_EID',
        ]
      }
      const domains = getCountries(inMemoryState);

      expect(domains).toEqual(['SU', 'ST'])
    })
  })
  describe('getClassification', () => {
    it('should return the the list of classification from domains', () => {
      const domains = getClassifications(state);

      expect(domains).toEqual(['PE', 'TE'])
    })

    it('should remove duplicate classifications', () => {
      const inMemoryState: AppState = {
        domains: [
          ...state.domains,
          'SU_PE_EID',
        ]
      }
      const domains = getClassifications(inMemoryState);

      expect(domains).toEqual(['PE', 'TE'])
    })
  })
  describe('getSubClassification', () => {
    it('should return the list of subclassification from domains', () => {
      const domains = getSubClassifications(state);

      expect(domains).toEqual(['RTE', 'STT'])
    })

    it('should remove duplicate subClassifications', () => {
      const inMemoryState: AppState = {
        domains: [
          ...state.domains,
          'SU_PE_RTE',
        ]
      }
      const domains = getSubClassifications(inMemoryState);

      expect(domains).toEqual(['RTE', 'STT'])
    })
  })
})
