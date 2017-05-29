import React, { Component } from 'react';



export default class DoctorsHeader extends Component {
  render() {
    let headers = (__APPID__=== 'naaf87561') ? ['', 'Age, /n Gender', 'Will meet with', 'Type of Alopecia Areata', 'Contact'] : ['Badge', 'Name', 'Type of Practice', 'Payment options', 'Contacts'];
    return (
      <div className="doctorsHeader">
        <div className="flex">
        {
          headers.map((header) => {
            return (
             <div key={header} className={'col'}>
                <p>{header}</p>
              </div>   
            )})
        }
        </div>

      </div>
    )
  }
}