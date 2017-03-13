import React from 'react';

export const Shuffle = ({show, clickHandler, shuffle, filterDeg}) => {
  if (show) {
    return (<div></div>);
  }
  if (shuffle){
    return (
      <img className='shuffle' style={{filter: `hue-rotate(${filterDeg}deg)`}}
       src='images/shuffle1.png' onClick={ clickHandler }></img>
    )
  }
  return (
    <img className='shuffle' src='images/shuffle0.png' onClick={ clickHandler }></img>
  )
}
