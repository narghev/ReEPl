import React from 'react';
import Toggle from 'material-ui/Toggle';
import Slider from 'material-ui/Slider';
import FlatButton from 'material-ui/FlatButton';

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
      on: false,
      low: 0,
      lowMid: 0,
      mid: 0,
      highMid: 0,
      high: 0
    }
  }

  slideHandlerLow = (_, val) => {
    changeGain(val, 'lowGain');
    this.setState({low: val});
  }

  slideHandlerLowMid = (_, val) => {
    changeGain(val, 'lowMidGain');
    this.setState({lowMid: val});
  }

  slideHandlerMid = (_, val) => {
    changeGain(val, 'midGain');
    this.setState({mid: val});
  }

  slideHandlerHighMid = (_, val) => {
    changeGain(val, 'highMidGain');
    this.setState({highMid: val});
  }

  slideHandlerHigh = (_, val) => {
    changeGain(val, 'highGain');
    this.setState({high: val});
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

  toDefault = () => {
    this.setState({
      low: 0,
      lowMid: 0,
      mid: 0,
      highMid: 0,
      high: 0
    });
    changeGain(0, 'lowGain');
    changeGain(0, 'lowMidGain');
    changeGain(0, 'midGain');
    changeGain(0, 'highMidGain');
    changeGain(0, 'highGain');
  }

  save = () => {
    saveEQ([
      this.state.low,
      this.state.mid,
      this.state.high
    ]);
  }

  componentWillMount(){
    getEq().then((presets)=>{
      this.setState({
        low: presets.low,
        mid: presets.mid,
        high: presets.high
      });
      changeGain(presets.low, 'lowGain');
      changeGain(presets.mid, 'midGain');
      changeGain(presets.high, 'highGain');
    });
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
            defaultValue={this.state.low}
            value={this.state.low}
            min={-100}
            max={100}
            step={1}
          />
          <Slider
            onChange={this.slideHandlerLowMid}
            disabled={!this.state.on}
            style={{height: 200}}
            axis="y"
            defaultValue={this.state.lowMid}
            value={this.state.lowMid}
            min={-100}
            max={100}
            step={1}
          />
          <Slider
            onChange={this.slideHandlerMid}
            disabled={!this.state.on}
            style={{height: 200}}
            axis="y"
            defaultValue={this.state.mid}
            value={this.state.mid}
            min={-100}
            max={100}
            step={1}
          />
          <Slider
            onChange={this.slideHandlerHighMid}
            disabled={!this.state.on}
            style={{height: 200}}
            axis="y"
            defaultValue={this.state.highMid}
            value={this.state.highMid}
            min={-100}
            max={100}
            step={1}
          />
          <Slider
            onChange={this.slideHandlerHigh}
            disabled={!this.state.on}
            style={{height: 200}}
            axis="y"
            defaultValue={this.state.high}
            value={this.state.high}
            min={-100}
            max={100}
            step={1}
          />
        </div>
        <div className="eqButtons">
          <FlatButton
            disabled={!this.state.on}
            hoverColor="#D50000"
            label="Default"
            onClick={ this.toDefault }
            labelStyle={{
              textTransform: 'none',
              color: '#FFFDE7',
              textSize: '15px'
            }}
          />
          <FlatButton
            disabled={!this.state.on}
            hoverColor="#f8c042"
            label="Save Presets"
            onClick={ this.save }
            labelStyle={{
              textTransform: 'none',
              color: '#FFFDE7',
              textSize: '15px'
            }}
          />
        </div>
      </div>
    )
  }
}
