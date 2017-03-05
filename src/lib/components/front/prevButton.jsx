import React from 'react';

export const PrevButton = ({clickHandler}) => {
  return(
    <img className='navButtons' src='images/prev.png' onClick= {clickHandler } />
  )
}
