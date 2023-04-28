import React from "react";


const Cards = (props) => {
    return (
        <div className="max-w-250px rounded-2xl overflow-hidden backdrop-blur-sm relative h-64 flex flex-col bg-gradient-to-r from-color-main1/[0.5] via-black to-color-main2/[0.5]">
            {/* <div className="h-full rounded-tl-1/2 rounded-bl-1/2 blur-xl w-1/3 bg-color-main2/[.3] absolute right-0 z-0">
            </div>
            <div className="h-full rounded-tr-1/2 rounded-br-1/2 blur-xl w-1/3 bg-color-main1/[.3] absolute left-0 z-0">
            </div> */}
            <h3 className="text-center">{props.title}</h3>
            <div className="w-10/12 mx-auto z-10 rounded-md overflow-hidden relative">
                <img src={props.img} alt="image-proyect" />
            </div>
            <button class="bg-gradient-to-r from-button-default via-button-default-clare to-button-default text-white font-bold py-2 px-4 rounded relative mt-8 w-10/12 mx-auto">
                view
            </button>
        </div>
    )
}

export default Cards