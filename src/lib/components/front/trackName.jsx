import React from 'react';

export const TrackName = ({name}) => {
  let result = "";
  const array = name.split('.');
  for (let i = 0; i < array.length-1; i++){
    result+=array[i];
  }
  return (
    <div className="trackName">
      <p>{ result }</p>
    </div>
  );
};
