import React, { Component } from 'react';

export default class DoctorsHeader extends Component {
  render() {
    let headers = (__APPID__.trim() === 'naaf87561') ? ['Name', 'Age,<br>Gender', 'Will meet<br>with', 'Type of Alopecia<br>Areata', 'Contact'] : ['Badge', 'Name', 'Type of Practice', 'Payment options', 'Contacts'];
    return (
      <div className="doctorsHeader">   
        <div className="flex">
        {
          headers.map((header, index) => {
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