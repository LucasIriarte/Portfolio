import React from "react";
import Styles from './Cards.module.css'


const Cards = (props) => {
    return (
        <div className={`${Styles.containerCard} max-w-250px rounded-2xl overflow-hidden h-64 flex flex-col`}>
            <h3 className="text-center">{props.title}</h3>
            <div className={`w-10/12 mx-auto rounded-md overflow-hidden`}>
                <img src={props.img} alt="image-proyect" className="bg-black"/>
            </div>
            <button className="bg-gradient-to-r from-button-default via-button-default-clare to-button-default text-white font-bold py-2 px-4 rounded mt-8 w-10/12 mx-auto">
                view
            </button>
        </div>
    )
}

export default Cards