import React from 'react';

export default
class TrackDuration extends React.Component {
  render(){
    if (Number(this.props.duration) != 0){
      return(
        <p>{`${Math.floor(this.props.duration/60)}
        :
        ${Math.floor(this.props.duration - Math.floor(this.props.duration/60)*60)}`}</p>
      );
    }
    return (<p></p>);
  }
}
