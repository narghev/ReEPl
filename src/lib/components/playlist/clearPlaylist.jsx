import React from 'react';

export const ClearPlaylist = ({clickHandler}) => {
  return (
    <div className="clearPlaylist" onClick={ clickHandler }>
      <img src="images/delete.png"></img>
    </div>
  )
}
