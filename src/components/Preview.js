import React, { Component } from "react";

export default class Preview extends Component {
  render() {
    const data = this.props.userData;

    return (
      <div className="preview">
        <div className="preview-header">
          <h1 className="username">{data.name}</h1>
          <h4 className="title">{data.title}</h4>
          <div className="info">
            <i className="fa-solid fa-square-phone"></i>
            <span>{data.phone}</span>

            <i className="fa-solid fa-envelope"></i>
            <span>{data.email}</span>

            <i className="fa-solid fa-map-location-dot"></i>
            <span>{data.location}</span>
          </div>
        </div>

        <div className="description">
          <p>{data.description}</p>
        </div>

        <div className="preview-list">
          <p className="sub-title">Work Experience</p>
          <div className="list">
            {Object.entries(data.experience).map(([id, item]) => {
              return (
                <div key={id}>
                  <p className="title">{item.company}</p>
                  <p>
                    {item.position} | {item.startDate} - {item.endDate}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="preview-list">
          <p className="sub-title">Education</p>
          <div className="list">
            {Object.entries(data.education).map(([id, item]) => {
              return (
                <div key={id}>
                  <p>{item.course}</p>
                  <p>
                    {item.university} | {item.startDate} - {item.endDate}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
