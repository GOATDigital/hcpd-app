/* NAAF design */

import React from 'react';
import { API_ADDRESS } from '../../constants/Config';

const DoctorItemNAAF = ({payment_methods, languages_spoken, type_of_practice, office_managers_name, practice_website, practice_email, practice_phone, zip_code, state, city, address_2, address_1, country, practice_name, taking_patients, sex, email , designation, last_name, first_name, featured, has_video, doctor_image}) => {
  let des = `${designation}. ` + first_name + ' ' + last_name;
  //dev
  has_video = true;
  doctor_image = true;
  des = `Hi! My name is Sarah and I grew up in Holmdel, New Jersey. I studied exercise
science at the University of Connecticut, and am now pursuing my doctorate
in physical therapy at George Washington University in Washington DC.
Watch video
Just after turning 6 years old`;
  return (
    <div className='doctor-item flex'>
      <div className='row test-block-details'>
        <div className='col'>
        {/*<div className='inline featured-image'>
          <span>{featured ? <img src={`${API_ADDRESS}/media/images/Star.svg`} /> : ''}</span>
        </div>*/}
        {doctor_image ? <div className='inline doctor-image'>
          <span className='image-wrapper'><img src={`${API_ADDRESS}/media/images/${doctor_image}`} /></span>
        </div>: ''}
        {has_video ? <a href={has_video} target="_blank" className='video-link'><img src={`${API_ADDRESS}/media/images/Play.svg`} /> Click to see video</a> : ''}
       </div>
       <div className='col'>
            <p>{des}</p>
        </div>
      </div>
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
    </div>);
}

export default DoctorItemNAAF;
