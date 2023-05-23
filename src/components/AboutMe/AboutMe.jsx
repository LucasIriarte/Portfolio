import React from "react";


const AboutMe = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-24 flex items-center flex-col md:items-start md:ml-12">
            <h3 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-color-main1 to-color-main2 inline">Sobre mi:</h3>
            <p className="mt-2 text-center md:text-left">
                Un apasionado de la tecnología en general, me gustan mucho las computadoras, ambiente en el que trabajo tanto el hardware como el software, gracias a este amor hacia la tecnología decidí meterme en la programación.
            </p>
            <p>
                Haciendo un punto aparte, entre las cosas que me gustan y hobbies se encuentran tanto actividades como jugar videojuegos, hacer pádel, uno de mis deportes favoritos y pasar un rato tranquilo con amigos.
            </p>
        </div>
    )
}

export default AboutMe