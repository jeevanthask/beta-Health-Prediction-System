import React from 'react'
import {NavLink} from 'react-router-dom'

class Navigation extends React.Component{
    render() {
        return(
            <div>
                <NavLink to = "/">Home</NavLink>
                <NavLink to = "/admin">Admin</NavLink>
                <NavLink to = "/patient">Patient</NavLink>
                <NavLink to = "/doctor">Doctor</NavLink>
            </div>
        )
    }
}

export default Navigation