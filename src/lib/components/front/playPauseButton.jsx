import React from 'react';

export default
class PlayPauseButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playing: props.playing
    }
    this.playSrc = 'images/play.png';
    this.pauseSrc = 'images/pause.png';
    this.playSrcWhite = 'images/playWhite.png';
    this.pauseSrcWhite = 'images/pauseWhite.png';
  }
  componentWillReceiveProps(nextProps){
    this.setState({playing: nextProps.playing});
  }
  clickHandler = () => {
    if (this.state.playing){
      document.getElementById("track").pause();
    }
    else{
      document.getElementById("track").play();
    }
    this.props.playingPassFunc(!this.state.playing);
  }
  render(){
    if (window.animationNumber === 2 || window.animationNumber == 3){
      if (this.state.playing){
        return(
          <img className = 'playPauseButton' src={ this.pauseSrcWhite } onClick={ this.clickHandler }/>
        )
      }
      return(
        <img className = 'playPauseButton' src={ this.playSrcWhite } onClick={ this.clickHandler } />
      )
    }
    if (this.state.playing){
      return(
        <img style={{filter: `hue-rotate(${this.props.filterDeg}deg)`}} className = 'playPauseButton' src={ this.pauseSrc } onClick={ this.clickHandler }/>
      )
    }
    return(
      <img style={{filter: `hue-rotate(${this.props.filterDeg}deg)`}} className = 'playPauseButton' src={ this.playSrc } onClick={ this.clickHandler } />
    )
  }
}
