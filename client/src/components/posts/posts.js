import React from "react";
import { useSelector } from "react-redux";

import Post from './Post/Post'
import useStyles from './style.js'
import posts from "../../reducers/posts";

const Posts = () => {
    const post = useSelector((state) => state.posts)
    const classes = useStyles()

    console.log(posts);

    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    )
}

export default Posts