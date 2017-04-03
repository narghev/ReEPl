import React from 'react';
import IconButton from 'material-ui/IconButton';
import Code from 'material-ui/svg-icons/action/code';
import Toggle from 'material-ui/Toggle';
import { goToCodeLink } from '../../../scripts/links.js';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

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
  constructor(){
    super();
    this.state = {
      shuffleBarShow: false,
      replayBarShow: false
    }
  }

  toggleReplay = () => {
      const replayBool = this.state.replayBarShow;
      this.setState({replayBarShow: !replayBool});
      this.props.toggleReplay();
  }

  toggleShuffle = () => {
      const shuffleBool = this.state.shuffleBarShow;
      this.setState({shuffleBarShow: !shuffleBool});
      this.props.toggleShuffle();
  }

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
              onToggle={this.toggleShuffle}
              style={{width: 'auto'}}
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
              onToggle={this.toggleReplay}
              style={{width: 'auto'}}
            />
          </div>
        </div>
        <div>
          <RaisedButton
            backgroundColor="#f8c042"
            label="Equalizer"
            onClick={ this.props.openEq }
            style={{
              marginLeft: '7%',
              marginTop: '3%'
            }}
            labelStyle={{
              textTransform: 'none'
            }}
          />
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
