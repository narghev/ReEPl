import React from 'react';

export default
class Audio extends React.Component {
  constructor(){
    super();
    this.state = {
      url: null,
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({url: nextProps.file[0].path});
  }
  componentDidUpdate(){
    document.getElementById("track").load();
    document.getElementById("track").play();
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
