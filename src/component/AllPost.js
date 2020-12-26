import React from "react";
import { connect } from "react-redux";
import Post from "./Post";
import EditPost from './EditPost'
import '../App.css'

class AllPost extends React.Component {
  render() {
    return (
      <div>
        <h1 className="center">All Posts</h1>
        {this.props.posts.map((post) =>
          post.edit ? (
            <EditPost  key={post.id} post={post}></EditPost>
          ) : (
            <Post key={post.id} post={post}></Post>
          )
        )}
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
