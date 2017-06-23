/* NEA design */

import React from 'react';
import { API_ADDRESS } from '../../constants/Config';

const data = {
  certificate: "NEA CME certificate in Eczema Excellence ",
  first_name: "Dr. David",
  last_name: "Van Veen",
  specialisation: "Biologics",
  practice_website: "www.doctorsite.com",
  practice_phone:"503-555-5555",
  practice_email: "doctoremail@doctorsite.com",
  practice_type: ["Biologics"],
  payment_methods: ["Medicaid", "Medicaid"],
  city: '123 NE First St. Portland',
  state: 'OR',
  zip_code: '97209',
  doctor_image:'some-mage-url'
};


const DoctorItemNEA = () => {

  const {
 certificate,
  first_name,
  last_name,
  specialisation,
  practice_website,
  practice_phone,
  practice_email,
  practice_type,
  payment_methods,
  city,
  state,
  zip_code,
  doctor_image
} = data;

  const types = practice_type.join(', ').substring(practice_type.length-2);

  return (
    <div className='doctor-item flex'>
       <div className='col col-image'>
          {doctor_image ?<div className='inline doctor-image'>
          <span className='image-wrapper'><img src={doctor_image} /></span></div>: ''}
        <p className='certification'>{certificate}</p>
      </div>
      <div className='col general-text'>
        <p className='doctor-title'>{`${last_name} ${first_name}`}</p>
        <p>{`${city}, ${state}, ${zip_code}`}</p>
        <p>{practice_website}</p>
      </div>
      <div className='col'>
        <p className=''>{practice_type}</p>
      </div>
      <div className='col'>
        {payment_methods ? payment_methods.map(method => <p key={Math.random()} >{method}</p>) : ''}
      </div>
      <div className='col'>
        <p className='phone-text'>{practice_phone}</p>
        <p className='email-link'>{practice_email}</p>
        <a className='website-link' href="{practice_website}">{'Clinical trial site'}</a>
      </div>
    </div>);
}

export default DoctorItemNEA;
