import React from "react";
import CardsTecnologies from "../CardsTecnolgies/CardsTecnologies.jsx"
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
        <div id="Tecnologies" className="max-w-screen-xl mx-auto mt-24 flex flex-col scroll-mt-20">
            <h3 className="text-3xl mx-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-color-main1 to-color-main2 inline md:ml-12">Tecnologías:</h3>
            <div className="flex flex-wrap justify-center mt-8 w-full" >
                <CardsTecnologies img={ReactIcon} title="React.js" alt="Icon technology react"/>
                <CardsTecnologies img={Css3Icon} title="CSS3" alt="Icon technoloy css"/>
                <CardsTecnologies img={Html5Icon} title="HTML3" alt="Icon technology html"/>
                <CardsTecnologies img={ExpressJsIcon} title="Express.js" alt="Icon technology expresJs"/>
                <CardsTecnologies img={GITIcon} title="GIT" alt="Icon technology GIT"/>
                <CardsTecnologies img={NodeJsIcon} title="Node.js" alt="Icon technology nodeJs"/>
                <CardsTecnologies img={PostgresIcon} title="PostgresSQL" alt="Icon technology postgresql"/>
                <CardsTecnologies img={ReduxIcon} title="Redux.js" alt="Icon technology redux"/>
                <CardsTecnologies img={TailwindIcon} title="Tailwindcss" alt="Icon technology tailwind"/>
                <CardsTecnologies img={JavascriptIcon} title="JavaScript" alt="Icon technology javascript"/>
            </div>
        </div>
    )
}

export default Tecnologies 