import DoctorItemNAAF from './../custom/naaf/list-item';
import DoctorItemNEA from './../custom/nea/list-item';

const DoctorItem = (__APPID__ === 'naaf87561') ? DoctorItemNAAF : DoctorItemNEA;

export default DoctorItem;
