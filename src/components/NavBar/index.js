import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Switch, Route, Link} from "react=router-dom";




class Navbar extends Component {
    state = {};
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React</h1>
                <div className="menu-icon"></div>
                <ul>
                { MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}


                    <li><a className={item.cName}></a></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar
