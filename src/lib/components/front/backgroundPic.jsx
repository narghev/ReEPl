import React from 'react';

export default
class BackGroundPic extends React.Component {
  constructor(){
    super();
    this.state = {
      imgSrc: 'images/wallpaper.png',
      filterDeg: 0
    }
    this.filter = setInterval(()=>{
      let filterNow = this.state.filterDeg;
      this.props.passFilterDig(filterNow+getAverageFrequency());
      this.setState({filterDeg: filterNow+getAverageFrequency()});
   },50);
  }
  render(){
    clearInterval(this.filter);
    if (this.props.playing) {
      this.filter = setInterval(()=>{
        let filterNow = (this.state.filterDeg%360);
        this.props.passFilterDig(filterNow+getAverageFrequency());
        this.setState({filterDeg: filterNow+getAverageFrequency()});
     },50);
    }
    return(
      <div className='backgroundPic'>
        <img style={{filter: `hue-rotate(${this.state.filterDeg}deg)`}} src={ this.state.imgSrc } />
      </div>
    )
  }
}
