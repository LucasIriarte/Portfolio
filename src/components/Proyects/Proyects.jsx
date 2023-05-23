import React from "react";
import Cards from "../Cards/Cards";
import PiDogs from "../../assets/piDogs.jpg"


const Proyects = () => {
    return (
        <div className="max-w-screen-xl mx-auto flex flex-col items-center md:items-start md:pl-12">
           <h3 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-color-main1 to-color-main2 inline">Proyectos</h3> 
           <div className="mt-8">
                <Cards title="PI dogs" img={ PiDogs }/>
           </div>
        </div>
    )
}

export default Proyects