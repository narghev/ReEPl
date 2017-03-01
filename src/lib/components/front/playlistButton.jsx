import React from 'react';

export default
class PlaylistButton extends React.Component {
  render(){
    return(
      <div className="playlistButton">
        <img src="images/playlist.png" onClick={ this.props.clickHandler }/>
      </div>
    )
  }
}
