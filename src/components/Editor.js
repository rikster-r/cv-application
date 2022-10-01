import React, { Component } from "react";
import Personal from "./editor/Personal";
import Education from "./editor/Education";
import Experience from "./editor/Experience";

export default class Editor extends Component {
  render() {
    return (
      <div className="editor">
        <Personal changePropertyInfo={this.props.changePropertyInfo} />
        <Experience
          changeListInfo={this.props.changeListInfo}
          addListElement={this.props.addListElement}
          removeListElement={this.props.removeListElement}
          userExperience={this.props.userData.experience}
        />
        <Education
          changeListInfo={this.props.changeListInfo}
          addListElement={this.props.addListElement}
          removeListElement={this.props.removeListElement}
          userEducation={this.props.userData.education}
        />
      </div>
    );
  }
}
