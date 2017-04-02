import React from 'react';
import Previous from 'material-ui/svg-icons/av/skip-previous';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const PrevButton = ({clickHandler}) => {
  return(
    <div onClick= { clickHandler }>
      <MuiThemeProvider>
        <Previous color="#FFFDE7" style={{width: '40px', height: '40px', marginTop: '7px'}} />
      </MuiThemeProvider>
    </div>
  )
}
