import React from 'react';
import PlayPauseButton from './front/playPauseButton.jsx';
import PrevButton from './front/prevButton.jsx';
import NextButton from './front/nextButton.jsx';
import VolumeControl from './front/volumeControl.jsx';
import TrackTime from './front/trackTime.jsx';

export default
class FrontComps extends React.Component {
  render(){
    return(
      <div>
        <TrackTime />
        <div className='buttons'>
          <PrevButton />
          <PlayPauseButton />
          <NextButton />
        </div>
        <VolumeControl />
      </div>
    )
  }
}
