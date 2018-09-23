import React, { Component } from 'react';
import Peep from './peep';
import '../css/app.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peeps: [],
    }
  }

  componentDidMount() {

    fetch('https://chitter-backend-api.herokuapp.com/peeps')
    .then(response => response.json())
    .then(data => this.setState({ peeps: data }));
  }
  render() {
    const { peeps } = this.state;
    return (
      <div className="app">
          {peeps.map(function(peep) {
            return <li key={peep.id}><Peep peep={peep} /></li>
          })}
      </div>
    )
  }
}

export default App;
