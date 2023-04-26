import React from "react";


const Cards = (props) => {
    return(
        <div>
            <img src={props.img} alt="image-proyect" />
            <h3>{props.title}</h3>
            
        </div>
    )
}

export default Cards