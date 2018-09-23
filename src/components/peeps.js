import React from 'react';
import Peep from './peep';
import '../css/peep.css'

class Peeps extends React.Component {
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
            return <Peep key={peep.id} peep={peep} />
          })}
      </div>
    )
  }
}

export default Peeps;
