import React from 'react';
import Toggle from 'material-ui/Toggle';
import Slider from 'material-ui/Slider';
import FlatButton from 'material-ui/FlatButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  block: {
    maxWidth: '300px',
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
      genres: false,
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

  handleTouchTap = (event) => {
    event.preventDefault();
    this.setState({
      genres: true,
      anchorEl: event.currentTarget
    });
  };

  save = () => {
    saveEQ([
      this.state.low,
      this.state.lowMid,
      this.state.mid,
      this.state.highMid,
      this.state.high
    ]);
  }

  componentWillMount(){
    getEq().then((presets)=>{
      this.setState({
        low: presets.low,
        lowMid: presets.lowMid,
        mid: presets.mid,
        highMid: presets.highMid,
        high: presets.high
      });
      changeGain(presets.low, 'lowGain');
      changeGain(presets.lowMid, 'lowMidGain');
      changeGain(presets.mid, 'midGain');
      changeGain(presets.highMid, 'highMidGain');
      changeGain(presets.high, 'highGain');
    });
  }

  render(){
    return(
      <div>
        <Toggle
          label={`${this.state.on ? 'Deactivate ' : 'Activate'} the Equalizer`}
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
          <div>
            <FlatButton
              disabled={!this.state.on}
              hoverColor="#D50000"
              label="Genres"
              onClick={ this.handleTouchTap }
              labelStyle={{
                textTransform: 'none',
                color: '#FFFDE7',
                textSize: '15px'
              }}
            />
            <Popover
              open={this.state.genres}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{"horizontal":"left","vertical":"bottom"}}
              targetOrigin={{"horizontal":"left","vertical":"bottom"}}
              onRequestClose={()=>{
                this.setState({genres: false});
              }}
              animation={PopoverAnimationVertical}
            >
              <Menu>
                <MenuItem primaryText="Bass Booster" onClick={()=>{
                  bassBooster(this);
                }}/>
                <MenuItem primaryText="Classical" onClick={()=>{
                  classical(this);
                }}/>
                <MenuItem primaryText="Loud" onClick={()=>{
                  loud(this);
                }}/>
                <MenuItem primaryText="Jazz" onClick={()=>{
                  jazz(this);
                }}/>
                <MenuItem primaryText="Pop" onClick={()=>{
                  pop(this);
                }}/>
                <MenuItem primaryText="Rock" onClick={()=>{
                  rock(this);
                }}/>
                <MenuItem primaryText="Flat" onClick={()=>{
                  flat(this);
                }}/>
              </Menu>
            </Popover>
          </div>
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
