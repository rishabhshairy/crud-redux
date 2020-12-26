import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost, editPOst } from "../actions/ActionCreator";
import "../App.css";
export class Post extends Component {
  render() {
    return (
      <div className="post">
        <h2 className="post_title">{this.props.post.title}</h2>
        <h3 className="post_message">{this.props.post.postDescription}</h3>
        <button className="edit" onClick={() => this.props.dispatch(editPOst(this.props.post.id))}>
          Edit
        </button>
        <button className="delete"
          onClick={() => this.props.dispatch(deletePost(this.props.post.id))}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default connect()(Post);
