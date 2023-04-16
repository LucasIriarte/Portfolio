import React from "react";
import Styles from "./Home.module.css"
import img from "../Images/Lucas.png"

const Home = () => {
    return (
        <main className={Styles.backgroundHome}>
            <div>
                <div>
                    <h1>Soy Lucas Ezequiel Iriarte</h1>
                    <h2>FullStack Developer y apasionado por el Frontend</h2>
                </div>
                <div>
                    <img src={img} alt="Imagen Lucas Ezequiel Iriarte" />
                </div>
            </div>
        </main>
    )
}

export default Home