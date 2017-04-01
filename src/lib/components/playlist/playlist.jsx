import React from 'react';
import { PlaylistContent } from './playlistContent.jsx';
import { ClearPlaylist } from './clearPlaylist.jsx';

export default
class Playlist extends React.Component {
  render(){
       return (
         <PlaylistContent playlist={ this.props.playlist } clickHandler= { (i, bool)=>{
            this.props.clickHandler(i, bool);
           }}
           deleteClickHandler= {
             (i)=>{
                this.props.deleteClickHandler(i);
           }}
           />
       )
     }
}
