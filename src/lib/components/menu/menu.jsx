import React from 'react';
import Playlist from '../playlist/playlist.jsx';
import Options from './options.jsx';
import Equilizer from './equilizer.jsx';
import {Tabs, Tab} from 'material-ui/Tabs';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
    tabs: {
        backgroundColor: '#071112'
    },
    inkBar: {
        backgroundColor: '#F8BD42'
    }
})

export default
class Menu extends React.Component {
  constructor(){
    super();
    this.state = {show: false};
  }
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
         <MuiThemeProvider muiTheme={muiTheme}>
           <Tabs className="tabs" initialSelectedIndex = { 0 } >
             <Tab label = "Playlist">
               <Playlist
                 playlist={ this.props.playlist }
                 clickHandler={ this.props.clickHandler }
                 deleteClickHandler={ this.props.deleteClickHandler }
               />
             </Tab>
             <Tab label = "Options">
               <Options
                 clearPlaylistClickHandler= { this.props.clearPlaylistClickHandler }
                 changeAnimation= { this.props.changeAnimation }
                 shuffle = { this.props.shuffle }
                 replay = { this.props.replay }
                 toggleShuffle = { this.props.toggleShuffle }
                 toggleReplay = { this.props.toggleReplay }
               />
             </Tab>
           </Tabs>
         </MuiThemeProvider>
       </div>
     )
  }
}
