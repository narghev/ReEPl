import React from 'react';

export default
class TrackTime extends React.Component {
  constructor(props){
    super(props);
    this.progress = 0;
    this.duration = 0;
  }
  clickHandler = (event) => {
    try {
      const track = document.getElementById('track');
      track.currentTime = (this.duration)*(event.clientX/window.innerWidth);
    } catch(e){}
  }
  componentWillReceiveProps(nextProps){
    this.duration = nextProps.duration;
    this.progress = (nextProps.currentTime/nextProps.duration)*100;
  }
  render(){
    return(
      <div className="trackTime" onClick={ this.clickHandler }>
        <div id="trackTimeBg">
          <div id="trackTimeProgress" style={{width: `${this.progress}%`}}></div>
        </div>
      </div>
    )
  }
}
