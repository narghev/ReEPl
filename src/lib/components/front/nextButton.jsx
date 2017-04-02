import React from 'react';
import Next from 'material-ui/svg-icons/av/skip-next';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const NextButton = ({clickHandler}) => {
  return(
    <div onClick= { clickHandler }>
      <MuiThemeProvider>
        <Next color="#FFFDE7" style={{width: '40px', height: '40px', marginTop: '7px'}} />
      </MuiThemeProvider>
    </div>
  )
}
