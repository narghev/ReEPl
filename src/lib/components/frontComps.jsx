import React from 'react';
import PlayPauseButton from './front/playPauseButton.jsx';
import PrevButton from './front/prevButton.jsx';
import NextButton from './front/nextButton.jsx';
import VolumeControl from './front/volumeControl.jsx';
import TrackTime from './front/trackTime.jsx';
import Audio from './audio.jsx';
import DropOnMe from './front/dragDrop.jsx';

export default
class FrontComps extends React.Component {
  constructor(){
    super();
    this.state = {files: null};
  }
  render(){
    return(
      <div className="screen">
        <DropOnMe filePassFunc={(file)=>{
          this.setState({files: file});
        }}/>
        <Audio file={ this.state.files }/>
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
