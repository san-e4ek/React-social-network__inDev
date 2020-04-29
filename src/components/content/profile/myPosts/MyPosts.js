import React from 'react'
import {NewPost} from "./newPost/NewPosts";
import {Post} from "./post/Post";

export const MyPosts = props => {
    return (
        <div>
            <h3>My Posts</h3>
            <NewPost/>
            <Post massage={"Hi, Pitson!"} likesCount={"15"} />
        </div>
    )
}