import React from 'react';

export const Replay = ({clickHandler, replay, filterDeg}) => {
  if (replay){
    return (
      <img className='replay' style={{filter: `hue-rotate(${filterDeg}deg)`}}
       src='images/replay1.png' onClick={ clickHandler }></img>
    )
  }
  return (
    <img className='replay' src='images/replay1.png' onClick={ clickHandler }></img>
  )
}
