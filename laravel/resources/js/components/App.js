import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

import Button from '@material-ui/core/Button';
import Test from './Test';

export default class App extends Component {
  render() {
    return (
      <>
        <Dashboard />
        {/* <Button variant="contained" color="primary">Hello World</Button> */}
        {/* <Test greet="привет" /> */}
      </>
    );
  }
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
