import React from 'react';
import PlayPauseButton from './front/playPauseButton.jsx';
import PrevButton from './front/prevButton.jsx';
import NextButton from './front/nextButton.jsx';

export default
class FrontComps extends React.Component {
  render(){
    return(
      <div>
        <div className='buttons'>
          <PrevButton />
          <PlayPauseButton />
          <NextButton />
        </div>
      </div>
    )
  }
}
