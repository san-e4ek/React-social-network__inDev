import React from 'react'
import { NavLink } from 'react-router-dom'

export const User = props => {
    return (
        <div>
            <NavLink className={"nav-link text-info"} style={{textDecoration: 'none'}} to={"/Messages/" + props.id}>{props.name}</NavLink>
        </div>
    )
}