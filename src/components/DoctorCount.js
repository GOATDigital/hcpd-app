import React, { Component } from 'react';

const DoctorCount = ({count}) => {
  
  const countText = (__APPID__.trim() === 'naaf87561') ? 'peer mentors match your search' : 'doctors matching your search';

  return (
    <div className="DoctorCount">
      <p>{count} {countText}</p>
    </div>
  )
}

export default DoctorCount;