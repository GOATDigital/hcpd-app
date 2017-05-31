/* NEA design */

import React from 'react';
import { API_ADDRESS } from '../../constants/Config';

const DoctorItemNEA = ({payment_methods, languages_spoken, type_of_practice, office_managers_name, practice_website, practice_email, practice_phone, zip_code, state, city, address_2, address_1, country, practice_name, taking_patients, sex, email , designation, last_name, first_name, featured, has_video, doctor_image}) => {
  let des = `${designation}. ` + first_name + ' ' + last_name;
  //dev
  doctor_image = true;
  return (
    <div className='doctor-item flex'>
       <div className='col col-image'>
          {doctor_image ?<div className='inline doctor-image'>
          <span className='image-wrapper'><img src={`${API_ADDRESS}/media/images/${doctor_image}`} /></span></div>: ''}
        <p className='certification'>{'certification and certification'}</p>
      </div>
      <div className='col general-text'>
        <p className='doctor-title'>{`${last_name} ${first_name}`}</p>
        <p>{`${city}, ${state}, ${zip_code}`}</p>
        <p>{practice_website}</p>
      </div>
      <div className='col'>
        <p className=''>{type_of_practice}</p>
      </div>
      <div className='col'>
        {payment_methods.map(method => <p key={Math.random()} >{method}</p>)}
      </div>
      <div className='col'>
        <p className='phone-text'>{practice_phone}</p>
        <p className='email-link'>{practice_email}</p>
        <a className='website-link' href="{practice_website}">{'Clinical trial site'}</a>
      </div>
    </div>);
}

export default DoctorItemNEA;
