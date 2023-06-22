import React from "react";

const CardsTecnologies = (props) => {
    return(
        <div className="max-w-150px w-2/5 h-auto sm:max-w-200px mx-auto sm:h-42 sm:w-36 bg-white/[.02] flex justify-center align-center flex-col sm:mx-12 my-3 rounded-xl border border-white/[.05]">
                    <img src={ props.img } alt={props.alt}/>
                    <h3 className="text-center">{props.title}</h3>
                </div>
    )
}

export default CardsTecnologies