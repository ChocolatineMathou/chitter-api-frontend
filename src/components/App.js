import React, { Component } from 'react';
import Peeps from './peeps';
import Signup from './signup'
import '../css/app.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <Signup />
        <Peeps />
      </div>
    )

  }

}

export default App;
