import React from 'react'
import { Link,Route } from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Posts from './Posts'
import ShowPage from './ShowPage'
import PostsShow from './PostsShow'

export default function App(props){

    return (
        <div>
            <Link to="/">Home</Link>
            |<Link to="/users">Users</Link>
            |<Link to="/posts">Posts</Link>

            <Route path="/" component={Home} exact={true} />
            <Route path="/users" component={Users} exact={true} />
            <Route path="/posts" component={Posts} exact={true}/>
            <Route path="/users/:id" component={ShowPage} />
            <Route path="/posts/:id" component={PostsShow} />
        </div>
    )
}