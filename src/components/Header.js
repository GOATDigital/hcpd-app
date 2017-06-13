import React from 'react';


const Header = ({subhead, head}) => {
  return (
    <div className='header'>
      <div className='header-wrapper'>
      <h1>{head}</h1>
      <h2>{subhead}</h2>
      </div>
    </div>
  );
}

export default Header;
