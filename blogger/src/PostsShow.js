import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function PostsShow(props){
    const {id} = props.match.params
    const [ userPosts,setUserPosts ] = useState({})
    const [comments,setComments] = useState([])
    const [name,setName] = useState('')
    
    useEffect(() =>{
        axios.get(`http://jsonplaceholder.typicode.com/posts?id=${id}`)
            .then((response) =>{
                const res=response.data[0]
                console.log(res)
                setUserPosts(res)
            })
            .catch((err) =>{
                alert(err.message)
            })

        axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response) =>{
            const res=response.data
            console.log(res)
            setComments(res)
        })
        .catch((err) =>{
            alert(err.message)
        })
    },[id])

    useEffect(() =>{
        if(userPosts.userId){
        axios.get(`https://jsonplaceholder.typicode.com/users/${userPosts.userId}`)
            .then((response) =>{
                const res=response.data.name
                setName(res)
            })
            .catch((err) =>{
                alert(err.message)
            })
        }
    },[userPosts.userId])

    return (
        <div>
            <h2>NAME:{name}</h2>
            <h2>TITLE:{userPosts.title} </h2>
            <h3>BODY:{userPosts.body}</h3><hr/>
            <h2>COMMENTS:</h2>
            <ul>
                {comments.map((comment) =>{
                    return <li key={comment.id}>{comment.body}</li>
                })}
            </ul>
            <hr/>
            <Link to={`/users/${userPosts.userId}`}>more posts of Author: {name}</Link>
        </div>
    )
}