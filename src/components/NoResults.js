import React from 'react';

const noResultsTextNAAF = "We couldn't find any peer mentors with your selected filters.";

const NoResults = () => {
  return (
      <div className='col'>{noResultsTextNAAF}</div>
  );
}

export default NoResults;
