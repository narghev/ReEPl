import React from 'react';

export const PlaylistButton = ({clickHandler}) => {
  return(
    <div className="playlistButton">
      <img src="images/playlist.png" onClick={ clickHandler }/>
    </div>
  )
}
