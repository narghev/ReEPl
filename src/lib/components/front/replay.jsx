import React from 'react';

export const Replay = ({show, clickHandler, replay, filterDeg}) => {
  if (show) {
    return (<div></div>);
  }
  if (replay){
    return (
      <img className='replay' style={{filter: `hue-rotate(${filterDeg}deg)`}}
       src='images/replay1.png' onClick={ clickHandler }></img>
    )
  }
  return (
    <img className='replay' src='images/replay0.png' onClick={ clickHandler }></img>
  )
}
