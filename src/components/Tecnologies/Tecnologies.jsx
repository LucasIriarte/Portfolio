import React from "react";
import ReactIcon from "../../assets/reactIcon.svg"
import Css3Icon from "../../assets/css3Icon.svg"
import Html5Icon from "../../assets/html5Icon.svg"
import ExpressJsIcon from "../../assets/expressJsIcon.svg"
import GITIcon from "../../assets/gitIcon.svg"
import NodeJsIcon from "../../assets/nodeJsIcon.svg"
import PostgresIcon from "../../assets/postgresqlIcon.svg"
import ReduxIcon from "../../assets/reduxIcon.svg"
import TailwindIcon from "../../assets/tailwindIcon.svg"
import JavascriptIcon from "../../assets/javascriptIcon.svg"


const Tecnologies = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-24 flex flex-col">
            <h3 className="text-3xl mx-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-color-main1 to-color-main2 inline">Tecnologías:</h3>
            <div className="flex flex-wrap justify-center mt-8 w-full">
                <div className="max-w-150px w-2/5 h-auto max-w-200px mx-auto sm:h-42 sm:w-36 bg-white/[.02] flex justify-center align-center flex-col sm:mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src={ ReactIcon } alt="Icon technology react"/>
                    <h3 className="text-center">React.js</h3>
                </div>
                <div className="max-w-150px w-2/5 h-auto sm:max-w-200px mx-auto sm:h-42 sm:w-36 bg-white/[.02] flex justify-center align-center flex-col sm:mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src={ Css3Icon } alt="Icon technoloy css"/>
                    <h3 className="text-center">CSS3</h3>
                </div>
                <div className="max-w-150px w-2/5 h-auto sm:max-w-200px mx-auto sm:h-42 sm:w-36 bg-white/[.02] flex justify-center align-center flex-col sm:mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src={ Html5Icon } alt="Icon technology html"/>
                    <h3 className="text-center">HTML3</h3>
                </div>
                <div className="max-w-150px w-2/5 h-auto sm:max-w-200px mx-auto sm:h-42 sm:w-36 bg-white/[.02] flex justify-center align-center flex-col sm:mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src={ ExpressJsIcon } alt="Icon technology expresJs"/>
                    <h3 className="text-center">Express.js</h3>
                </div>
                <div className="max-w-150px w-2/5 h-auto sm:max-w-200px mx-auto sm:h-42 sm:w-36 bg-white/[.02] flex justify-center align-center flex-col sm:mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src={ GITIcon } alt="Icon technology GIT"/>
                    <h3 className="text-center">GIT</h3>
                </div>
                <div className="max-w-150px w-2/5 h-auto sm:max-w-200px mx-auto sm:h-42 sm:w-36 bg-white/[.02] flex justify-center align-center flex-col sm:mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src={ NodeJsIcon } alt="Icon technology nodeJs"/>
                    <h3 className="text-center">Node.js</h3>
                </div>
                <div className="max-w-150px w-2/5 h-auto sm:max-w-200px mx-auto sm:h-42 sm:w-36 bg-white/[.02] flex justify-center align-center flex-col sm:mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src={ PostgresIcon } alt="Icon technology postgresql"/>
                    <h3 className="text-center">PostgresSQL</h3>
                </div>
                <div className="max-w-150px w-2/5 h-auto sm:max-w-200px mx-auto sm:h-42 sm:w-36 bg-white/[.02] flex justify-center align-center flex-col sm:mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src={ ReduxIcon } alt="Icon technology redux"/>
                    <h3 className="text-center">Redux.js</h3>
                </div>
                <div className="max-w-150px w-2/5 h-auto sm:max-w-200px mx-auto sm:h-42 sm:w-36 bg-white/[.02] flex justify-center align-center flex-col sm:mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src={ TailwindIcon } alt="Icon technology tailwind"/>
                    <h3 className="text-center">Tailwindcss</h3>
                </div>
                <div className="max-w-150px w-2/5 h-auto sm:max-w-200px mx-auto sm:h-42 sm:w-36 bg-white/[.02] flex justify-center align-center flex-col sm:mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src={ JavascriptIcon } alt="Icon technology tailwind"/>
                    <h3 className="text-center">JavaScript</h3>
                </div>
            </div>
        </div>
    )
}

export default Tecnologies 