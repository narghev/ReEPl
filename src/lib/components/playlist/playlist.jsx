import React from 'react';
import { PlaylistContent } from './playlistContent.jsx';
import { ClearPlaylist } from './clearPlaylist.jsx';

export default
class Playlist extends React.Component {
  constructor(){
    super();
    this.state = {show: false};
  }
  render(){
    if (this.props.show){
       return (
         <div className="playlistScreen">
           <div className="playlistHeader">
             <p className="playlistText">Playlist</p>
             <ClearPlaylist styleImg={{width: '4vw', height: '5vh'}} clickHandler={ this.props.clearPlaylistClickHandler } />
           </div>
           <PlaylistContent playlist={ this.props.playlist } clickHandler= { (i, bool)=>{
              this.props.clickHandler(i, bool);
             }}
             deleteClickHandler= {
               (i)=>{
                  this.props.deleteClickHandler(i);
             }}
             stylesP= {
               {fontSize: '2.5vw'}
             }
             styleImg= {
               {width: '2.5vw',height: '3vh'}
             }
             />
         </div>
       )
    }
    return (
      <div className="playlistScreen" style={{width: "0vw", opacity: 1}}>
        <div className="playlistHeader">
          <p className="playlistText" style={{fontSize: '0vw'}}>Playlist</p>
          <ClearPlaylist styleImg={{width: '0vw', height: '0vh', transitionDelay: '0s', opacity: 0}} clickHandler={ this.props.clearPlaylistClickHandler } />
        </div>
        <PlaylistContent playlist={ this.props.playlist } clickHandler= { (i, bool)=>{
           this.props.clickHandler(i, bool);
          }}
          deleteClickHandler= {
            (i)=>{
               this.props.deleteClickHandler(i);
          }}
          stylesP= {
            {fontSize: '0vw'}
          }
          styleImg= {
            {width: '0vw',height: '0vh'}
          }
          />
      </div>
    )
  }
}
