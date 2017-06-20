import React, { Component } from 'react';

import {match_text_naaf} from '../custom/naaf/constants';
import {match_text_nea} from '../custom/nea/constants';

const countText = (__APPID__ === 'naaf87561') ? match_text_naaf : match_text_nea;

const DoctorCount = ({count}) => {
    return (
    <div className="DoctorCount">
      <p>{count} {countText}</p>
    </div>
  )
}

export default DoctorCount;