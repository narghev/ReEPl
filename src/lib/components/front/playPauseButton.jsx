import React from 'react';
import PlayButton from 'material-ui/svg-icons/av/play-circle-outline';
import PauseButton from 'material-ui/svg-icons/av/pause-circle-outline';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default
class PlayPauseButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playing: props.playing
    }
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
    console.log(this.state.playing)
    if (window.animationNumber === 2 || window.animationNumber == 3){
      if (this.state.playing){
        return(
          <div onClick={ this.clickHandler } className="playPauseButton">
            <MuiThemeProvider>
              <PauseButton color="#FFFDE7" style={{ width: "50px", height: "50px" }} />
            </MuiThemeProvider>
          </div>
        )
      }
      return(
        <div onClick={ this.clickHandler } className="playPauseButton">
          <MuiThemeProvider>
            <PlayButton color="#FFFDE7" style={{ width: "50px", height: "50px" }} />
          </MuiThemeProvider>
        </div>
      )
    }
    if (this.state.playing){
      return(
        <div onClick={ this.clickHandler } className="playPauseButton">
          <MuiThemeProvider>
            <PauseButton color="#FFFDE7" style={{ width: "50px", height: "50px" }} />
          </MuiThemeProvider>
        </div>
      )
    }
    return(
      <div onClick={ this.clickHandler } className="playPauseButton">
        <MuiThemeProvider>
          <PlayButton color="#FFFDE7" style={{ width: "50px", height: "50px" }} />
        </MuiThemeProvider>
      </div>
    )
  }
}
