import React from 'react';

export default
class AddFiles extends React.Component {
  handleChange = (event) => {
    this.props.filePassFunc(event.target.files);
  }
  render(){
    return (
      <div>
        <input type="file" accept=".mp3, .wav" className="addFiles" id="add" onChange={this.handleChange} multiple/>
        <label htmlFor="add"><img src="images/addFiles.png" /></label>
      </div>
    )
  }
}
