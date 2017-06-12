/* NAAF design */

import React from 'react';
import { API_ADDRESS, STATIC_ASSETS } from '../../constants/Config';

const has_types = 
  [{
    code: "Has_AA_patchy_loss__c",
    title: "Alopecia Areata"
  },{
    code:"Has_AT__c",
    title:"Alopecia Universalis"
  },{
    code:"Has_AU__c",
    title:"Alopecia Areata - Patchy"
  },{
    code:"Has_Alopecia__c",
    title:"Alopecia Totalis"
  }];

const DoctorItemNAAF = (data) => {

  let age, type_of_practice = [], office_managers_name, 
  practice_website, practice_email, practice_phone, zip_code, state, city, address_2, 
  address_1, country, practice_name, taking_patients, sex, email , designation, last_name, 
  first_name, has_video, doctor_image, will_meet_with, designation_short, view, types;

  const isMobile = data.view;
  has_types.forEach(t => { if(data[t.code]){ type_of_practice.push(t.title);}});
  types = type_of_practice.join(', ').substring(type_of_practice.length-2);
  first_name = data.FirstName;
  last_name = data.LastName;
  sex = data.Gender__c;
  age = new Date().getFullYear() - new Date(data.Birthdate).getFullYear();
  has_video = true;
  doctor_image = `https://na78.salesforce.com/${data.PhotoUrl}`;
  address_2 = (data.MailingCity ? data.MailingCity : '') + ', ' + (data.MailingState ? data.MailingState : '');
  designation = data.Description || data.Bio__c;
  will_meet_with = (data.Mentor_Kids__c ? 'Children' : '') + ' ' + (data.Mentor_Parents__c ? 'Parents' : '');
  designation_short = designation.slice(0, 150);

const desktop_layout =  (<div className='doctor-item flex'>
        {/*1 column*/}
        <div className='col col-main-1'>
        {doctor_image ? <div className='inline doctor-image'>
          <span className='image-wrapper'><img src={`${doctor_image}`} /></span>
          {/*${API_ADDRESS}/media/images/*/}
        </div>: ''}
        {has_video ? <a href={has_video} target="_blank" className='video-link'>
           <span dangerouslySetInnerHTML={{__html: svg_play}} /> Watch video</a> : ''}
       </div>
       {/*colum 2*/}
       <div className='col col-main-2'>

            <div className='row table-details flex'>
                {/*sub col 1*/}
                <div className='col-sub-1'>
                  <p className='name-line'>{first_name} {last_name}</p>
                  <p className='address-line'>{address_2}</p>
                </div>
                {/*sub col 2*/}
                <div className='col-sub-2'>
                  <p>{age}, {sex}</p>
                </div>
                {/*sub col 3*/}
                <div className='col-sub-3'>
                  <p>{will_meet_with}</p>
                </div>
            </div>
            <p className='designation-block'>{designation}</p>
        </div>
      {/*colum 3*/}
      <div className='col col-main-3'>
          <p>{types}</p>
        </div>
      {/*colum 4*/}
        <div className='col col-main-4'>
          <button className={'link-button'}>Connect with {first_name}</button>
        </div>
    </div>);

    
const mobile_layout =  (<div className='doctor-item flex mobile'>

      <div className='row flex'>
  
        <div className='col col-mobile-1'>
            {doctor_image ? <div className='inline doctor-image'>
              <span className='image-wrapper'><img src={`${doctor_image}`} /></span>
              {/*${API_ADDRESS}/media/images/*/}
            </div>: ''}
          </div>
          <div className='col-mobile-2'>
            <p className='name-line'>{first_name} {last_name}</p>
            <p className='address-line'>{address_2}</p>
          </div>
        </div>
      <div className='row flex'>
        {has_video ? <a href={has_video} target="_blank" className='video-link'>
          <span dangerouslySetInnerHTML={{__html: svg_play}} /> Watch video</a> : ''}
     </div>
      <div className='row flex'>
        <p className='designation-block'>{designation_short}</p>
     </div>
      <div className='row flex row-props-listing'>
        <ul>
          <li>{age}, {sex}</li>
          <li>{will_meet_with}</li>
          <li>{types}</li>
        </ul>
     </div>
      <div className='row flex'>
          <button className={'link-button'}>Connect with {first_name}</button>
     </div>
     </div>);

      return isMobile ? mobile_layout : desktop_layout;
}

export default DoctorItemNAAF;


const svg_play = `<svg width="22px" height="25px" viewBox="0 0 22 25" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <path d="M7.11381286,16.5893106 C3.21246034,12.6879581 4.42809991,8.55995177 9.81065973,7.37319847 L20.2889188,5.06293926 C25.6796987,3.87437358 29.084454,7.28916139 27.8977007,12.6717212 L25.5874415,23.1499802 C24.3988758,28.5407602 20.2693119,29.7448097 16.3713293,25.8468271 L7.11381286,16.5893106 Z" id="path-1"></path>
        <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="23.3064255" height="23.3074622" fill="white">
            <use xlink:href="#path-1"></use>
        </mask>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Mobile_Close_Filter" transform="translate(-20.000000, -876.000000)" stroke="#D3D3D3" stroke-width="6">
            <g id="Angelina" transform="translate(11.000000, 782.000000)">
                <g id="Group-3" transform="translate(0.000000, 90.000000)">
                    <use id="Rectangle-4" mask="url(#mask-2)" transform="translate(16.480498, 16.480498) rotate(-315.000000) translate(-16.480498, -16.480498) " xlink:href="#path-1"></use>
                </g>
            </g>
        </g>
    </g>
</svg>`;