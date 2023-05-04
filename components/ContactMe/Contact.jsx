import React from "react";


const ContactMe = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <h3 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-color-main1 to-color-main2 inline">Contacto:</h3>
            <div className="flex">
                <div className="hover:scale-105 transition-all duration-300">
                    <a href="mailto:lucasiriarte67@gmail.com" target="_blank" className="hover:scale-105 transition-all duration-300">
                        <img src="../../public/correoIcon.png" alt="Correo electronico icono" className="w-24 ml-0 mx-2" />
                    </a>
                </div>
                <div className="hover:scale-105 transition-all duration-300">
                    <a href="https://github.com/LucasIriarte" target="_blank" className="hover:scale-105 transition-all duration-300">
                        <img src="../../public/githubIcon.svg" alt="" className="w-24 mx-2" />
                    </a>
                </div>
                <div className="hover:scale-105 transition-all duration-300">
                    <a href="https://www.linkedin.com/in/lucas-iriarte/" target="_blank" className="hover:scale-105 transition-all duration-300">
                        <img src="../../public/linkedinIcon.svg" alt="" className="w-24 mx-2" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactMe