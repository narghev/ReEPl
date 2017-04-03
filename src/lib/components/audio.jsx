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
    if (nextProps.shoulUpdate)
      this.setState({url: nextProps.src});
  }
  componentDidUpdate(){
    this.props.updated();
    clearInterval(this.updateTrackTime);
    const track = document.getElementById("track");
    this.updateTrackTime = setInterval(()=>{
      this.props.trackTimePassFunc(track.duration, track.currentTime);
    },500);
    if (document.getElementById('track').children[0].attributes[0].value != ""){
      try {
        track.load();
        track.play();
      } catch(e) {
        console.log(e);
      }
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.shoulUpdate;
  }
  componentDidMount(){
    initAnalyser();
    initEqualizer();
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
