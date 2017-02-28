import React from 'react';

export default
class Audio extends React.Component {
  constructor(){
    super();
    this.state = {
      url: null,
    }
    this.updateTrackTime;
  }
  componentWillReceiveProps(nextProps){
    this.setState({url: nextProps.file[nextProps.nowPlaying].path});
  }
  componentDidUpdate(){
    clearInterval(this.updateTrackTime);
    const track = document.getElementById("track");
    this.updateTrackTime = setInterval(()=>{
      this.props.trackTimePassFunc(track.duration, track.currentTime);
    },500);
    track.load();
    track.play();
  }
  shouldComponentUpdate(nextProps, nextState){
    if (this.state.url === nextProps.file[nextProps.nowPlaying].path)
      return false;
    return true;
  }
  render(){
    return(
      <div>
        <audio id="track">
          <source src={this.state.url}></source>
        </audio>
      </div>
    )
  }
}
