import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export default class Education extends Component {
  changeListInfo = (e) => {
    const id = e.closest("div").id;
    this.props.changeListInfo(e, id, "education");
  };

  addListElement = () => {
    const id = uuidv4();
    this.props.addListElement(id, "education");
  };

  removeListElement = (e) => {
    const id = e.closest("div").id;
    this.props.removeListElement(id, "education");
  };

  render() {
    return (
      <div>
        <div>
          <h2>Education</h2>
          <button onClick={this.addListElement}>Add</button>
        </div>
        <div>
          {Object.entries(this.props.userEducation).map(([id, item], index) => {
            return (
              <div id={id} key={index}>
                <input
                  name="course"
                  placeholder="Course"
                  onChange={this.changeListInfo}
                  value={item.course}
                />
                <input
                  name="university"
                  placeholder="University"
                  onChange={this.changeListInfo}
                  value={item.university}
                />
                <input
                  name="startDate"
                  placeholder="Start Date"
                  onChange={this.changeListInfo}
                  value={item.startDate}
                />
                <input
                  name="endDate"
                  placeholder="End Date"
                  onChange={this.changeListInfo}
                  value={item.startDate}
                />

                <button onClick={this.removeListElement}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
