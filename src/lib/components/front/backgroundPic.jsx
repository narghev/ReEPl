import React from 'react';

export default
class BackGroundPic extends React.Component {
  constructor(){
    super();
    this.state = {
      imgSrc: 'images/wallpaper.png'
    }
  }
  render(){
    return(
      <div className='backgroundPic'>
        <img src={ this.state.imgSrc } />
      </div>
    )
  }
}
