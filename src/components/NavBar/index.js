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
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/'>About</Nav.Link>
                <Nav.Link href='/'>Updates</Nav.Link>
                <Nav.Link href='/'>Profile</Nav.Link>
            </nav>
        )
    }
}

