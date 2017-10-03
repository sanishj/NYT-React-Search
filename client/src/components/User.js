import React from "react"
import Home from "./Home"
import axios from "axios"

export default class User extends React.Component {
    state = {
        users: []
    }
    componentWillMount() {
        axios("/api/users/").then((response)=>{
            this.setState({
                users: response.data
            })
        }).catch(error=>console.log(error));
    }
    render() {
        const content = this.state.users.map(user=><h1 key={user.id}>{user.name}</h1>);
        return (
            <div>
                <Home />
                <div> This is my content </div>
                {content}
            </div>
        )
    }
}