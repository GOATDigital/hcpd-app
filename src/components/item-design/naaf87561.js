/* NAAF design */

import React from 'react';
import { API_ADDRESS } from '../../constants/Config';

const DoctorItemNAAF = ({payment_methods, languages_spoken, type_of_practice, office_managers_name, practice_website, practice_email, practice_phone, zip_code, state, city, address_2, address_1, country, practice_name, taking_patients, sex, email , designation, last_name, first_name, featured, has_video, doctor_image}) => {
  let des = `${designation}. ` + first_name + ' ' + last_name;
  return (
    <div className='doctor-item flex'>
      <div className='row table-details flex'>
        <div className='col'>
            <strong>{office_managers_name}</strong>
            <p>{state}, {city}</p>
          </div>
          <div className='col'>
            <p>{sex}</p>
          </div>
          <div className='col'>
            <p>{type_of_practice}</p>
          </div>
          <div className='col'>
            <button className={'link-button'}>Connect with {first_name}</button>
          </div>
      </div>
      <div className='row test-block-details'>
        <div className='col'>
        {/*<div className='inline featured-image'>
          <span>{featured ? <img src={`${API_ADDRESS}/media/images/Star.svg`} /> : ''}</span>
        </div>*/}
        {doctor_image ?<div className='inline doctor-image'>
          <span className='image-wrapper'><img src={`${API_ADDRESS}/media/images/${doctor_image}`} /></span>
          {has_video ? <a href={`#`} className='video-link'><img src={`${API_ADDRESS}/media/images/Play.svg`} /> Click to see video</a> : ''}
        </div>: ''}
       </div>
       <div className='col'>
          <h4><a href="#">{des}</a></h4>
            <p>{practice_name}</p>
        </div>
      </div>
    </div>);
}

export default DoctorItemNAAF;
