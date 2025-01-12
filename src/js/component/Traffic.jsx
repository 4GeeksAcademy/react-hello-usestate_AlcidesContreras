import React, { useEffect } from "react";
import { useState } from "react";

//include images into your bundle

//create your first component

const Home = () => {
    const [color, setColor] = useState("")
    const [purpleOn, setPurpleOn] = useState(false)
    const [intervalId, setIntervalId] = useState(null)

    const changeColorRed = () => {
        setColor("red")
    };

    const changeColorGreen = () => {
        setColor("green")
    };

    const changeColorYellow = () => {
        setColor("yellow")
    };

    const changeColorPurple = () => {
        setColor("purple")
    }

    const alternal = () => {
        setColor((prevColor) => {
            if (prevColor === "red") return "yellow"
            if (prevColor === "yellow") return "green"
            if (prevColor === "green"){
                if (purpleOn) {
                    return "purple"
                }else { return "red" }
            }
            return "red"
        })
    };


    const alternalColors = () => {
        if (!intervalId) {
            const id = setInterval(alternal, 1000)
            setIntervalId(id)
        }
    };

    const alternalColorsStop = () => {
        if (intervalId) {
            clearInterval(intervalId)
            setIntervalId(null)
        }
    }

    const handlePurple = () => {
        setPurpleOn(true)
    };

    const handlePurpleOf = () => {
        setPurpleOn(false)
    };

    useEffect(() => {
        return () => {
            if (intervalId) {
                clearInterval(intervalId)
            }
        }
    }, [intervalId]);
    
    useEffect(() => {
        if(intervalId){
            clearInterval(intervalId)
            const id = setInterval(alternal,1000)
            setIntervalId(id)
        }
    }, [purpleOn]);




    console.log(color);

    return (
        <>
            <main className={`container ${purpleOn ? "container_add" : ""}`}>
                <div className={`semaforo ${purpleOn ? "semaforo_add" : ""}`}>
                    <span onClick={changeColorRed} className={`circulo red`} id={color === "red" ? "red" : ""}></span>
                    <span onClick={changeColorYellow} className={`circulo circulo_yellow yellow`} id={color === "yellow" ? "yellow" : ""}></span>
                    <span onClick={changeColorGreen} className={`circulo circulo_green`} id={color === "green" ? "green" : ""}></span>
                    {purpleOn ? <span onClick={changeColorPurple} className="circulo circulo_purple" id={color === "purple" ? "purple" : ""}></span> : null}
                </div>
            </main>

            <section className="buttons">
                <button className="button" onClick={alternalColors}>Alternal colors</button>
                <button className="button" onClick={alternalColorsStop}>Stop Alternal</button>
                <button className="button" onClick={handlePurple}>Add color</button>
                <button className="button" onClick={handlePurpleOf}>Remove color</button>
            </section>
        </>

    );
};

export default Home;