import React from "react";
import { v4 as uuidv4 } from "uuid";

const Experience = (props) => {
  const changeListInfo = (e) => {
    const id = e.target.closest("div").id;
    props.changeListInfo(e, id, "experience");
  };

  const addListElement = () => {
    const id = uuidv4();
    props.addListElement(id, "experience");
  };

  const removeListElement = (e) => {
    const id = e.target.closest("div").id;
    props.removeListElement(id, "experience");
  };

  return (
    <section>
      <div className="section-header">
        <h2>Work Experience</h2>
        <button onClick={addListElement}>Add</button>
      </div>

      <div className="groups-field">
        {Object.entries(props.userExperience).map(([id, item]) => {
          return (
            <div id={id} key={id} className="group">
              <input
                name="company"
                placeholder="Company"
                onChange={changeListInfo}
                value={item.course}
              />
              <input
                name="position"
                placeholder="Position"
                onChange={changeListInfo}
                value={item.university}
              />
              <input
                name="startDate"
                placeholder="Start Date"
                onChange={changeListInfo}
                value={item.startDate}
              />
              <input
                name="endDate"
                placeholder="End Date"
                onChange={changeListInfo}
                value={item.endDate}
              />

              <button onClick={removeListElement}>Delete</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
