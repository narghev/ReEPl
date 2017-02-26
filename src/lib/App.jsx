import React from 'react';
import ReactDOM from 'react-dom';
import Hl from './components/hl.jsx';

class App extends React.Component {
   render() {
      return (
        <Hl></Hl>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('app'));
