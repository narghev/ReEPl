import React from 'react';

export const ClearPlaylist = ({clickHandler, styleImg}) => {
  return (
    <div className="clearPlaylist" onClick={ clickHandler }>
      <img src="images/delete.png" style={styleImg}></img>
    </div>
  )
}
