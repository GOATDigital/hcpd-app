import { combineReducers } from 'redux';
import { message } from '../reducers/message';
import activeKeyWordFilters from '../reducers/activeKeyWordFilters';
import doctors from '../reducers/doctors';
import environment from '../reducers/environment';
import navigator from '../reducers/navigator';
import settings from '../reducers/settings';
import sort from '../reducers/sort';
import activeFilters from '../reducers/activeFilters';
import filters from '../reducers/filters';
import filterUI from '../reducers/filterUI';
import { location } from '../reducers/location';

const rootReducer = combineReducers({
  activeKeyWordFilters,
  doctors,
  filters,
  filterUI,
  environment,
  activeFilters,
  navigator,
  location,
  message,
  settings,
  sort,
});

export default rootReducer;
