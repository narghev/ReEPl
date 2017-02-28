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
    this.state = {files: null,
      playing: false,
      duration: 0,
      currentTime: 0
    };
  }
  render(){
    return(
      <div className="screen">
        <DropOnMe filePassFunc={(file)=>{
          this.setState({files: file, playing: true});
        }}/>
      <Audio file={ this.state.files } trackTimePassFunc={(duration, currentTime)=>{
            this.setState({duration: duration, currentTime: currentTime});
          }}/>
        <TrackTime duration={ this.state.duration } currentTime={ this.state.currentTime }/>
        <div className='buttons'>
          <PrevButton />
          <PlayPauseButton playing={ this.state.playing } playingPassFunc={(playing)=>{
              this.setState({playing: playing});
            }}/>
          <NextButton />
        </div>
        <VolumeControl />
      </div>
    )
  }
}
