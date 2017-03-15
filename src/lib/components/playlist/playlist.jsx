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
         <div className="playlistScreen" style={{left: '0vw', transition: 'left 0.5s'}}>
           <div className="playlistHeader">
             <img src="images/animationChange.png" onClick={ this.props.changeAnimation } />
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
      <div className="playlistScreen" style={{left: '-100vw', transition: 'left 0.5s'}}>
        <div className="playlistHeader">
          <p className="playlistText">Playlist</p>
          <img src="images/animationChange.png" onClick={ this.props.changeAnimation } />
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
}
