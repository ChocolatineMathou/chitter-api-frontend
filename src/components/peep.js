import React from 'react';

class Peep extends React.Component {
  render() {
    const body = this.props.peep.body
    const user = this.props.peep.user.handle
    const date = new Date(this.props.peep.created_at);
    const formattedDate = new Intl.DateTimeFormat('en-Gb', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    }).format(date)

    return (
      <div className="peep">
        <div className="peep-user"><p>{user}</p></div>
        <div className="body"><p>{body}</p></div>
        <div className="date"><p>{formattedDate}</p></div>
      </div>
    )
  }
}

export default Peep;
