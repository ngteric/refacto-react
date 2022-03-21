import DomainFilter from './DomainFilter.component';
import { connect } from 'react-redux'
import { getClassifications, getCountries, getSubClassifications } from '../../redux/domains/selectors';
import { AppState } from '../../redux/store';

const mapStateToProps = (state: AppState) => ({
  countries: getCountries(state),
  classifications: getClassifications(state),
  subClassifications: getSubClassifications(state),
})

export default connect(mapStateToProps)(DomainFilter)
