import React from 'react';
import Toggle from 'material-ui/Toggle';
import Slider from 'material-ui/Slider';

const styles = {
  block: {
    maxWidth: 250,
    width: '100%',
    marginTop: '5%',
    paddingLeft: '7%',
    fontSize: '20px',
    fontFamily: 'sans-serif'
  },
  toggle: {
    marginBottom: 16
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
class Equilizer extends React.Component {
  constructor(){
    super();
    this.state = {
      on: false
    }
  }

  slideHandlerLow = (_, val) => {
    changeGain(val, 'lowGain');
  }

  slideHandlerMid = (_, val) => {
    changeGain(val, 'midGain');
  }

  slideHandlerHigh = (_, val) => {
    changeGain(val, 'highGain');
  }

  toggleEq = () => {
    const bool = !this.state.on;
    if (bool)
      connectEqualizer();
    else
      disconnectEqualizer();
    this.props.snackChange(bool);
    this.setState({on: bool});
  }

  render(){
    return(
      <div>
        <Toggle
          label={`${this.state.on ? 'Disable' : 'Enable'} the Equalizer`}
          style={styles.block}
          thumbStyle={styles.thumbOff}
          trackStyle={styles.trackOff}
          thumbSwitchedStyle={styles.thumbSwitched}
          trackSwitchedStyle={styles.trackSwitched}
          labelStyle={styles.labelStyle}
          defaultToggled={this.state.on}
          onToggle={this.toggleEq}
        />
        <div className="eqSliders">
          <Slider
            onChange={this.slideHandlerLow}
            disabled={!this.state.on}
            style={{height: 200}}
            axis="y"
            defaultValue={0}
            min={-100}
            max={100}
            step={1}
          />
          <Slider
            onChange={this.slideHandlerMid}
            disabled={!this.state.on}
            style={{height: 200}}
            axis="y"
            defaultValue={0}
            min={-100}
            max={100}
            step={1}
          />
          <Slider
            onChange={this.slideHandlerHigh}
            disabled={!this.state.on}
            style={{height: 200}}
            axis="y"
            defaultValue={0}
            min={-100}
            max={100}
            step={1}
          />
        </div>
      </div>
    )
  }
}
