import React from "react";
import { connect } from "react-redux";
import "../App.css";
import { addPost } from "../actions/ActionCreator";
export class PostForm extends React.Component {
  constructor(props) {
    super();
    this.getTitle = React.createRef();
    this.getDescription = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const title = this.getTitle.current.value;
    const description = this.getDescription.current.value;

    const payload = {
      id: new Date().toTimeString(),
      title,
      description,
    };

    this.props.dispatch(addPost(payload.id,payload.title,payload.description));
  };
  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter Title"
            ref={this.getTitle}
          ></input>
          <br></br>
          <br></br>
          <textarea
            rows="5"
            cols="30"
            placeholder="Enter Post Description"
            ref={this.getDescription}
          ></textarea>
          <br></br>
          <br></br>
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
}

// Adding connect Function to dispatch actions
export default connect()(PostForm);