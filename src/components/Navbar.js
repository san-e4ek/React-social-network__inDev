import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = props => {
    return (
        <nav className="flex-column col-md-2 navbar navbar-dark bg-dark">
            <ul className={"w-100 p-0"}>
                <NavLink className={"nav-link text-light"} to="/profile">Profile</NavLink>
                <NavLink className={"nav-link text-light"} to="/messages">Messages</NavLink>
                <NavLink className={"nav-link text-light"} to="/news">News</NavLink>
                <NavLink className={"nav-link text-light"} to="/music">Music</NavLink>
                <NavLink className={"nav-link text-light"} to="/settings">Settings</NavLink>
            </ul>
        </nav>
    )
}