import { array } from "prop-types";
import React, { useEffect } from "react";
import { useState } from "react";

//include images into your bundle

//create your first component

const Home = () => {
	const [color, setColor] = useState("")
	const [purpleOn, setPurpleOn] = useState(false)
	const [intervalId, setIntervalId] = useState(null)
	const [randomColor, setRandomColor] = useState(false)

//GENERAR CODIGO COLORES RANDOM
	const colorsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
	
	const randomFunction = (array) =>{
		return array[Math.floor(Math.random() * array.length)]
	};

	const combosNumbers = "#"+randomFunction(colorsNumbers)+randomFunction(colorsNumbers)+randomFunction(colorsNumbers)+
				randomFunction(colorsNumbers)+randomFunction(colorsNumbers)+randomFunction(colorsNumbers)+randomFunction(colorsNumbers)+
				randomFunction(colorsNumbers);


//VARIABLES QUE CONTIENEN LOS ESTILOS
	let colorRandomStyle = {
		background: "gray",
		boxShadow:""
	};

	let colorRandomStyle1 = {
		background: "gray",
		boxShadow:""
	};

	let colorRandomStyle2 = {
		background: "gray",
		boxShadow:""
	};

	let colorRandomStyle3 = {
		background: "gray",
		boxShadow:""
	};

//CAMBIO DE ESTILOS PARA LOS COLORES	
	if (color === "random") {
		colorRandomStyle.background = combosNumbers,
		colorRandomStyle.boxShadow = `-3px -5px 30px 10px ${combosNumbers}`}	
		
	if (color === "random1") {
		colorRandomStyle1.background = combosNumbers,
		colorRandomStyle1.boxShadow = `-3px -5px 30px 10px ${combosNumbers}`}
		
	if (color === "random2") {
		colorRandomStyle2.background = combosNumbers,
		colorRandomStyle2.boxShadow = `-3px -5px 30px 10px ${combosNumbers}`}

	if (color === "random3") {
		colorRandomStyle3.background = combosNumbers,
		colorRandomStyle3.boxShadow = `-3px -5px 30px 10px ${combosNumbers}`}
	
//PRUEBAS DE VARIABLES		
	console.log(color);
	console.log(randomColor);
	console.log(purpleOn);
	console.log(combosNumbers);
	
// CLICK PARA COLORES RANDOM
const changeColorRandom = () => {
	setColor("random")
};

const changeColorRandom1 = () => {
	setColor("random1")
};

const changeColorRandom2 = () => {
	setColor("random2")
};

const changeColorRandom3 = () => {
	setColor("random3")
}

//COLORES NORMAL	
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

//FUNCION PARA ALTERNAR LOS VALORES	
	const alternal = () => {
		setColor((prevColor) => {
			if (prevColor === "red") return "yellow"
			if (prevColor === "yellow") return "green"
			if (prevColor === "green"){
				if (purpleOn) {
					return "purple"
				}else if(randomColor){
					return "random"
				}else {return "red"}
			}
			if (prevColor === "random") return "random1"
			if (prevColor === "random1") return "random2"
			if (prevColor === "random2") return "random3"
			if (randomColor){
				return "random"
			}else {return "red"}	
		})
	};

//INICIAR EL ALTERNADOR DE COLORES
	const alternalColors = () => {
		if (!intervalId) {
			const id = setInterval(alternal, 1000)
			setIntervalId(id)
		}
	};

//PARAR EL ALTERNADOR DE COLORES	
	const alternalColorsStop = () => {
		if (intervalId) {
			clearInterval(intervalId)
			setIntervalId(null)
		}
	}


//MANEJADORES DE CLICK DE LOS BOTONES	
	const handlePurple = () => {
		setPurpleOn(true)
		setRandomColor(false)
		setColor("purple")
	};

	const handlePurpleOfAndRandom = () => {
		setPurpleOn(false)
		setRandomColor(false)		
	};

	const handleRandom = () => {
		setRandomColor(true)
		setPurpleOn(false)
		setColor("random")
	};


//USEEFFECT PARA QUE LOS CAMBIOS SE VEAN EN TIEMPO REAL	
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
	}, [purpleOn, randomColor]);

	return (
		<>
			<main className={`container ${purpleOn || randomColor ? "container_add" : ""}`}>
				<div className={`semaforo ${purpleOn || randomColor ? "semaforo_add" : ""}`}>
					{randomColor ? <span onClick={changeColorRandom} className="circulo red" style={colorRandomStyle}></span> : <span onClick={changeColorRed} className={`circulo red`} id={color === "red" ? "red" : ""}></span>}
					{randomColor ? <span onClick={changeColorRandom1} className="circulo circulo_yellow yellow" style={colorRandomStyle1}></span> : <span onClick={changeColorYellow} className={`circulo circulo_yellow yellow`} id={color === "yellow" ? "yellow" : ""}></span>}
					{randomColor ? <span onClick={changeColorRandom2} className="circulo circulo_green" style={colorRandomStyle2}></span> : <span onClick={changeColorGreen} className={`circulo circulo_green`} id={color === "green" ? "green" : ""}></span>}
					{purpleOn ? <span onClick={changeColorPurple} className="circulo circulo_purple" id={color === "purple" ? "purple" : ""}></span> : null}
					{randomColor ? <span onClick={changeColorRandom3} className="circulo circulo_purple" style={colorRandomStyle3}></span> : null}
				</div>
			</main>

			<section className="buttons">
				<button className="button" onClick={alternalColors}>Alternal Colors</button>
				<button className="button" onClick={alternalColorsStop}>Stop Alternal</button>
				<button className="button" onClick={handlePurple}>Add Purple</button>
				<button className="button" onClick={handleRandom}>Random Colors</button>
				<button className="button" onClick={handlePurpleOfAndRandom}>Remove color</button>
			</section>
		</>

	);
};

export default Home;
