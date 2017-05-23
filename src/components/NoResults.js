import React from 'react';

const noResultsText = "We couldn't find any doctors with your selected filters.";

const NoResults = () => {
  return (
    <div className='doctor-item no-results flex'>
      <div className='col'>{noResultsText}</div>
    </div>
  );
}

export default NoResults;
