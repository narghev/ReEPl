import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';

import '../styles/frontComps.css';
import '../styles/navButtons.css';
import '../styles/playPauseButton.css';
import '../styles/volumeControl.css';
import '../styles/trackTime.css';
import '../styles/screen.css';
import '../styles/dragOnMe.css';
import '../styles/trackName.css';

import FrontComps from './components/frontComps.jsx';

class App extends React.Component {
   render() {
      return (
        <Router history={ hashHistory }>
          <Route path='/' component = { FrontComps }></Route>
        </Router>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('app'));
