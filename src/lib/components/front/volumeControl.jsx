import React from 'react';

export default
class VolumeControl extends React.Component {
  constructor(){
    super();
    this.val = 75;
  }
  changeHandler = (event) => {
    this.val = event.target.value;
    document.getElementById("track").volume = (this.val/100);
  }
  componentDidUpdate(){
    document.getElementById("track").volume = (this.val/100);
  }
  render(){
    return(
      <div className="volumeControl">
        <input onChange={ this.changeHandler } defaultValue="75" type="range" min="0" max="100" />
        <style>
          {
          `.volumeControl input[type=range]::-webkit-slider-thumb{filter: hue-rotate(${this.props.filterDeg}deg);}`
          }
        </style>
      </div>
    )
  }
}
