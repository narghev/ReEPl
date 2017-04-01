import React from 'react';
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
    if (this.props.show){
       return (
         <div className="menu" style={{left: '0vw', transition: 'left 0.5s'}}>
           <MuiThemeProvider muiTheme={muiTheme}>
             <Tabs className="tabs" initialSelectedIndex = { 0 } >
               <Tab label = "Playlist" />
               <Tab label = "Options" />
             </Tabs>
           </MuiThemeProvider>
         </div>
       )
    }
    return (
      <div className="menu" style={{left: '-100vw', transition: 'left 0.5s'}}>
      </div>
    )
  }
}
