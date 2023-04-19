import React from "react";
import Styles from "./Home.module.css"
import img from "../Images/Lucas.png"
import Header from "../Header/Header";

const Home = () => {
    return (

        <main className="bg-color1 font-bold h-screen">

            <Header/>

            <div className="flex items-center justify-around max-w-screen-xl mx-auto pt-16">
                <div className="">
                    <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-color-main1 to-color-main2">Soy Lucas Ezequiel Iriarte</h1>
                    <h2 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-color-main1 to-color-main2">FullStack Developer y apasionado por el Frontend</h2>
                </div>

                <div className="w-1/2 max-w-xs">
                    <img src={img} alt="Imagen Lucas Ezequiel Iriarte" className="w-full"/>
                </div>
            </div>
            
        </main>
    )
}

export default Home