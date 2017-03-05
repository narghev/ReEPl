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
             <ClearPlaylist clickHandler={ this.props.clearPlaylistClickHandler } />
           </div>
           <PlaylistContent playlist={ this.props.playlist } clickHandler= { (i, bool)=>{
              this.props.clickHandler(i, bool);
             }}
             deleteClickHandler= {
               (i)=>{
                  this.props.deleteClickHandler(i);
             }}/>
         </div>
       )
    }
    return (
      <div className="playlistHide">

      </div>
    )
  }
}
