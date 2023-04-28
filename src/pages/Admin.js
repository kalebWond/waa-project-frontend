import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Admin() {
    return (
        <div>
            <h1>Admin</h1>
            <div>
                <h1>Admin navigation</h1>
                <ul>
                    <li><Link to="owners">Owners</Link></li>
                    <li><Link to="customers">Customer</Link></li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
}

export default Admin