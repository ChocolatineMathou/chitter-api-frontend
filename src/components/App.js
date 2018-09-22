import React, { Component } from 'react';
import Peep from './peep';

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
    console.log(peeps);
    return (
      <div className="app">
          {peeps.map(function(peep) {
            return <Peep peep={peep} />
          })}
      </div>
    )
  }
}

export default App;
