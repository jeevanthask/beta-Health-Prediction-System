import React from 'react'
import {NavLink} from 'react-router-dom'

class Navigation extends React.Component{
    render() {
        return(
            <div>
                <NavLink to = "/" className="btn btn-warning m-2">Home</NavLink>
                <NavLink to = "/admin" className="btn btn-primary m-2">Admin</NavLink>
                <NavLink to = "/patient" className="btn btn-warning m-2">Patient</NavLink>
                <NavLink to = "/doctor" className="btn btn-primary m-2">Doctor</NavLink>
            </div>
        )
    }
}

export default Navigation