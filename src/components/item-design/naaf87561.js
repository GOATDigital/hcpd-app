/* NAAF design */

import React from 'react';
import { API_ADDRESS, STATIC_ASSETS } from '../../constants/Config';

const EXTERNAL_URL = 'https://naaf.org/enroll-your-child-into-the-mentee-program?mentor=';

const has_types = 
  [{
    code: "Has_AA_patchy_loss__c",
    title: "Alopecia Areata - Patchy"
  },{
    code:"Has_AT__c",
    title:"Alopecia Totalis"
  },{
    code:"Has_AU__c",
    title:"Alopecia Universalis"
  },{
    code:"Has_Alopecia__c",
    title:"Alopecia Areata"
  }];

const DoctorItemNAAF = (data) => {

  let id, age, type_of_practice = [], state, city, address_2, 
  taking_patients, sex, email , designation, last_name, 
  first_name, has_video, doctor_image, will_meet_with, designation_short, view, types, isMobile, agePlusSex;

  isMobile = data.view;
  id = data['Id'];
  has_types.forEach(t => { if(data[t.code]){ type_of_practice.push(t.title);}});
  types = type_of_practice.join(', ').substring(type_of_practice.length-2);
  first_name = data.FirstName;
  last_name = data.LastName;

  sex = data.Gender__c || '';
  age = data.Birthdate ? new Date().getFullYear() - new Date(data.Birthdate).getFullYear() : '';
  agePlusSex = (sex.length > 0 && age > 0) ? `${age}, ${sex}` : `${age} ${sex}`;

  has_video = data['URL_for_Peer_Platform__c'];
  doctor_image = data['URL_for_Peer_Platform_Photo__c'];
  address_2 = (data.MailingCity ? data.MailingCity : '') + ', ' + (data.MailingState ? data.MailingState : '');
  designation = data.Description || data.Bio__c;
  
  const meetChildren = (data.Mentor_Kids__c ? 'Children' : '');
  const meetParents = (data.Mentor_Parents__c ? 'Parents' : '');
  will_meet_with = (meetChildren.length > 0 && meetParents.length > 0) ? `${meetChildren}, ${meetParents}` : `${meetChildren} ${meetParents}`;

  designation_short = designation.slice(0, 150);

const handleClick = () => {
    window.location = `${EXTERNAL_URL}${id}`;
};

const desktop_layout =  (<div className='doctor-item flex'>
        {/*1 column*/}
        <div className='col col-main-1'>
        {doctor_image ? <div className='inline doctor-image'>
          <span className='image-wrapper'><img src={`${doctor_image}`} /></span>
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
                  <p className='text-center'>{agePlusSex}</p>
                </div>
                {/*sub col 3*/}
                <div className='col-sub-3'>
                  <p className='text-center'>{will_meet_with}</p>
                </div>
                <div className='col-sub-4'>
                    <p>{types}</p>
                </div>
            </div>
            <p className='designation-block'>{designation}</p>
        </div>
      {/*colum 4*/}
        <div className='col col-main-4'>
          <button className={'link-button'} onClick={handleClick}>Connect with {first_name}</button>
        </div>
    </div>);

    
const mobile_layout =  (<div className='doctor-item flex mobile'>

      <div className='row flex no-step'>
  
        <div className='col col-mobile-1'>
            {doctor_image ? <div className='inline doctor-image'>
              <span className='image-wrapper'><img src={`${doctor_image}`} /></span>
            </div>: ''}
          </div>
          <div className='col-mobile-2'>
            <p className='name-line'>{first_name} {last_name}</p>
            <p className='address-line'>{address_2}</p>
          </div>
        </div>
      <div className='row flex'>
         <div className='col col-mobile-1'></div>
         <div className='col-mobile-2'>
        {has_video ? <a href={has_video} target="_blank" className='video-link'>
          <span dangerouslySetInnerHTML={{__html: svg_play}} /> Watch video</a> : ''}
          </div>
     </div>
      <div className='row flex'>
        <p className='designation-block'>{designation_short}</p>
     </div>
      <div className='row flex row-props-listing'>
        <ul>
          <li><label>Age, gender:</label>{agePlusSex}</li>
          <li><label>Will meet with:</label> {will_meet_with}</li>
          <li><label>Type of Alopecia Areata:</label>{types}</li>
        </ul>
     </div>
      <div className='row flex'>
          <button className={'link-button'} onClick={handleClick}>Connect with {first_name}</button>
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