import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost, editPOst } from "../actions/ActionCreator";
import "../App.css";
import FontAwesome from "react-fontawesome";
export class Post extends Component {
  render() {
    return (
      <div className="post">
        <FontAwesome
          className="super-crazy-colors"
          name="rocket"
          size="2x"
          spin
          style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
        />
        <h2 className="post_title">{this.props.post.title}</h2>
        <h3 className="post_message">{this.props.post.postDescription}</h3>
        <div className="control-buttons">
          <button
            className="edit"
            onClick={() => this.props.dispatch(editPOst(this.props.post.id))}
          >
            Edit
          </button>
          <button className="vote">
            <FontAwesome
              className="super-crazy-colors"
              name="thumbs-up"
              size="2x"
            />
            <span>{this.props.post.likes}</span>
          </button>
          <button className="vote">
            <FontAwesome
              className="super-crazy-colors"
              name="thumbs-down"
              size="2x"
            />
            <span>{this.props.post.dislikes}</span>
          </button>

          <button
            className="delete"
            onClick={() => this.props.dispatch(deletePost(this.props.post.id))}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(Post);
