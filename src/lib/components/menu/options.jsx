import React from 'react';

export default
class Options extends React.Component {
  render(){
    return(
      <div className='options'>
        <div className="optionsTopButtons">
          <div>
            <span>Change the background animation</span>
            <img src="images/animationChange.svg" onClick={ this.props.changeAnimation } />
          </div>
          <div>
            <span>Clear the playlist</span>
            <img src="images/delete.svg" onClick={ this.props.clearPlaylistClickHandler }/>
          </div>
        </div>
      </div>
    )
  }
}
import IconButton from 'material-ui/IconButton';
