import React from 'react';

const SourceLink = props => {
  /* eslint-disable jsx-a11y/anchor-has-content */
  return (
    <a href={ /* process.env.PUBLIC_URL */ "http://www.kloh.in"} target="_blank" rel="noopener noreferrer" {...props} />
  );
};

export default SourceLink;
