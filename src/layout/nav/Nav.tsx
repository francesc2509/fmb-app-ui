import React from 'react';

import './Nav.scss';
import routes from '../../common/routes';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (<nav className="Nav">
        <ul className="Nav-Links">
            {
                routes.map(({ path,  icon, label}) => {
                    return <NavLink to={path} className="Nav-Link" key={path}>
                        <i  className={icon}></i>
                        <span className="Nav-Link-Text">{label}</span>
                    </NavLink>
                })
            }
        </ul>
    </nav>);
}

export default Nav;