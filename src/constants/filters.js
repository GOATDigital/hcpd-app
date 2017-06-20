import FiltersNAAF from '../custom/naaf/utils';
import FiltersNEA from '../custom/nea/utils';

const filters = (__APPID__ === 'naaf87561') ? FiltersNAAF : FiltersNEA;

export default filters;