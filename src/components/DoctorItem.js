import DoctorItemNAAF from './item-design/naaf87561';
import DoctorItemNEA from './item-design/nea64356';

console.log(`Environment is : ${__APPID__}`);
const DoctorItem = (__APPID__=== 'naaf87561') ? DoctorItemNAAF : DoctorItemNEA;

export default DoctorItem;
