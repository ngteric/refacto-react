import React from 'react';
import { shallow } from 'enzyme';
import DomainFilter from './DomainFilter.component';


describe('components', () => {
  describe('DomainFilter', () => {
    it('should allow the user to filter', () => {
      const domainFilterProps = {
        countries: ['DE', 'FR'],
        classifications: ['ZE', 'TE'],
        subClassifications: ['BAR', 'FOO']
      }
      const wrapper = shallow(
        <DomainFilter
          countries={domainFilterProps.countries}
          classifications={domainFilterProps.classifications}
          subClassifications={domainFilterProps.subClassifications}
        />
      );

      expect(wrapper.find('select')).toHaveLength(3);
    })
  })
})
