import React, { useState } from 'react'
import PostItem from './PostItem'
import { useEffect } from 'react'
import axios from 'axios'

function PostList()
{
    const[postsdata , setpostsdata ]=useState([])

    useEffect(()=>{
        axios.get('/api/post/getposts').then(res=>{
            console.log(res.data)
            setpostsdata(res.data)   
        }).catch(err=>{
            console.log(err)
        })

    }, [])

    const PostList = postsdata.map(post=>{
        return(
            <div className='row-justify-content-center'>
                <PostItem post={post}/>
            </div>
        )
    })
    return(
        <div>

            <a href="/addpost" className='btn btn-primary m-5'>Add Post</a>
            {PostList}
        </div>
    )
}
export default PostList