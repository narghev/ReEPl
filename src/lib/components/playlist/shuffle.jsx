import React from 'react';

export const Shuffle = ({clickHandler, shuffle}) => {
  return(
    <div className="shuffle" onClick={clickHandler}>
      <img src={
            (()=>{
              if (shuffle)
                return ('images/shuffle0.png');
              return ('images/shuffle0.png');
            })()
        }
      />
    </div>
  )
}
