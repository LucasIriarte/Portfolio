import React from "react";
import Styles from "./Tecnologies.module.css"

const Tecnologies = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <h3 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-color-main1 to-color-main2 inline">Tecnologías:</h3>
            <div className="flex">
                <img src="../../public/reactIcon.svg" alt="Icon tecnologie" className={`${Styles.reactSvg} h-28 w-28`} />
                <img src="../../public/css3Icon.svg" alt="" className={`${Styles.reactSvg} h-28 w-28`} />
                <img src="../../public/html5Icon.svg" alt="" className={`${Styles.reactSvg} h-28 w-28`} />
                <img src="../../public/expressJsIcon.svg" alt="" className={`${Styles.reactSvg} h-28 w-28`} />
                <img src="../../public/gitIcon.svg" alt="" className={`${Styles.reactSvg} h-28 w-28`} />
                <img src="../../public/nodeJsIcon.svg" alt="" className={`${Styles.reactSvg} h-28 w-28`} />
                <img src="../../public/postgresqlIcon.svg" alt="" className={`${Styles.reactSvg} h-28 w-28`} />
                <img src="../../public/redux-icon.png" alt="" className={`${Styles.reactSvg} h-28 w-28`} />
                <img src="../../public/tailwindIcon.svg" alt="" className={`${Styles.reactSvg} h-28 w-28`} />
            </div>
        </div>
    )
}

export default Tecnologies 