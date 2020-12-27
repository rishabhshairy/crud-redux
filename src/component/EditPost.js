import React, { Component } from "react";
import { updatePost } from "../actions/ActionCreator";
import { connect } from "react-redux";

class EditPost extends Component {
  constructor(props) {
    super();
    this.getTitle = React.createRef();
    this.getDescription = React.createRef();
  }
  componentDidMount() {
    console.log(this.props.post);
  }
  handleEdit = (event) => {
    event.preventDefault();
    const newTitle = this.getTitle.current.value;
    const newDescription = this.getDescription.current.value;

    const payload = {
      newTitle,
      newDescription,
      edit: !this.props.post.edit,
    };
    this.props.dispatch(updatePost(this.props.post.id, payload));
  };
  render() {
    return (
      <div className="post-container">
        <h1 className="post-heading">Edit Post</h1>
        <form onSubmit={this.handleEdit} className="form">
          <input
            type="text"
            placeholder="Enter Title"
            ref={this.getTitle}
            defaultValue={this.props.post.title}
          ></input>
          <br></br>
          <br></br>
          <textarea
            rows="5"
            cols="30"
            placeholder="Enter Post Description"
            ref={this.getDescription}
            defaultValue={this.props.post.postDescription}
          ></textarea>
          <br></br>
          <br></br>
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

export default connect()(EditPost);
