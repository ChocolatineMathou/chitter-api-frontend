import React from 'react';
import '../css/signup.css'

class Signup extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('https://chitter-backend-api.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          handle: data.get('handle'),
          password: data.get('password')
        }
      }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='handle' className='signup' placeholder='username' /> <br />
        <input type='password' name='password' className='signup' placeholder='password' /> <br />
        <button>Sign up</button>
      </form>
    )
  };
}

export default Signup;
