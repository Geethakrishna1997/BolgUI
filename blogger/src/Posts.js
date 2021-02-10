import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Posts(props){
    const [ posts,setPosts ] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const [postPerPage,setPostPerPage] = useState(10)
    const [nextPage,setNextPage] = useState(0)
    // const { id } =props.match.params
     
    useEffect(() =>{
        axios.get(`http://jsonplaceholder.typicode.com/posts`)
            .then((response) =>{
                const res=response.data
                setPosts(res)
            })
            .catch((err) =>{
                alert(err.message)
            })
    })

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)

    const handleNextPosts = () =>{
        const next= posts.slice(currentPage,indexOfLastPost)
        setNextPage(next)
    }

    return (
        <div>
            <h1>TOTAL POSTS:{posts.length}</h1>
            <ul>
                {currentPosts.map((post) =>{
                    return <li key={post.id}><Link to={`/posts/${post.id}`} >{post.title}</Link></li>
                })}
            </ul>
            <button onClick={handleNextPosts} value={nextPage}>next</button>
        </div>
    )
}