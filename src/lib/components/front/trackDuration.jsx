import React from 'react';

export const TrackDuration = ({duration, currentTime}) => {
  if (duration != 0){
    if ((currentTime/duration)*100 <= 90){
      return(
        <p>
          {`${Math.floor(duration/60)}:${Math.floor(duration - Math.floor(duration/60)*60)}`}
        </p>
      );
    }
    return(
      <p>
        {`${Math.floor(currentTime/60)}:${Math.floor(currentTime - Math.floor(currentTime/60)*60)}`}
      </p>
    )
  }
  return (<p></p>);
}
