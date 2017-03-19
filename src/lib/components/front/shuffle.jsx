import React from 'react';

export const Shuffle = ({show, clickHandler, shuffle, filterDeg}) => {
  if (show) {
    return (<div></div>);
  }
  if (shuffle && (window.animationNumber === 2 || window.animationNumber === 3)){
    return (
      <img className='shuffle'
       src='images/shuffle1red.png' onClick={ clickHandler }></img>
    )
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
