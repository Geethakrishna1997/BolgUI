import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Users(props){
    const [users,setUsers] = useState([])

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) =>{
                const res=response.data
                setUsers(res)
            })
            .catch((err) =>{
                alert(err.message)
            })
    },[])

    return (
        <div>
            <h1>Users List:{users.length}</h1>
            <ul>
                {users.map((user) =>{
                    return <li key={user.id} ><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                })}
            </ul>
        </div>
    )
}