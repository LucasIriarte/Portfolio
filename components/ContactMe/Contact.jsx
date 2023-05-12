import React from "react";


const ContactMe = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-24">
            <h3 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-color-main1 to-color-main2 inline">Contacto:</h3>
            <div className="flex mt-4">
                <div className="hover:scale-105 transition-all duration-300 mx-8 ml-0">
                    <a href="mailto:lucasiriarte67@gmail.com" target="_blank" className="hover:scale-105 transition-all duration-300">
                        <img src="../../public/correoIcon.png" alt="Correo electronico icono" className="w-24 ml-0 mx-2" />
                        <h4 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-color-main1 to-color-main2 text-center">Email</h4>
                    </a>
                </div>
                <div className="hover:scale-105 transition-all duration-300 mx-8">
                    <a href="https://github.com/LucasIriarte" target="_blank" className="hover:scale-105 transition-all duration-300">
                        <img src="../../public/githubIcon.svg" alt="" className="w-24 mx-2" />
                        <h4 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-color-main1 to-color-main2 text-center">GitHub</h4>
                    </a>
                </div>
                <div className="hover:scale-105 transition-all duration-300 mx-8">
                    <a href="https://www.linkedin.com/in/lucas-iriarte/" target="_blank" className="hover:scale-105 transition-all duration-300">
                        <img src="../../public/linkedinIcon.svg" alt="" className="w-24 mx-2" />
                        <h4 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-color-main1 to-color-main2 text-center">Linkedin</h4>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactMe