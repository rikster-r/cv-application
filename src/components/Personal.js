import React from "react";

const Personal = (props) => {
  return (
    <section>
      <div className="section-header">
        <h2>Personal Info</h2>
      </div>
      <input
        name="name"
        placeholder="Your Name"
        onChange={props.changePropertyInfo}
      />
      <input
        name="title"
        placeholder="Job Title"
        onChange={props.changePropertyInfo}
      />
      <input
        name="phone"
        placeholder="Phone Number"
        onChange={props.changePropertyInfo}
      />
      <input
        name="email"
        placeholder="Email"
        onChange={props.changePropertyInfo}
      />
      <input
        name="location"
        placeholder="Location"
        onChange={props.changePropertyInfo}
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={props.changePropertyInfo}
      />
    </section>
  );
};

export default Personal;
