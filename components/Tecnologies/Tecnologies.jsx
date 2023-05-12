import React from "react";

const Tecnologies = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-24">
            <h3 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-color-main1 to-color-main2 inline">Tecnologías:</h3>
            <div className="flex flex-wrap justify-center mt-8">
                <div className="h-42 w-36 bg-white/[.02] flex justify-center align-center flex-col mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src="../../public/reactIcon.svg" alt="Icon technology react"/>
                    <h3 className="text-center">React.js</h3>
                </div>
                <div className="h-42 w-36 bg-white/[.02] flex justify-center align-center flex-col mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src="../../public/css3Icon.svg" alt="Icon technoloy css"/>
                    <h3 className="text-center">CSS3</h3>
                </div>
                <div className="h-42 w-36 bg-white/[.02] flex justify-center align-center flex-col mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src="../../public/html5Icon.svg" alt="Icon technology html"/>
                    <h3 className="text-center">HTML3</h3>
                </div>
                <div className="h-42 w-36 bg-white/[.02] flex justify-center align-center flex-col mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src="../../public/expressJsIcon.svg" alt="Icon technology expresJs"/>
                    <h3 className="text-center">Express.js</h3>
                </div>
                <div className="h-42 w-36 bg-white/[.02] flex justify-center align-center flex-col mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src="../../public/gitIcon.svg" alt="Icon technology GIT"/>
                    <h3 className="text-center">GIT</h3>
                </div>
                <div className="h-42 w-36 bg-white/[.02] flex justify-center align-center flex-col mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src="../../public/nodeJsIcon.svg" alt="Icon technology nodeJs"/>
                    <h3 className="text-center">Node.js</h3>
                </div>
                <div className="h-42 w-36 bg-white/[.02] flex justify-center align-center flex-col mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src="../../public/postgresqlIcon.svg" alt="Icon technology postgresql"/>
                    <h3 className="text-center">PostgresSQL</h3>
                </div>
                <div className="h-42 w-36 bg-white/[.02] flex justify-center align-center flex-col mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src="../../public/reduxIcon.svg" alt="Icon technology redux"/>
                    <h3 className="text-center">Redux.js</h3>
                </div>
                <div className="h-42 w-36 bg-white/[.02] flex justify-center align-center flex-col mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src="../../public/tailwindIcon.svg" alt="Icon technology tailwind"/>
                    <h3 className="text-center">Tailwindcss</h3>
                </div>
                <div className="h-42 w-36 bg-white/[.02] flex justify-center align-center flex-col mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src="../../public/javascriptIcon.svg" alt="Icon technology tailwind"/>
                    <h3 className="text-center">Tailwindcss</h3>
                </div>
            </div>
        </div>
    )
}

export default Tecnologies 