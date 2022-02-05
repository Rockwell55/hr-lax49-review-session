import React from 'react';
import axios from 'axios';

export default class Add extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      image: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e){
    // Todo: Add your code here to handle the data the client inputs
    // console.log(e.target);
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    // Todo: Add your code here to handle the API requests to add a student and image

  }

  showPreview(){
    return (
      (this.state.name && this.state.image) ? (
        <div>
          <img src={this.state.image}></img>
          <h2>{this.state.name}</h2>
        </div>
      ) : (
        <div>
          Fill out the form and a preview will appear here...
        </div>
      )
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Student Name: </label>
          <input type="text" name="name" onChange={this.changeHandler}/>
          <label>Image URL: </label>
          <input type="text" name="image" onChange={this.changeHandler}/>
          <button type="submit" value="Submit">Submit</button>
        </form>
        <h1>Preview:</h1>
        <div>{this.showPreview()}</div>
      </div>
    )
  }
}