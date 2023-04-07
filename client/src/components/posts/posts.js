import React from "react";
import { useSelector } from "react-redux";

import Post from './Post/Post'
import useStyles from './style.js'
import posts from "../../reducers/posts";
import { Grid, CircularProgress } from "@mui/material";


const Posts = () => {
    const post = useSelector((state) => state.posts)
    const classes = useStyles()

    console.log(posts);

    return (
       !posts.length ? <CircularProgress/> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {post.map((post) => {
                <Grid key={post._id} item xs = {12} sm = {6} >
                    <post post = {post}/>
                </Grid>
            })}
        </Grid>
       )
    )
}

export default Posts;