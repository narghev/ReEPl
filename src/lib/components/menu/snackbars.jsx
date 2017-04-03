import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export default
class Snackbars extends React.Component {
  render(){
    return(
      <div>
        <Snackbar
          open={this.props.eq}
          message={`Equalizer ${this.props.eqBool ? 'Enabled' : 'Disabled'}`}
          autoHideDuration={3000}
          onRequestClose={this.props.closeEq}
        />
      </div>
    )
  }
}
