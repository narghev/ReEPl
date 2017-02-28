import React from 'react';

export default
class TrackCurrentTime extends React.Component {
  render(){
    return(
      <p style={{marginLeft: `${(this.props.currentTime/this.props.duration)*100}%`}}>
        {`${Math.floor(this.props.currentTime/60)}
        :
        ${Math.floor(this.props.currentTime - Math.floor(this.props.currentTime/60)*60)}`}
      </p>
    )
  }
}
