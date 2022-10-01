import React, { Component } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './styles/App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'John Doe',
      title: 'Software Developer',
      phone: '123 456 7890',
      email: 'example@gmail.com',
      location: 'New York, USA',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quae, eum libero quisquam cupiditate rerum nesciunt deserunt vel quia ea obcaecati assumenda quos alias accusamus consequatur officia, quibusdam totam molestias.',
      education: {},
      experience: {}
    }
  }

  changePropertyInfo = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  changeListInfo = (e, id, listName) => {
    let listClone = { ...this.state[listName] };
    if (listClone[id] === undefined) return; // if doesn't exist

    listClone[id][e.target.name] = e.target.value;
    this.setState({
      [listName]: listClone
    })
  }

  addListElement = (id, listName) => {
    let listClone = { ...this.state[listName] };
    if (listClone[id]) return; //if exists

    if (listName === 'education') {
      listClone[id] = {
        course: '',
        university: '',
        startDate: '',
        endDate: ''
      }
    } else if (listName === 'experience') {
      listClone[id] = {
        company: '',
        position: '',
        startDate: '',
        endDate: ''
      }
    }

    this.setState({
      [listName]: listClone
    })
  }

  removeListElement = (id, listName) => {
    let listClone = { ...this.state[listName] };
    delete listClone[id];

    this.setState({
      [listName]: listClone
    })
  }

  render() {
    return (
      <div>
        <Editor
          changePropertyInfo={this.changePropertyInfo}
          changeListInfo={this.changeListInfo}
          addListElement={this.addListElement}
          removeListElement={this.removeListElement}
          userData={this.state}
        />
        <Preview userData={this.state} />
      </div>
    )
  }
}

export default App;