import React from 'react';

export default
class TrackDuration extends React.Component {
  render(){
    if (this.props.duration != 0){
      if ((this.props.currentTime/this.props.duration)*100 <= 90){
        return(
          <p>{`${Math.floor(this.props.duration/60)}:${Math.floor(this.props.duration - Math.floor(this.props.duration/60)*60)}`}</p>
        );
      }
      return(
        <p>
          {`${Math.floor(this.props.currentTime/60)}:${Math.floor(this.props.currentTime - Math.floor(this.props.currentTime/60)*60)}`}
        </p>
      )
    }
    return (<p></p>);
  }
}
