import { useState } from "react";

import "./App.css";
import Tablero from "./components/Tablero/Tablero";

const posGanadoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const App = () => {
  // Estado para el turno -> X o O
  const [turno, setTurno] = useState("X");
  // Array para cada cuadrado de los 9 que tiene el tablero
  const [cuadros, setCuadros] = useState(Array(9).fill(null));    
  // Este state es para guardar que posicion del tablero ganó
  const [cuadrosGanadores, setCuadrosGanadores] = useState([]);

  const reset = () => {
    setTurno("X");
    setCuadros(Array(9).fill(null));
    setCuadrosGanadores([]);
  };

  const checkGanador = (cuadros) => {
    for (let i = 0; i < posGanadoras.length; i++) {
      const [a, b, c] = posGanadoras[i];
      if (
        cuadros[a] &&
        cuadros[a] === cuadros[b] &&
        cuadros[a] === cuadros[c]
      ) {
        // hay un ganador
        finalJuego(cuadros[a], posGanadoras[i]);
        return;
      }
    }

    // chequeamos si hay un empate
    if (!cuadros.includes(null)) {
      finalJuego(null, Array.from(Array(10).keys()));
      return;
    }

    setTurno(turno === "X" ? "O" : "X");
  };

  const finalJuego = (resultado, posicionGanadora) => {
    // ya no podemos hacer mas click (ver en Cuadro la ejecucion de onClick)
    setTurno(null);    
    setCuadrosGanadores(posicionGanadora);
    setTimeout(reset, 2000);
  };

  const handleClick = (cuadro) => {
    let newCuadros = [...cuadros];
    newCuadros.splice(cuadro, 1, turno);
    setCuadros(newCuadros);
    checkGanador(newCuadros);
  };

  return (
    <div className="container">
      <Tablero
        cuadrosGanadores={cuadrosGanadores}
        turno={turno}
        cuadros={cuadros}
        onClick={handleClick}
      />
    </div>
  );
};

export default App;
