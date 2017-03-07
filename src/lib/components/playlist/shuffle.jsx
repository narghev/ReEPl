import React from 'react';

export const Shuffle = ({clickHandler, shuffle}) => {
  return(
    <div onClick={ clickHandler }>
      <img src={
            (()=>{
              if (shuffle)
                return ('images/shuffle1.png');
              return ('images/shuffle0.png');
            })()
        }
      />
    </div>
  )
}
