import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export default class Experience extends Component {
  changeListInfo = (e) => {
    const id = e.target.closest("div").id;
    this.props.changeListInfo(e, id, "experience");
  };

  addListElement = () => {
    const id = uuidv4();
    this.props.addListElement(id, "experience");
  };

  removeListElement = (e) => {
    const id = e.target.closest("div").id;
    this.props.removeListElement(id, "experience");
  };

  render() {
    return (
      <div>
        <div>
          <h2>Work Experience</h2>
          <button onClick={this.addListElement}>Add</button>
        </div>
        <div>
          {Object.entries(this.props.userExperience).map(
            ([id, item], index) => {
              return (
                <div id={id} key={index}>
                  <input
                    name="company"
                    placeholder="Company"
                    onChange={this.changeListInfo}
                    value={item.course}
                  />
                  <input
                    name="position"
                    placeholder="Position"
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
            }
          )}
        </div>
      </div>
    );
  }
}
