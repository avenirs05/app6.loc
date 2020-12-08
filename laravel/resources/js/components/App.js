import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Test from './Test';

export default class App extends Component {
  render() {
    return (
      <>
        <Test greet="привет" />
        <div>Root Example App Component</div>
      </>
    );
  }
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
