import React from 'react';

export const AddFiles = ({filePassFunc}) => {
  const handleChange = (event) => {
    filePassFunc(event.target.files);
    event.target.value = "";
  }
  return (
    <div>
      <input type="file" accept=".mp3, .wav" className="addFiles" id="add" onChange={handleChange} multiple/>
      <label htmlFor="add"><img src="images/addFiles.png" /></label>
    </div>
  )
}
