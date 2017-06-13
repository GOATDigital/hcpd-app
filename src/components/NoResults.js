import React from 'react';

const noResultsText = "We couldn't find any doctors with your selected filters.";

const NoResults = () => {
  return (
      <div className='col'>{noResultsText}</div>
  );
}

export default NoResults;
