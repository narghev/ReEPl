import React from 'react';

export const BackGroundWaves = () => {
  setTimeout(()=>{
    let animation = setInterval(()=>{
      if (window.animationNumber != 3){
        clearInterval(animation);
        return;
      }
      let frequencyNow = getAverageFrequency();
      drawOnCanvas(frequencyNow);
    },50);
  },100);
  return(
    <div className='backgroundWaves'>
      <canvas id="backgroundWaves" width={ window.innerWidth } height="350px"></canvas>
    </div>
  )
}
