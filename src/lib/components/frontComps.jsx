import React from 'react';
import PlayPauseButton from './front/playPauseButton.jsx';
import { PrevButton } from './front/prevButton.jsx';
import { NextButton } from './front/nextButton.jsx';
import VolumeControl from './front/volumeControl.jsx';
import TrackTime from './front/trackTime.jsx';
import Audio from './audio.jsx';
import { DropOnMe } from './front/dragDrop.jsx';
import { TrackName } from './front/trackName.jsx';
import { TrackDuration } from './front/trackDuration.jsx';
import { TrackCurrentTime } from './front/trackCurrentTime.jsx';
import BackGroundPic from './front/backgroundPic.jsx';
import { AddFiles } from './front/addFiles.jsx';
import { PlaylistButton } from './front/playlistButton.jsx';
import Playlist from './playlist/playlist.jsx';

export default
class FrontComps extends React.Component {
  constructor(){
    super();
    this.playlist = getPlaylist();
    this.state = {files: null,
      playing: !!this.playlist[0],
      duration: 0,
      currentTime: 0,
      trackName: this.playlist[0] ? this.playlist[0].name : "",
      nowPlaying: 0,
      showPlaylist: false
    };
    this.nowPlaying = 0;
    this.nextPlayingNow = (num, length) => {
      return (num+length)%length;
    }
    const onededEventInterval = setTimeout(()=>{
      const track = document.getElementById('track');
      if (track === null){
        return;
      }
      clearInterval(onededEventInterval);
      track.onended = () => {
        this.setState({nowPlaying: this.nextPlayingNow(this.state.nowPlaying+1, this.playlist.length),
          trackName: this.playlist[this.nextPlayingNow(this.state.nowPlaying+1, this.playlist.length)].name});
      }
    },500);
  }
  render(){
    return(
      <div className="screen">
        <DropOnMe filePassFunc={(playlist)=>{
          for (let i=0; i < playlist.length; i++)
            this.playlist.push(playlist[i]);
          saveFile(this.playlist);
          this.setState({files: playlist, playing: true, trackName: this.playlist[this.state.nowPlaying].name});
          }}/>
        {
            (()=>{
              if (this.playlist.length != 0){
                return (
                  <Audio file={ this.playlist } nowPlaying={ this.state.nowPlaying } trackTimePassFunc={(duration, currentTime)=>{
                      this.setState({duration: duration, currentTime: currentTime});
                    }}/>
                )
              }
              return (
                <div style={{display: 'none'}}>
                  <audio id="track" />
                </div>
              )
            })()
        }
        <Playlist playlist={ this.playlist } show={ this.state.showPlaylist } clickHandler={ (trackN, change)=>{
            if (change){
              this.setState({nowPlaying: trackN,
                trackName: this.playlist[trackN].name,
                playing: true});
            }
              }
            }
            deleteClickHandler={ (trackN)=>{
              if (this.playlist.length === 1){
                this.playlist = [];
                this.nowPlaying = 0;
                saveFile(this.playlist);
                this.setState({
                  files: null,
                  playing: false,
                  duration: 0,
                  currentTime: 0,
                  trackName: "",
                  nowPlaying: 0,
                  showPlaylist: false
                })
                return;
              }
              if (trackN === this.state.nowPlaying){
                this.setState({trackName: this.playlist[this.state.nowPlaying+1].name});
                this.playlist.splice(trackN, 1);
                saveFile(this.playlist);
                return;
              }
              else if (trackN < this.state.nowPlaying){
                this.playlist.splice(trackN, 1);
                saveFile(this.playlist);
                this.setState({trackName: this.playlist[this.state.nowPlaying-1].name});
                return;
              }
              this.playlist.splice(trackN, 1);
              saveFile(this.playlist);
              }}
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
                saveFile(this.playlist);
                this.setState({files: playlist, playing: true, trackName: this.playlist[this.state.nowPlaying].name});
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
                if (this.playlist.length != 0){
                  this.setState({nowPlaying: this.nextPlayingNow(this.state.nowPlaying-1, this.playlist.length),
                    trackName: this.playlist[this.nextPlayingNow(this.state.nowPlaying-1, this.playlist.length)].name});
                }
              }
            }/>
          <PlayPauseButton playing={ this.state.playing } playingPassFunc={(playing)=>{
              if (this.playlist.length != 0){
                this.setState({playing: playing});
              }
            }}/>
          <NextButton clickHandler= {
              () => {
                if (this.playlist.length){
                  this.setState({nowPlaying: this.nextPlayingNow(this.state.nowPlaying+1, this.playlist.length),
                    trackName: this.playlist[this.nextPlayingNow(this.state.nowPlaying+1, this.playlist.length)].name});
                }
              }
            }/>
        </div>
        <VolumeControl />
      </div>
    )
  }
}
