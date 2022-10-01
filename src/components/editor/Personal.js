import React, { Component } from "react";

export default class Personal extends Component {
  render() {
    return (
      <section>
        <div className="section-header">
          <h2>Personal Info</h2>
        </div>
        <input
          name="name"
          placeholder="Your Name"
          onChange={this.props.changePropertyInfo}
        />
        <input
          name="title"
          placeholder="Job Title"
          onChange={this.props.changePropertyInfo}
        />
        <input
          name="phone"
          placeholder="Phone Number"
          onChange={this.props.changePropertyInfo}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={this.props.changePropertyInfo}
        />
        <input
          name="location"
          placeholder="Location"
          onChange={this.props.changePropertyInfo}
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={this.props.changePropertyInfo}
        />
      </section>
    );
  }
}
