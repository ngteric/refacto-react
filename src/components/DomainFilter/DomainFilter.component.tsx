import React from 'react';

interface DomainFilterState {
  countries: string[],
  classifications: string[],
  subClassifications: string[]
}
interface DomainFilterProps {
  countries: string[],
  classifications: string[],
  subClassifications: string[]
}

const initDomainFilterState: DomainFilterState = {
  countries: [],
  classifications: [],
  subClassifications: []
};

class DomainFilter extends React.Component<DomainFilterProps, DomainFilterState> {
  constructor(props: DomainFilterProps) {
    super(props);
    this.state = initDomainFilterState;
  }
  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      ...this.state,
      [event.target.name]: Array.from(event.target.selectedOptions).map(option => option.value)
    });
  }
  render() {
    const {countries, classifications, subClassifications} = this.props || {
      countries: [],
      classifications: [],
      subClassifications: []
    };

    return (<>
      <select name="countries" multiple onChange={this.handleChange}>
        {countries.map(country => (
          <option value={country} key={country}>{country}</option>
        ))}
      </select>
      <select name="classifications" multiple onChange={this.handleChange}>
        {classifications.map(classification => (
          <option value={classification} key={classification}>{classification}</option>
        ))}
      </select>
      <select name="subClassifications" multiple onChange={this.handleChange}>
        {subClassifications.map(subClassification => (
          <option value={subClassification} key={subClassification}>{subClassification}</option>
        ))}
      </select>
    </>)
  }
}

export default DomainFilter
