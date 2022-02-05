import React from 'react';
import axios from 'axios';

class ListElement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newName: '',
      editToggled: false
    }

    this.handleSubmitNewName = this.handleSubmitNewName.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      newName: e.target.value
    })
  }

  handleSubmitNewName() {
    axios.put(`/api/students/${this.props.student.id}`, { newName: this.state.newName })
      .then(this.props.getStudents())
      .then(this.setState({ newName: '' }))
      .then(this.toggleEditMode())
      .catch(err => console.error(err))
  }

  toggleEditMode() {
    this.setState({ editToggled: !this.state.editToggled })
  }

  editMode() {
    if (this.state.editToggled) {
      return (
        <div>
          <input type="text" value={this.state.newName} onChange={this.handleOnChange}></input>
          <button onClick={this.handleSubmitNewName}>Change Name</button>
          <button onClick={this.toggleEditMode}>Cancel</button>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={this.toggleEditMode}>Edit</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div>{this.props.student.name}</div>
        {this.editMode()}
        <img src={this.props.student.imgurl}></img>
      </div>
    )
  }
};

export default ListElement;
