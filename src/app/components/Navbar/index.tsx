import React from "react";
import { NavLink } from "react-router-dom";

import { leftNav, rightNav } from "./menuLists";

function Navbar() {
    const activeStyle = "underline underline-offset-4"
    const pendingStyle = ""
    const transitioningStyle = ""

    return (
        <nav id="main-navbar" className="flex justify-between items-center fized z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                {leftNav.map(link => (
                    <li key={link.text}
                        className={link.className}
                    >
                        <NavLink 
                            to={link.to}
                            className={({ isActive, isPending, isTransitioning }) =>
                                [
                                    isPending ? pendingStyle : "",
                                    isActive ? activeStyle : "",
                                    isTransitioning ? transitioningStyle : "",
                                ].join(" ")
                            }
                        >
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <ul className="flex items-center gap-3">
                <li>
                    <h5>
                        Carlos Gonsalez Perro
                    </h5>
                    <small>
                        info@example.com
                    </small>
                    <small>
                        10-10-2006
                    </small>
                </li>
                {rightNav.map(link => (
                    <li key={link.text}
                        className={link.className}
                    >
                        <NavLink 
                            to={link.to}
                            className={({ isActive, isPending, isTransitioning }) =>
                                [
                                    isPending ? pendingStyle : "",
                                    isActive ? activeStyle : "",
                                    isTransitioning ? transitioningStyle : "",
                                ].join(" ")
                            }
                        >
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
