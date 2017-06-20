import React, { Component } from 'react';

import {list_titles_naaf} from '../custom/naaf/constants';
import {list_titles_nea} from '../custom/nea/constants';

const header_data = (__APPID__ === 'naaf87561') ? list_titles_naaf : list_titles_nea;

export default class DoctorsHeader extends Component {
  render() {
    return (
      <div className="doctorsHeader">   
        <div className="flex">
        {
          header_data.map((header, index) => {
            return (
             <div key={header} className={'col' + ' col-' + index}>
                <p dangerouslySetInnerHTML={{ __html: header}} />
              </div>   
            )})
        }
        </div>

      </div>
    )
  }
}