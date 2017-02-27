import React from 'react';

export default
class TrackTime extends React.Component {
  constructor(props){
    super(props);
    this.progress = 75
  }
  render(){
    return(
      <div className="trackTime">
        <div id="trackTimeBg">
          <div id="trackTimeProgress" style={{width: `${this.progress}%`}}></div>
        </div>
      </div>
    )
  }
}
