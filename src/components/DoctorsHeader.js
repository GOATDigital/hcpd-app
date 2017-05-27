import React, { Component } from 'react';



export default class DoctorsHeader extends Component {
  
  render() {
    let headers = ['Name', 'Type of Practice', 'Payment Options', 'Contact' ];
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