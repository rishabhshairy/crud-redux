import React from 'react'
import '../App.css'
export default function PostForm() {
    return (
        <div>
            <h1>Create Post</h1>
            <form>
                <input type="text" placeholder="Enter Title"></input>
                <br></br>
                <br></br>
                <textarea rows="5" cols="30" placeholder="Enter Post Description"></textarea>
                <br></br>
                <br></br>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}
