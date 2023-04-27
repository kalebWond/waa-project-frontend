import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Owner() {
    return (
        <div>
            <h1>Owner</h1>
            <div>
                <h1>Owner navigation</h1>
                <ul>
                    <li><Link to="properties">Properties</Link></li>
                    <li><Link to="offers">Offers</Link></li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
}

export default Owner