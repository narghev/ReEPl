import React from 'react';

export default
class BackGroundCircle extends React.Component {
  constructor(){
    super();
    this.state = {
      frequencies: []
    }
    this.animation = setInterval(()=>{
      if (window.animationNumber != 2){
        clearInterval(this.animation);
        return;
      }
      let frequencyArray = getFrequencyArray();
      this.setState({frequencies: frequencyArray});
   },50);
   this.content = [];
  }
  render(){
    this.content = [];
    for (let i = 10; i < this.state.frequencies.length; i+=10){
      this.content.push(
        <div key={i} className="bgEqualizer" style={{height: this.state.frequencies[i]}}></div>
      )
    }
    clearInterval(this.animation);
    if (this.props.playing) {
      this.animation = setInterval(()=>{
        if (window.animationNumber != 2){
          clearInterval(this.animation);
          return;
        }
        let frequencyArray = getFrequencyArray();
        this.setState({frequencies: frequencyArray});
     },50);
    }
    return(
      <div style={{display: "flex", flexDirection: "row", marginBottom: '10vh'}}>
        { this.content }
      </div>
    )
  }
}
