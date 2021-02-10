import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function ShowPage(props){
    const {id} = props.match.params
    const [userPosts,setUserPosts] = useState([])
    const [user,setUser] = useState({})
    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) =>{
                const res=response.data
                setUser(res)
            })
            .catch((err) =>{
                alert(err.message)
            })
    
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response) =>{
                const res=response.data
                console.log(res)
                setUserPosts(res)
            })
            .catch((err) =>{
                alert(err.message)
            })
    },[id])

    return (
        <div>
            <h1>USER NAME:{user.name}</h1>
            <h3>POSTS WRITTEN BY USER</h3>
            <ul>
                {userPosts.map((post) =>{
                    return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li> 
                })}
            </ul>
        </div>
    )
}