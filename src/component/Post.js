import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/ActionCreator";
import "../App.css";
export class Post extends Component {
  render() {
    return (
      <div className="post">
        <h2>{this.props.post.title}</h2>
        <h3>{this.props.post.postDescription}</h3>
        <button>Edit</button>
        <button
          onClick={() => this.props.dispatch(deletePost(this.props.post.id))}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default connect()(Post);
