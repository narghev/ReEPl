import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Playlist from '../playlist/playlist.jsx';
import Options from './options.jsx';
import Equalizer from './equalizer.jsx';
import Snackbars from './snackbars.jsx';
import {Tabs, Tab} from 'material-ui/Tabs';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default
class Menu extends React.Component {
  constructor(){
    super();
    this.state = {
      show: false,
      slideIndex: 0,
      eqSnackbar: false,
      shuffleSnackbar: false,
      replaySnackbar: false,
      savePresetsSnackbar: false
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      shuffle: nextProps.shuffle,
      replay: nextProps.replay
    });
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render(){
     return (
       <div className="menu" style={(()=>{
         if (this.props.show)
           return {left: '0vw', transition: 'left 0.5s'};
         return {left: '-100vw', transition: 'left 0.5s'};
       })()}>
           <div className="done" onClick={ this.props.hideMenu }>
             <img src="images/done.svg" />
           </div>
          <Tabs
           className="tabs"
           initialSelectedIndex = { 0 }
           onChange={this.handleChange}
           value={this.state.slideIndex}
           >
             <Tab label = "Playlist" value={0} />
             <Tab label = "Settings" value={1} />
             <Tab label = "Equalizer" value={2} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <div>
              <Playlist
                playlist={ this.props.playlist }
                clickHandler={ this.props.clickHandler }
                deleteClickHandler={ this.props.deleteClickHandler }
              />
            </div>
            <div>
              <Options
                clearPlaylistClickHandler= { this.props.clearPlaylistClickHandler }
                changeAnimation= {(n)=>{
                  this.props.changeAnimation(n);
                }}
                shuffle = { this.props.shuffle }
                replay = { this.props.replay }
                toggleShuffle = {()=>{
                  this.props.toggleShuffle();
                  this.setState({shuffleSnackbar: true});
                }}
                toggleReplay = {()=>{
                  this.props.toggleReplay();
                  this.setState({replaySnackbar: true});
                }}
                openEq = {()=>{
                  this.setState({slideIndex: 2});
                }}
              />
            </div>
            <div>
              <Equalizer
                snackChange={(state)=>{this.setState({eqSnackbar: true, eqBool: state})}}
                openSavePresetsSnackbar={()=>{this.setState({savePresetsSnackbar: true})}}
              />
            </div>
          </SwipeableViews>
          <Snackbars
            eq={this.state.eqSnackbar}
            eqBool={this.state.eqBool}
            closeEq={()=>{this.setState({eqSnackbar: false})}}
            shuffle={this.state.shuffleSnackbar}
            shuffleBool={this.state.shuffle}
            closeShuffle={()=>{this.setState({shuffleSnackbar: false})}}
            replay={this.state.replaySnackbar}
            replayBool={this.state.replay}
            closeReplay={()=>{this.setState({replaySnackbar: false})}}
            savePresets={this.state.savePresetsSnackbar}
            closeSavePresets={()=>{this.setState({savePresetsSnackbar: false})}}
          />
       </div>
     )
  }
}
