import React from 'react';

export default
class Playlist extends React.Component {
  constructor(){
    super();
    this.state = {show: false};
  }
  render(){
    if (this.props.show){
       return (<p>show</p>)
     }
    return (<p>dont show</p>)
  }
}
