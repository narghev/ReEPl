import React from 'react';
import Playlist from '../playlist/playlist.jsx';
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
    console.log(this.props.playlist)
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
                 clearPlaylistClickHandler= { this.props.clearPlaylistClickHandler }
                 changeAnimation= { this.props.changeAnimation }
               />
             </Tab>
             <Tab label = "Options">
               <h1>o</h1>
             </Tab>
           </Tabs>
         </MuiThemeProvider>
       </div>
     )
  }
}
