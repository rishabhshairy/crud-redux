import React from "react";
import { connect } from "react-redux";
import Post from "./Post";
import EditPost from "./EditPost";
import "../App.css";

class AllPost extends React.Component {
  render() {
    return (
      <div>
        <h1 className="center">All Posts</h1>
        {this.props.posts.map((post) => {
          return (
            <div key={post.id}>
              {post.edit ? (
                <EditPost post={post} key={post.id}></EditPost>
              ) : (
                <Post post={post} key={post.id}></Post>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};
export default connect(mapStateToProps)(AllPost);
