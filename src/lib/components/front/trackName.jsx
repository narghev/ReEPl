import React from 'react';

export default
class TrackName extends React.Component {
  render(){
    return(
      <div className="trackName">
        <p>{this.props.name}</p>
      </div>
    )
  }
}
