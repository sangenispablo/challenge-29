import "./Tablero.css";

import Cuadro from "../Cuadro/Cuadro";

const Tablero = ({ cuadrosGanadores, turno, cuadros, onClick }) => {
  const crearCuadros = (valores) =>
    valores.map((valor) => (
      <Cuadro
        ganador={cuadrosGanadores.includes(valor)}
        turno={turno}
        onClick={() => onClick(valor)}
        valor={cuadros[valor]}
        key={`cuadro_${valor}`}
      />
    ));

  return (
    <div className="tablero">
      <div className="fila">{crearCuadros([0, 1, 2])}</div>
      <div className="fila">{crearCuadros([3, 4, 5])}</div>
      <div className="fila">{crearCuadros([6, 7, 8])}</div>
    </div>
  );
};

export default Tablero;
