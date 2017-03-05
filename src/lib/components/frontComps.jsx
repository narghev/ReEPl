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
    const files = getPlaylist();
    this.state = {
      playlist: files,
      playing: !!files[0],
      duration: 0,
      currentTime: 0,
      trackName: files[0] ? files[0].name : "",
      nowPlaying: 0,
      showPlaylist: false,
      updateAudio: true
    };
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
        this.setState({nowPlaying: this.nextPlayingNow(this.state.nowPlaying+1, this.state.playlist.length),
          trackName: this.state.playlist[this.nextPlayingNow(this.state.nowPlaying+1, this.state.playlist.length)].name,
          updateAudio: true
        });
      }
    },500);
  }
  render(){
    return(
      <div className="screen">
        <DropOnMe filePassFunc={(playlist)=>{
          let updateAudioBool = false;
          if (this.state.playlist.length === 0)
            updateAudioBool = true;
          let nextPlaylist = this.state.playlist;
          for (let i=0; i < playlist.length; i++)
            nextPlaylist.push(playlist[i]);
          saveFile(nextPlaylist);
          this.setState({playlist: nextPlaylist,
            playing: true,
            trackName: this.state.playlist[this.state.nowPlaying].name,
            updateAudio: updateAudioBool});
          }}/>
        <Audio shoulUpdate={ this.state.updateAudio } trackTimePassFunc={(duration, currentTime)=>{
              this.setState({duration: duration, currentTime: currentTime});
          }}
          src={ !!this.state.playlist[this.state.nowPlaying] ? this.state.playlist[this.state.nowPlaying].path : ""}
          updated={ ()=>{
            this.setState({updateAudio: false});
          }}
        />
      <Playlist playlist={ this.state.playlist } show={ this.state.showPlaylist } clickHandler={ (trackN, change)=>{
                if (change){
                  this.setState({nowPlaying: trackN,
                    trackName: this.state.playlist[trackN].name,
                    playing: true,
                    updateAudio: true,
                    showPlaylist: false
                  });
                }
              }
            }
            deleteClickHandler={ (trackN)=>{
              if (this.state.playlist.length === 1){
                saveFile([]);
                this.setState({
                  playlist: [],
                  playing: false,
                  duration: 0,
                  currentTime: 0,
                  trackName: "",
                  nowPlaying: 0,
                  showPlaylist: false,
                  updateAudio: true
                });
                try {
                  const track = document.getElementById('track');
                  track.pause();
                  track.src = "";
                  track.load();
                  track.removeAttribute('src');
                } catch(e){}
                return;
              }
              /*
              if (trackN === this.state.nowPlaying){
                let nextPlaylist = this.state.playlist.splice(trackN, 1);
                saveFile(nextPlaylist);
                this.setState({playlist: nextPlaylist,
                  trackName: this.state.playlist[this.state.nowPlaying+1].name,
                  updateAudio: true});
                return;
              }
              else if (trackN > this.state.nowPlaying){
                let nextPlaylist = this.state.playlist.splice(trackN, 1);
                saveFile(nextPlaylist);
                this.setState({playlist: nextPlaylist,
                  trackName: this.state.playlist[this.state.nowPlaying-1].name,
                  updateAudio: false
                });
                return;
              }*/
              }}
        />
        <div className="topButtons">
          <PlaylistButton clickHandler={()=>{
              const nextShowPlaylistVal = !this.state.showPlaylist;
              this.setState({showPlaylist: nextShowPlaylistVal});
            }}/>
          <div className="addFilesDiv">
            <AddFiles filePassFunc={(playlist)=>{
              let updateAudioBool = false;
              if (this.state.playlist.length === 0)
                updateAudioBool = true;
              let nextPlaylist = this.state.playlist;
              for (let i=0; i < playlist.length; i++)
                nextPlaylist.push(playlist[i]);
              saveFile(nextPlaylist);
              this.setState({playlist: nextPlaylist,
                playing: true,
                trackName: this.state.playlist[this.state.nowPlaying].name,
                updateAudio: updateAudioBool});
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
                if (this.state.playlist.length != 0){
                  this.setState({nowPlaying: this.nextPlayingNow(this.state.nowPlaying-1, this.state.playlist.length),
                    trackName: this.state.playlist[this.nextPlayingNow(this.state.nowPlaying-1, this.state.playlist.length)].name,
                    updateAudio: true
                  });
                }
              }
            }/>
          <PlayPauseButton playing={ this.state.playing } playingPassFunc={(playing)=>{
              if (this.state.playlist.length != 0){
                this.setState({playing: playing});
              }
            }}/>
          <NextButton clickHandler= {
              () => {
                if (this.state.playlist.length){
                  this.setState({nowPlaying: this.nextPlayingNow(this.state.nowPlaying+1, this.state.playlist.length),
                    trackName: this.state.playlist[this.nextPlayingNow(this.state.nowPlaying+1, this.state.playlist.length)].name,
                    updateAudio: true
                  });
                }
              }
            }/>
        </div>
        <VolumeControl />
      </div>
    )
  }
}
