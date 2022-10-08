import React, { useState } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Preview from "./components/Preview";
import "./styles/App.scss";

const App = () => {
  const [name, setName] = useState("John Doe");
  const [title, setTitle] = useState("Software Developer");
  const [phone, setPhone] = useState("123 456 7890");
  const [email, setEmail] = useState("example@gmail.com");
  const [location, setLocation] = useState("New York, USA");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quae, eum libero quisquam cupiditate rerum nesciunt deserunt vel quia ea obcaecati assumenda quos alias accusamus consequatur officia, quibusdam totam molestias."
  );
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});

  const propertyMutators = {
    name: setName,
    title: setTitle,
    phone: setPhone,
    email: setEmail,
    location: setLocation,
    description: setDescription,
  };

  const changePropertyInfo = (e) => {
    propertyMutators[e.target.name](e.target.value);
  };

  const changeListInfo = (e, id, listName) => {
    let listClone =
      listName === "education" ? { ...education } : { ...experience };
    if (listClone[id] === undefined) return;

    listClone[id][e.target.name] = e.target.value;
    listName === "education"
      ? setEducation(listClone)
      : setExperience(listClone);
  };

  const addListElement = (id, listName) => {
    let listClone =
      listName === "education" ? { ...education } : { ...experience };

    if (listName === "education") {
      listClone[id] = {
        course: "",
        university: "",
        startDate: "",
        endDate: "",
      };
    } else if (listName === "experience") {
      listClone[id] = {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
      };
    }

    listName === "education"
      ? setEducation(listClone)
      : setExperience(listClone);
  };

  const removeListElement = (id, listName) => {
    let listClone =
      listName === "education" ? { ...education } : { ...experience };
    delete listClone[id];

    listName === "education"
      ? setEducation(listClone)
      : setExperience(listClone);
  };

  return (
    <div>
      <div className="editor">
        <Personal changePropertyInfo={changePropertyInfo} />
        <Experience
          changeListInfo={changeListInfo}
          addListElement={addListElement}
          removeListElement={removeListElement}
          userExperience={experience}
        />
        <Education
          changeListInfo={changeListInfo}
          addListElement={addListElement}
          removeListElement={removeListElement}
          userEducation={education}
        />
      </div>
      <Preview
        userData={{
          name,
          title,
          phone,
          email,
          location,
          description,
          education,
          experience,
        }}
      />
    </div>
  );
};

export default App;
