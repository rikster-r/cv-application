import React from "react";
import { v4 as uuidv4 } from "uuid";

const Education = (props) => {
  const changeListInfo = (e) => {
    const id = e.target.closest("div").id;
    props.changeListInfo(e, id, "education");
  };

  const addListElement = () => {
    const id = uuidv4();
    props.addListElement(id, "education");
  };

  const removeListElement = (e) => {
    const id = e.target.closest("div").id;
    props.removeListElement(id, "education");
  };

  return (
    <section>
      <div className="section-header">
        <h2>Education</h2>
        <button onClick={addListElement}>Add</button>
      </div>
      <div className="groups-field">
        {Object.entries(props.userEducation).map(([id, item]) => {
          return (
            <div id={id} key={id} className="group">
              <input
                name="course"
                placeholder="Course"
                onChange={changeListInfo}
                value={item.course}
              />
              <input
                name="university"
                placeholder="University"
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

export default Education;
