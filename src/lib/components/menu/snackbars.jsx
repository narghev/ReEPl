import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export default
class Snackbars extends React.Component {
  render(){
    return(
      <div>
        <Snackbar
          open={this.props.eq}
          message={`Equalizer ${this.props.eqBool ? 'Active' : 'Deactive'}`}
          autoHideDuration={3000}
          onRequestClose={this.props.closeEq}
          contentStyle={{color: '#FFFDE7'}}
        />
        <Snackbar
          open={this.props.shuffle}
          message={`Shuffle Toggled ${this.props.shuffleBool ? 'On' : 'Off'}`}
          autoHideDuration={3000}
          onRequestClose={this.props.closeShuffle}
          contentStyle={{color: '#FFFDE7'}}
        />
        <Snackbar
          open={this.props.replay}
          message={`Replay Toggled ${this.props.replayBool ? 'On' : 'Off'}`}
          autoHideDuration={3000}
          onRequestClose={this.props.closeReplay}
          contentStyle={{color: '#FFFDE7'}}
        />
      </div>
    )
  }
}
