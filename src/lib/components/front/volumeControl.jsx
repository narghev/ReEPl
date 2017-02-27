import React from 'react';

export default
class VolumeControl extends React.Component {
  constructor(){
    super();
    this.val = 75
  }
  changeHandler = (event) => {
    this.val = event.target.value;
  }
  render(){
    return(
      <div className="volumeControl">
        <input onChange={this.changeHandler} value={this.val} type="range" min="0" max="100" />
      </div>
    )
  }
}
