import React, { useEffect, useState } from "react";
import Styles from './Cards.module.css'


const Cards = (props) => {
    const [moreInfo, setMoreInfo] = useState(false)
    const handleMoreInfo = () => {
        moreInfo ? setMoreInfo(false) : setMoreInfo(true)
    }
    useEffect(() => {
        console.log(moreInfo)
    }, [moreInfo])
    return (
        <div className={`${Styles.containerCard} min-w-250px max-w-250px rounded-2xl overflow-hidden h-64 flex flex-col min-h-64`}>
            <h3 className="text-center">{props.title}</h3>
            <div className={moreInfo ? `hidden` : `w-10/12 mx-auto rounded-md overflow-hidden`}>
                <img src={props.img} alt="image-proyect" className="bg-black" />
            </div>
            <p className={moreInfo ? "px-4 overflow-auto" : "hidden"}>
                {props.moreInfo} 
                <a href={props.deploy} target="blank" className="decoration-solid text-blue-900 block text-white text-center bg-gradient-to-r from-button-default via-button-default-clare to-button-default text-white rounded" >Deploy</a>
                <a href={props.gitHub} target="blank" className="decoration-solid text-blue-900 cursor-pointer block text-white text-center bg-gradient-to-r from-button-default via-button-default-clare to-button-default text-white rounded mt-3" >GitHub</a>
            </p>
            {moreInfo ? <button className="bg-gradient-to-r from-button-default via-button-default-clare to-button-default text-white font-bold py-2 px-4 rounded mt-8 w-10/12 mx-auto" onClick={handleMoreInfo}>
                menos info
            </button> : <button className="bg-gradient-to-r from-button-default via-button-default-clare to-button-default text-white font-bold py-2 px-4 rounded mt-8 w-10/12 mx-auto" onClick={handleMoreInfo}>
                más info
            </button>}

        </div>
    )
}

export default Cards