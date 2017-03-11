import React from 'react';

export default
class BackGroundCircle extends React.Component {
  constructor(){
    super();
    this.state = {
      radius: 0,
      filterDeg: 0
    }
    this.animation = setInterval(()=>{
      let filterNow = this.state.filterDeg;
      let radiusNow = this.state.radius;
      let frequencyNow = getAverageFrequency();
      this.props.passFilterDig(filterNow+frequencyNow/3);
      this.setState({filterDeg: filterNow+frequencyNow/3, radius: frequencyNow});
   },50);
  }
  render(){
    clearInterval(this.animation);
    if (this.props.playing) {
      this.animation = setInterval(()=>{
        let filterNow = this.state.filterDeg;
        let radiusNow = this.state.radius;
        let frequencyNow = getAverageFrequency();
        this.props.passFilterDig(filterNow+frequencyNow/3);
        this.setState({filterDeg: filterNow+frequencyNow/3, radius: frequencyNow});
     },50);
    }
    return(
      <div className='backgroundCircle'>
        <div style={{
            width: this.state.radius,
            height: this.state.radius,
            borderRadius: '50%',
            backgroundColor: 'rgb(15,15,15)',
            border: '1vw solid #FB9300',
            filter: `hue-rotate(${this.state.filterDeg}deg)`
          }}></div>
      </div>
    )
  }
}
