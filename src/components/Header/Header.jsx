import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
    const [barsDropDown, setBarsDropDown] = useState(false)
    const handleBarsDrops = () => {
        barsDropDown?setBarsDropDown(false):setBarsDropDown(true)
    }
    const handleBarsDropsDownPhone = () => {
        setBarsDropDown(!barsDropDown)
    }
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 bg-white border-gray-200 dark:bg-color1/[.9] backdrop-blur-md bg-white/[.01]">
                <div className="flex flex-wrap items-center justify-end max-w-screen-xl mx-auto p-4">
                    <div className="flex items-center md:order-2">
                        <button data-collapse-toggle="mega-menu" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false" onClick={handleBarsDrops}>
                            <span className="sr-only">Open main menu</span>
                            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={barsDropDown===true?"items-center justify-between w-full sm:flex sm:w-full":"items-center justify-between hidden w-full sm:flex sm:w-full"}>
                        <ul className="flex items-center flex-col mt-4 font-medium sm:flex-row sm:justify-evenly sm:w-full">
                            <li>
                                <a href="#Proyects" onClick={handleBarsDropsDownPhone} className="block py-2 pl-3 pr-4 text-gray-900 sm:border-0 sm:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700">Proyectos</a>
                            </li>
                            <li>
                                <a href="#Tecnologies" onClick={handleBarsDropsDownPhone} className="block py-2 pl-3 pr-4 text-gray-900 sm:border-0 sm:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700">Tecnologías</a>
                            </li>
                            <li>
                                <a href="#AboutMe" onClick={handleBarsDropsDownPhone} className="block py-2 pl-3 pr-4 text-gray-900 sm:border-0 sm:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700">Sobre mi</a>
                            </li>
                            <li>
                                <a href="#ContactMe" onClick={handleBarsDropsDownPhone} className="block py-2 pl-3 pr-4 text-gray-900 sm:border-0 sm:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header