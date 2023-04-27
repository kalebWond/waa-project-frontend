import React from "react";

import { Link } from 'react-router-dom';

// import logo from '../../assets/logos/miu-logo.png';

import './Header.css'

const Header = () => {

    return (
        <header>
            <nav>

                <div>

                    <Link to={'/property'} >Property</Link>
                    <span>&nbsp;&nbsp;&nbsp;</span>

                    {/* <Link to={'/propertyDetails'}>Property Details</Link> */}

                </div>

            </nav>
        </header>
    );
}



export default Header;