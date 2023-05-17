import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
    const [barsDropDown, setBarsDropDown] = useState(false)
    const handleBarsDrops = () => {
        barsDropDown?setBarsDropDown(false):setBarsDropDown(true)
    }
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-transparent backdrop-blur-sm bg-white/[.01]">
                <div className="flex flex-wrap items-center justify-end max-w-screen-xl mx-auto p-4">
                    {/* <a href="https://flowbite.com" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a> */}
                    <div className="flex items-center md:order-2">
                        <button data-collapse-toggle="mega-menu" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false" onClick={handleBarsDrops}>
                            <span className="sr-only">Open main menu</span>
                            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={barsDropDown===true?"items-center justify-between w-full sm:flex sm:w-full":"items-center justify-between hidden w-full sm:flex sm:w-full"}>
                        <ul className="flex items-center flex-col mt-4 font-medium sm:flex-row sm:justify-evenly sm:w-full">
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-50 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-600 sm:p-0 dark:text-white sm:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 sm:dark:hover:bg-transparent dark:border-gray-700">Sobre mi</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-50 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-600 sm:p-0 dark:text-white sm:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 sm:dark:hover:bg-transparent dark:border-gray-700">Proyectos</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-50 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-600 sm:p-0 dark:text-white sm:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 sm:dark:hover:bg-transparent dark:border-gray-700">Tecnologías</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-50 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-600 sm:p-0 dark:text-white sm:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 sm:dark:hover:bg-transparent dark:border-gray-700">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <nav className="flex justify-evenly items-center font-medium h-16 fixed w-full backdrop-blur-sm bg-white/[.01]">
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
            </nav> */}
        </>
    )
}

export default Header