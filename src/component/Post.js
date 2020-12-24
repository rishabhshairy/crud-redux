import React, { Component } from 'react'
import '../App.css'
export class Post extends Component {
    render() {
        return (
            <div className="post">
                <h2>{this.props.post.title}</h2>
                <h3>{this.props.post.postDescription}</h3>
            </div>
        )
    }
}

export default Post
