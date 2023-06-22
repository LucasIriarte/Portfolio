import React from "react";
import Cards from "../Cards/Cards";
import PiDogs from "../../assets/piDogs.jpg"
import pfRadiatorSprings from "../../assets/pfRadiatorSprings.jpg"


const Proyects = () => {
    return (
        <div id="Proyects" className="max-w-screen-xl mx-auto mt-24 flex flex-col scroll-mt-20">
            <h3 className="text-3xl mx-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-color-main1 to-color-main2 inline md:ml-12">Proyectos</h3>
            <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center mt-8 w-full sm:justify-around md:justify-start md:pl-12">
                <Cards title="PI dogs" img={PiDogs} moreInfo="Proyecto en el que se muestran perros traidos desde una api externa y permite crear propios perros, se utilizó: JavaScript, React, Redux, Sequalize, Express y PostgreSQL." deploy="https://pi-dogs-rouge.vercel.app" gitHub="https://github.com/LucasIriarte/PI-Dogs" />
                <div className="sm:ml-12">
                    <Cards title="PF Radiator Springs" img={pfRadiatorSprings} moreInfo="Proyecto grupal en donde la idea se basa en una página para la venta y compra de automoviles, se creó una api en la que se pueden guardar nuevos autos a la venta y son mostrados de manera automatica tras un pago por anunciarlo." deploy="https://pf-henryss.vercel.app/" gitHub="https://github.com/Knd0/PF_Henryss" />
                </div>
            </div>
        </div>
    )
}

export default Proyects