import React from 'react';
import IconButton from 'material-ui/IconButton';
import BugReport from 'material-ui/svg-icons/action/bug-report';
import Code from 'material-ui/svg-icons/action/code';
import { goToCodeLink } from '../../../scripts/links.js';

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
        <div className="footer">
          <div onClick={ goToCodeLink }>
            <IconButton tooltip="View source code" tooltipPosition="top-right">
              <Code color="#FFFDE7"/>
            </IconButton>
          </div>
        </div>
      </div>
    )
  }
}
