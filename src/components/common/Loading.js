import React from 'react';
import  { Dna } from 'react-loader-spinner';

function Loading() {
  return (
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperClass="dna-wrapper"
    />
  );
}

export default Loading;
