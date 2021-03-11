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
<<<<<<< HEAD
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/'>About</Nav.Link>
                <Nav.Link href='/'>Updates</Nav.Link>
                <Nav.Link href='/'>Profile</Nav.Link>
=======
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
>>>>>>> 8ea8e45d1f8134983398a7f054406c5af0ca573f
            </nav>
        )
    }
}

<<<<<<< HEAD
=======
export default NavBar
>>>>>>> 8ea8e45d1f8134983398a7f054406c5af0ca573f
