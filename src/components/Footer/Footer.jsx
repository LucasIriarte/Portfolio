import React from "react";
import Styles from "./Footer.module.css"
import Variables from "../../Variables.css?inline"
import GitHubIcon from "../../assets/githubIcon.svg"
import EmailIcon from "../../assets/correoIcon.png"
import LinkedinIcon from "../../assets/linkedinIcon.svg"


const Footer = () => {
    return (

        <footer className={`bg-color5/[.3] flex flex-col pt-4 mt-16`}>
            <h3 className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-color-main1 to-color-main2 mx-auto">Contactame</h3>
            <div className="flex justify-between mt-4">
                <div className={`my-6 lg:my-8 ${Styles.AnimFooter} w-1/4`}></div>
                <div className="hover:scale-105 transition-all duration-300 sm:mx-8 w-12">
                    <a href="mailto:lucasiriarte67@gmail.com" target="_blank" className="hover:scale-105 transition-all duration-300 w-full">
                        <img src={EmailIcon} alt="Correo electronico icono" className="w-full" />
                    </a>
                </div>
                <div className="hover:scale-105 transition-all duration-300 sm:mx-8 w-12">
                    <a href="https://github.com/LucasIriarte" target="_blank" className="hover:scale-105 transition-all duration-300 w-full">
                        <img src={GitHubIcon} alt="" className="w-full" />
                    </a>
                </div>
                <div className="hover:scale-105 transition-all duration-300 sm:mx-8 w-12">
                    <a href="https://www.linkedin.com/in/lucas-iriarte/" target="_blank" className="hover:scale-105 transition-all duration-300 w-full">
                        <img src={LinkedinIcon} alt="" className="w-full" />
                    </a>
                </div>
                <div className={`my-6 lg:my-8 ${Styles.AnimFooter} w-1/4`}></div>
            </div>
            <span className="text-blue-900/[.4] text-center mt-4">Copyright © 2023 Lucas Ezequiel Iriarte</span>
        </footer>


    )
}

export default Footer