import React from "react";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import Proyects from "../Proyects/Proyects";
import Tecnologies from "../Tecnologies/Tecnologies";
import ContactMe from "../ContactMe/Contact";
import Lucas from "../../assets/Lucas.png"
import Footer from "../Footer/Footer";

const Home = () => {
    return (

        <main className="bg-color1 font-bold h-full">

            <Header/>

            <div className="flex items-center justify-around max-w-screen-xl mx-auto pt-16 h-screen">
                <div className="text-center">
                    <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-color-main1 to-color-main2">Hola, soy Lucas Ezequiel Iriarte</h1>
                    <h2 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-color-main1 to-color-main2">FullStack Developer y apasionado por el Frontend</h2>
                </div>

                <div className="w-1/2 max-w-xs">
                    <img src={Lucas} alt="Imagen Lucas Ezequiel Iriarte" className="w-full"/>
                </div>
            </div>

            <Proyects/>


            <Tecnologies/>

            <ContactMe/>
            
            <AboutMe/>

            <Footer/>

        </main>
    )
}

export default Home