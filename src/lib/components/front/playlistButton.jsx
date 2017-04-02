import React from 'react';
import Menu from 'material-ui/svg-icons/navigation/apps';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const PlaylistButton = ({clickHandler}) => {
  return(
    <div className="playlistButton" onClick={ clickHandler }>
      <MuiThemeProvider>
        <Menu color="#FFFDE7" style={{width: '35px', height: '35px'}} />
      </MuiThemeProvider>
    </div>
  )
}
