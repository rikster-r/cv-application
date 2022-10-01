import React, { Component } from 'react';

export default class Personal extends Component {
  render() {
    return (
      <div>
        <h2>Personal Info</h2>
        <input name="name" placeholder="John Doe" onChange={this.props.changePropertyInfo} />
        <input name="title" placeholder="John Doe" onChange={this.props.changePropertyInfo} />
        <input name="phone" placeholder="John Doe" onChange={this.props.changePropertyInfo} />
        <input name="email" placeholder="John Doe" onChange={this.props.changePropertyInfo} />
        <input name="location" placeholder="John Doe" onChange={this.props.changePropertyInfo} />
        <textarea name="description" onChange={this.props.changePropertyInfo} />
      </div>
    )
  }
}