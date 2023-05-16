import React from "react";
import Styles from "./Footer.module.css"
import Variables from "../../Variables.css?inline"


const Footer = () => {
    return (

        <footer className={`shadow bg-color5/[.3]`}>
            <div className={`my-6 sm:mx-auto lg:my-8 ${Styles.AnimFooter}`}></div>
            <div className="w-full mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>


    )
}

export default Footer