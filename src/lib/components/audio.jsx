import React from 'react';

export default
class Audio extends React.Component {
  constructor(){
    super();
    this.state = {
      url: "",
    }
    this.updateTrackTime;
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.file.length != 0 && nextProps.file[nextProps.nowPlaying] != undefined)
      this.setState({url: nextProps.file[nextProps.nowPlaying].path});
  }
  componentDidUpdate(){
    clearInterval(this.updateTrackTime);
    const track = document.getElementById("track");
    this.updateTrackTime = setInterval(()=>{
      this.props.trackTimePassFunc(track.duration, track.currentTime);
    },500);
    if (document.getElementById('track').children[0].attributes[0].value != ""){
      track.load();
      track.play();
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    if (nextProps.file.length != 0 && nextProps.file[nextProps.nowPlaying] != undefined && this.state.url === nextProps.file[nextProps.nowPlaying].path)
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
