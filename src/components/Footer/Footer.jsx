import React from "react";
import Styles from "./Footer.module.css"
import Variables from "../../Variables.css?inline"
import GitHubIcon from "../../assets/githubIcon.svg"
import EmailIcon from "../../assets/correoIcon.png"
import LinkedinIcon from "../../assets/linkedinIcon.svg"


const Footer = () => {
    return (

        <footer id="ContactMe" className={`bg-color5/[.3] flex flex-col pt-4 mt-16 border-t border-slate-700 scroll-mt-20`}>
            <h3 className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-color-main1 to-color-main2 mx-auto">Contactame</h3>
            <div className="flex justify-between mt-4">
                <div className={`my-6 lg:my-8 ${Styles.AnimFooter} w-1/4 md:w-5/12`}></div>
                <div className="flex items-center justify-between w-2/5 max-w-sm md:justify-around">

                    <div className="hover:scale-105 transition-all duration-300 w-12">
                        <a href="mailto:lucasiriarte67@gmail.com" target="_blank" className="hover:scale-105 transition-all duration-300 w-full">
                            <img src={EmailIcon} alt="Correo electronico icono" className="w-full" />
                        </a>
                    </div>
                    <div className="hover:scale-105 transition-all duration-300 w-12">
                        <a href="https://github.com/LucasIriarte" target="_blank" className="hover:scale-105 transition-all duration-300 w-full">
                            <img src={GitHubIcon} alt="" className="w-full" />
                        </a>
                    </div>
                    <div className="hover:scale-105 transition-all duration-300 w-12">
                        <a href="https://www.linkedin.com/in/lucas-iriarte/" target="_blank" className="hover:scale-105 transition-all duration-300 w-full">
                            <img src={LinkedinIcon} alt="" className="w-full" />
                        </a>
                    </div>
                </div>
                <div className={`my-6 lg:my-8 ${Styles.AnimFooter} w-1/4 md:w-5/12`}></div>
            </div>
            <span className="text-slate-500 text-center mt-4 font-normal text-sm">Copyright © 2023 Lucas Ezequiel Iriarte</span>
        </footer>


    )
}

export default Footer