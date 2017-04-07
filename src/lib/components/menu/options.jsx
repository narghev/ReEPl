import React from 'react';
import IconButton from 'material-ui/IconButton';
import Code from 'material-ui/svg-icons/action/code';
import Toggle from 'material-ui/Toggle';
import { goToCodeLink } from '../../../scripts/links.js';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

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
      replayBarShow: false,
      animationN: 0
    }
  }

  componentDidMount(){
    getAnimationNumber().then((num)=>{
      this.setState({animationN: num});
    });
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
            <DropDownMenu
              value={this.state.animationN}
              onChange={(_,__,n)=>{
                this.setState({
                  animationN: n
                });
                this.props.changeAnimation(n);
              }}
              autoWidth={true}
              animated={true}
              selectedMenuItemStyle={{
                backgroundColor: 'rgba(248, 192, 66, 0.3)',
                color: '#071112'
              }}
              labelStyle={{
                color: '#FFFDE7'
              }}
            >
              <MenuItem value={0} primaryText="Background Picture" />
              <MenuItem value={1} primaryText="Circle" />
              <MenuItem value={2} primaryText="Equalizer" />
              <MenuItem value={3} primaryText="Waves" />
            </DropDownMenu>
          </div>
          <div style={{
            width: '24%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}>
            <span onClick={ this.props.clearPlaylistClickHandler }>Clear the playlist</span>
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
