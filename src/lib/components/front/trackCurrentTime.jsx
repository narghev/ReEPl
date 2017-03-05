import React from 'react';

export const TrackCurrentTime = ({currentTime, duration}) => {
  if ((currentTime/duration)*100 <= 90){
    return(
      <p style={{marginLeft: `${(currentTime/duration)*100}%`}}>
        {`${Math.floor(currentTime/60)}:${Math.floor(currentTime - Math.floor(currentTime/60)*60)}`}
      </p>
    )
  }
  return (<p></p>);
}
