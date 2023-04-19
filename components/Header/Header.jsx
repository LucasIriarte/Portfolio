import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <>
            <nav className="flex justify-evenly items-center font-medium h-16 fixed w-full backdrop-blur-sm">
                <NavLink>
                    Sobre mi
                </NavLink>
                <NavLink>
                    Proyectos
                </NavLink>
                <NavLink>
                    Tecnologías
                </NavLink>
                <NavLink>
                    Contacto
                </NavLink>
                <NavLink>
                    Tecnologías a aprender
                </NavLink>
                <NavLink>
                    Hobbies
                </NavLink>
            </nav>
        </>
    )
}

export default Header