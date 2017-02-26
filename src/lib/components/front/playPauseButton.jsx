import React from 'react';

export default
class PlayPauseButton extends React.Component {
  constructor(){
    super();
    this.state = {
      play: false
    }
    this.playSrc = 'images/play.png';
    this.pauseSrc = 'images/pause.png';
  }
  clickHandler = () => {
    this.setState({play: !this.state.play});
  }
  render(){
    if (this.state.play){
      return(
        <img className = 'playPauseButton' src={ this.playSrc } onClick={ this.clickHandler }/>
      )
    }
    return(
      <img className = 'playPauseButton' src={ this.pauseSrc } onClick={ this.clickHandler } />
    )
  }
}
