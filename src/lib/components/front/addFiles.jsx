import React from 'react';
import Add from 'material-ui/svg-icons/content/add-circle-outline';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const AddFiles = ({filePassFunc}) => {
  const handleChange = (event) => {
    filePassFunc(event.target.files);
    event.target.value = "";
  }
  return (
    <div style={{width: '35px', height: '35px'}}>
      <input type="file" accept=".mp3, .wav" className="addFiles" id="add" onChange={handleChange} multiple/>
      <label htmlFor="add">
        <MuiThemeProvider>
          <Add color="#FFFDE7" style={{width: '35px', height: '35px'}}/>
        </MuiThemeProvider>
      </label>
    </div>
  )
}
