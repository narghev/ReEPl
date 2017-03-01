import React from 'react';
import PlayPauseButton from './front/playPauseButton.jsx';
import PrevButton from './front/prevButton.jsx';
import NextButton from './front/nextButton.jsx';
import VolumeControl from './front/volumeControl.jsx';
import TrackTime from './front/trackTime.jsx';
import Audio from './audio.jsx';
import DropOnMe from './front/dragDrop.jsx';
import TrackName from './front/trackName.jsx';
import TrackDuration from './front/trackDuration.jsx';
import TrackCurrentTime from './front/trackCurrentTime.jsx';
import BackGroundPic from './front/backgroundPic.jsx';
import AddFiles from './front/addFiles.jsx';
import PlaylistButton from './front/playlistButton.jsx';
import Playlist from './playlist/playlist.jsx';

export default
class FrontComps extends React.Component {
  constructor(){
    super();
    this.state = {files: null,
      playing: false,
      duration: 0,
      currentTime: 0,
      trackName: "",
      nowPlaying: 0,
      showPlaylist: false
    };
    this.playlist = new Array();
    this.nowPlaying = 0;
    this.nextPlayingNow = (num, length) => {
      return (num+3)%length;
    }
    const onededEventInterval = setTimeout(()=>{
      const track = document.getElementById('track');
      if (track === null){
        return;
      }
      clearInterval(onededEventInterval);
      track.onended = () => {
        this.setState({nowPlaying: this.nextPlayingNow(this.state.nowPlaying, this.playlist.length)+1,
          trackName: this.state.files[this.nextPlayingNow(this.state.nowPlaying, this.playlist.length)+1].name});
      }
    },500);
  }
  render(){
    return(
      <div className="screen">
        <DropOnMe filePassFunc={(playlist)=>{
            for (let i=0; i < playlist.length; i++)
              this.playlist.push(playlist[i]);
            this.setState({nowPlaying: 0});
            this.setState({files: playlist, playing: true, trackName: playlist[this.state.nowPlaying].name});
          }}/>
        <Audio file={ this.state.files } nowPlaying={ this.state.nowPlaying } trackTimePassFunc={(duration, currentTime)=>{
            this.setState({duration: duration, currentTime: currentTime});
          }}/>
        <Playlist playlist={ this.playlist } show={ this.state.showPlaylist } clickHandler={ (trackN)=>{
          this.setState({nowPlaying: trackN,
            trackName: this.state.files[trackN].name});
          } }
            deleteClickHandler={ (trackN)=>{
                this.playlist.splice(trackN, 1);
              } }
        />
        <div className="topButtons">
          <PlaylistButton clickHandler={()=>{
              const nextShowPlaylistVal = !this.state.showPlaylist;
              this.setState({showPlaylist: nextShowPlaylistVal});
            }}/>
          <div className="addFilesDiv">
            <AddFiles filePassFunc={(playlist)=>{
                for (let i=0; i < playlist.length; i++)
                  this.playlist.push(playlist[i]);
                this.setState({nowPlaying: 0});
                this.setState({files: playlist, playing: true, trackName: playlist[this.state.nowPlaying].name});
              }}/>
          </div>
        </div>
        <BackGroundPic />
        <TrackName name={ this.state.trackName } />
        <div className="trackTimeInfo">
          <TrackCurrentTime
            duration={ this.state.duration === 0 ? 1 : this.state.duration }
            currentTime={ this.state.currentTime === 0 ? "" : (this.state.currentTime) }/>
          <TrackDuration duration={ this.state.duration } currentTime={ this.state.currentTime }/>
        </div>
        <TrackTime duration={ this.state.duration } currentTime={ this.state.currentTime }/>
        <div className='buttons'>
          <PrevButton clickHandler= {
              () => {
                this.setState({nowPlaying: this.nextPlayingNow(this.state.nowPlaying-1, this.playlist.length),
                  trackName: this.state.files[this.nextPlayingNow(this.state.nowPlaying-1, this.playlist.length)].name});
              }
            }/>
          <PlayPauseButton playing={ this.state.playing } playingPassFunc={(playing)=>{
              this.setState({playing: playing});
            }}/>
          <NextButton clickHandler= {
              () => {
                this.setState({nowPlaying: this.nextPlayingNow(this.state.nowPlaying+1, this.playlist.length),
                  trackName: this.state.files[this.nextPlayingNow(this.state.nowPlaying+1, this.playlist.length)].name});
              }
            }/>
        </div>
        <VolumeControl />
      </div>
    )
  }
}
