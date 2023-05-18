import React from "react";
import Styles from "./Footer.module.css"
import Variables from "../../Variables.css?inline"
import GitHubIcon from "../../assets/githubIcon.svg"
import EmailIcon from "../../assets/correoIcon.png"
import LinkedinIcon from "../../assets/linkedinIcon.svg"


const Footer = () => {
    return (

        <footer className={`shadow bg-color5/[.3]`}>
            <div className={`my-6 sm:mx-auto lg:my-8 ${Styles.AnimFooter}`}></div>
            <div className="flex items-center flex-col">
                <h3 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-color-main1 to-color-main2 inline">Contactame</h3>
                <div className="flex">
                    <div className="hover:scale-105 transition-all duration-300 sm:mx-8">
                        <a href="mailto:lucasiriarte67@gmail.com" target="_blank" className="hover:scale-105 transition-all duration-300">
                            <img src={EmailIcon} alt="Correo electronico icono" className="w-24 mx-2" />
                        </a>
                    </div>
                    <div className="hover:scale-105 transition-all duration-300 sm:mx-8">
                        <a href="https://github.com/LucasIriarte" target="_blank" className="hover:scale-105 transition-all duration-300">
                            <img src={GitHubIcon} alt="" className="w-24 mx-2" />
                        </a>
                    </div>
                    <div className="hover:scale-105 transition-all duration-300 sm:mx-8">
                        <a href="https://www.linkedin.com/in/lucas-iriarte/" target="_blank" className="hover:scale-105 transition-all duration-300">
                            <img src={LinkedinIcon} alt="" className="w-24 mx-2" />
                        </a>
                    </div>
                </div>
            </div>

        </footer>


    )
}

export default Footer