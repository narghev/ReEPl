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
import Menu from './menu/menu.jsx';
import BackGroundCircle from './front/backgroundCircle.jsx';
import BackGroundEqualizer from './front/backgroundEqualizer.jsx';
import { BackGroundWaves } from './front/backgroundWaves.jsx';

export default
class FrontComps extends React.Component {
  constructor(){
    super();
    window.animationNumber = 0;
    let files = [];
    this.state = {
      loadStatus: 'loading',
      playlist: files,
      playing: !!files[0],
      duration: 0,
      currentTime: 0,
      trackName: files[0] ? files[0].name : "",
      nowPlaying: 0,
      showMenu: false,
      updateAudio: true,
      shuffle: false,
      replay: false,
      animationNumber: window.animationNumber
    };
    this.globalFilterDig = 0;
    this.nextPlayingNow = (num, length) => {
      return (num+length)%length;
    }
    this.shuffle = (length) => {
      return Math.floor(Math.random()*length);
    }
    this.animations = 4;
    const onededEventInterval = setTimeout(()=>{
      const track = document.getElementById('track');
      if (track === null){
        return;
      }
      clearInterval(onededEventInterval);
      track.onended = () => {
        if (this.state.replay){
          this.setState({updateAudio: true});
          return;
        }
        if (this.state.shuffle){
          let nextPlaying = this.shuffle(this.state.playlist.length);
          if (nextPlaying === this.state.nowPlaying)
            nextPlaying = this.shuffle(this.state.playlist.length);
          this.setState({nowPlaying: nextPlaying,
            trackName: this.state.playlist[nextPlaying].name,
            updateAudio: true
          });
          return;
        }
        this.setState({nowPlaying: this.nextPlayingNow(this.state.nowPlaying+1, this.state.playlist.length),
          trackName: this.state.playlist[this.nextPlayingNow(this.state.nowPlaying+1, this.state.playlist.length)].name,
          updateAudio: true
        });
      }
    },500);
  }
  componentWillMount(){
    getPlaylist().then((pl)=>{
      if (!checkPlaylist(pl) || pl.length === 0){
        this.setState({
          loadStatus: 'ready'
        });
        return;
      }
      let files = pl;
      setTimeout(()=>{
        this.setState({
          loadStatus: 'ready',
          playlist: files,
          playing: !!files[0],
          duration: 0,
          currentTime: 0,
          trackName: files[0] ? files[0].name : "",
          nowPlaying: 0,
          showMenu: false,
          updateAudio: true,
          shuffle: false,
          replay: false,
          animationNumber: window.animationNumber
        });
        this.setState({playing: true});
      }, 500);
      })
  }
  render(){
    if (this.state.loadStatus === 'loading'){
      return (
        <div>
          <img src="images/loading.gif" />
          <link rel="stylesheet" href="./styles/loadingScreen.css" />
        </div>
      )
    }
    return(
      <div className="screen">
        <DropOnMe filePassFunc={(playlist)=>{
          if (playlist.length != 0){
            let updateAudioBool = false;
            if (this.state.playlist.length === 0)
              updateAudioBool = true;
            let nextPlaylist = this.state.playlist;
            for (let i=0; i < playlist.length; i++)
              nextPlaylist.push(playlist[i]);
            saveFile(nextPlaylist);
            if (this.state.playlist.length === 0){
              this.setState({playlist: nextPlaylist,
                playing: true,
                trackName: this.state.playlist[this.state.nowPlaying].name,
                updateAudio: updateAudioBool});
            }
            else {
              this.setState({playlist: nextPlaylist,
                trackName: this.state.playlist[this.state.nowPlaying].name,
                updateAudio: updateAudioBool});
            }
          }
          }}/>
        <Audio shoulUpdate={ this.state.updateAudio } trackTimePassFunc={(duration, currentTime)=>{
              this.setState({duration: duration, currentTime: currentTime});
          }}
          src={ !!this.state.playlist[this.state.nowPlaying] ? this.state.playlist[this.state.nowPlaying].path : ""}
          updated={ ()=>{
            this.setState({updateAudio: false});
          }}
        />
        <Menu
          show={ this.state.showMenu }
          hideMenu={()=>{
            this.setState({showMenu: false});
          }}
          clickHandler={ (trackN, change)=>{
                  if (change){
                    this.setState({nowPlaying: trackN,
                      trackName: this.state.playlist[trackN].name,
                      playing: true,
                      updateAudio: true,
                      showMenu: false
                    });
                  }
                }
              }
          playlist={ this.state.playlist }
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
                showMenu: false,
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
            if (trackN === this.state.nowPlaying){
              let playlist = this.state.playlist;
              playlist.splice(trackN, 1);
              let nextPlaylist = playlist;
              saveFile(nextPlaylist);
              this.setState({playlist: nextPlaylist,
                trackName: nextPlaylist[this.state.nowPlaying].name,
                updateAudio: true});
            }
            else if (trackN > this.state.nowPlaying){
              let playlist = this.state.playlist;
              playlist.splice(trackN, 1);
              let nextPlaylist = playlist;
              saveFile(nextPlaylist);
              this.setState({playlist: nextPlaylist,
                updateAudio: false
              });
            }
            else if (trackN < this.state.nowPlaying){
              let playlist = this.state.playlist;
              playlist.splice(trackN, 1);
              let nextPlaylist = playlist;
              saveFile(nextPlaylist);
              let playing = this.state.nowPlaying-1;
              this.setState({playlist: nextPlaylist,
                nowPlaying: playing,
                updateAudio: false
              });
            }
            }}
            clearPlaylistClickHandler = {
              () => {
                saveFile([]);
                this.setState({
                  playlist: [],
                  playing: false,
                  duration: 0,
                  currentTime: 0,
                  trackName: "",
                  nowPlaying: 0,
                  showMenu: false,
                  updateAudio: true
                });
                try {
                  const track = document.getElementById('track');
                  track.pause();
                  track.src = "";
                  track.load();
                  track.removeAttribute('src');
                } catch(e){}
              }
            }
            changeAnimation = {
              ()=>{
                let nextAnimation = (this.state.animationNumber+1)%(this.animations);
                window.animationNumber = nextAnimation;
                this.setState({animationNumber: nextAnimation, showMenu: false});
              }
            }
            shuffle = { this.state.shuffle }
            replay = { this.state.replay }
            toggleShuffle = { ()=>{
              let shuffleBool = this.state.shuffle;
              this.setState({shuffle: !shuffleBool});
            }}
            toggleReplay = { ()=>{
              let replayBool = this.state.replay;
              this.setState({replay: !replayBool});
            }}
        />
        <div className="topButtons">
          <PlaylistButton clickHandler={()=>{
              const nextShowPlaylistVal = !this.state.showMenu;
              this.setState({showMenu: nextShowPlaylistVal});
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
        {
          (()=>{
            switch (this.state.animationNumber)
            {
              case 0:{
                return (
                  <BackGroundPic playing={ this.state.playing } passFilterDig={ (n)=>{
                      this.globalFilterDig = n;
                    }}/>
                )
                break;
              }
              case 1:{
                return (
                  <BackGroundCircle playing={ this.state.playing } passFilterDig={ (n)=>{
                      this.globalFilterDig = n;
                    }}/>
                )
                break;
              }
              case 2:{
                return (
                    <BackGroundEqualizer playing={ this.state.playing } />
                )
                break;
              }
              case 3:{
                return (
                    <BackGroundWaves playing={ this.state.playing } />
                )
                break;
              }
            }
          })()
        }
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
                    updateAudio: true,
                    playing: true
                  });
                }
              }
            }/>
          <PlayPauseButton filterDeg={ this.globalFilterDig } playing={ this.state.playing } playingPassFunc={(playing)=>{
              if (this.state.playlist.length != 0){
                this.setState({playing: playing});
              }
            }}/>
          <NextButton clickHandler= {
              () => {
                if (this.state.playlist.length){
                  if (this.state.shuffle){
                    let nextPlaying = this.shuffle(this.state.playlist.length);
                    if (nextPlaying === this.state.nowPlaying)
                      nextPlaying = this.shuffle(this.state.playlist.length);
                    this.setState({nowPlaying: nextPlaying,
                      trackName: this.state.playlist[nextPlaying].name,
                      updateAudio: true,
                      playing: true
                    });
                    return;
                  }
                  this.setState({nowPlaying: this.nextPlayingNow(this.state.nowPlaying+1, this.state.playlist.length),
                    trackName: this.state.playlist[this.nextPlayingNow(this.state.nowPlaying+1, this.state.playlist.length)].name,
                    updateAudio: true,
                    playing: true
                  });
                }
              }
            }/>
        </div>
        <VolumeControl filterDeg={
          (()=>{
            if (this.state.animationNumber === 2 || this.state.animationNumber === 3)
              return 0;
            return (this.globalFilterDig);
          })()
        }
        />
      {
        (()=>{
          if (this.state.animationNumber === 2 || this.state.animationNumber === 3){
            return (
              <style>
                {
                  `.volumeControl input[type=range]::-webkit-slider-thumb { background: rgb(187, 25, 25); }`
                }
              </style>
            )
          }
          return (
            <style></style>
          )
        })()
      }
      </div>
    )
  }
}
