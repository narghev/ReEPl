import React from 'react';
import IconButton from 'material-ui/IconButton';
import Code from 'material-ui/svg-icons/action/code';
import Toggle from 'material-ui/Toggle';
import { goToCodeLink } from '../../../scripts/links.js';

const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: 'rgba(248, 192, 66, 1)',
  },
  trackOff: {
    backgroundColor: '#FFFDE7',
  },
  thumbSwitched: {
    backgroundColor: '#FFEE58',
  },
  trackSwitched: {
    backgroundColor: '#f8c042',
  },
  labelStyle: {
    color: '#FFFDE7',
  },
};

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
        <div className="playerOptions">
          <div className="shuffle">
            <Toggle
              label="Shuffle"
              thumbStyle={styles.thumbOff}
              trackStyle={styles.trackOff}
              thumbSwitchedStyle={styles.thumbSwitched}
              trackSwitchedStyle={styles.trackSwitched}
              labelStyle={styles.labelStyle}
              defaultToggled={this.props.shuffle}
            />
          </div>
          <div className="replay">
            <Toggle
              label="Replay"
              thumbStyle={styles.thumbOff}
              trackStyle={styles.trackOff}
              thumbSwitchedStyle={styles.thumbSwitched}
              trackSwitchedStyle={styles.trackSwitched}
              labelStyle={styles.labelStyle}
              defaultToggled={this.props.replay}
            />
          </div>
        </div>
        <div className="footer">
          <div onClick={ goToCodeLink }>
            <IconButton tooltip="View source code" tooltipPosition="top-left">
              <Code color="#FFFDE7"/>
            </IconButton>
          </div>
        </div>
      </div>
    )
  }
}
