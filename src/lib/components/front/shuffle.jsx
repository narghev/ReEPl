import React from 'react';

export const Shuffle = ({clickHandler, shuffle}) => {
  return(
      <img className='shuffle' src={
            (()=>{
              if (shuffle)
                return ('images/shuffle1.png');
              return ('images/shuffle0.png');
            })()
        }
      onClick={ clickHandler }
      />
  )
}
