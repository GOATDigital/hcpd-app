import FiltersNAAF from './item-design/naaf87561';
import FiltersNEA from './item-design/nea64356';

const filters = (__APPID__.trim() === 'naaf87561') ? FiltersNAAF : FiltersNEA;

export default filters;