import React from 'react';

export const NextButton = ({clickHandler}) => {
  return(
    <img className='navButtons' src='images/next.png' onClick= { clickHandler }/>
  )
}
