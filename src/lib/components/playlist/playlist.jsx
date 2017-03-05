import React from 'react';
import { PlaylistContent } from './playlistContent.jsx';

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
           <p className="playlistText">Playlist</p>
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
