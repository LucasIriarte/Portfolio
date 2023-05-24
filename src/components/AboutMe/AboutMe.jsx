import React from "react";


const AboutMe = () => {
    return (
        <div id="AboutMe" className="max-w-screen-xl mx-auto mt-24 flex items-center flex-col md:items-start scroll-mt-20 scroll-mt-20">
            <h3 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-color-main1 to-color-main2 inline md:ml-12">Sobre mi:</h3>
            <p className="mt-2 text-center md:text-left md:ml-12 md:text-sm">
                Un apasionado de la tecnología en general, me gustan mucho las computadoras, ambiente en el que trabajo tanto el hardware como el software, gracias a este amor hacia la tecnología decidí meterme en la programación.
            </p>
            <p className="mt-2 text-center md:text-left md:ml-12 md:text-sm">
                Haciendo un punto aparte, entre las cosas que me gustan y hobbies se encuentran tanto actividades como jugar videojuegos o pádel, uno de mis deportes favoritos y pasar un rato tranquilo con amigos.
            </p>
        </div>
    )
}

export default AboutMe