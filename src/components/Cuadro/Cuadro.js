import "./Cuadro.css";

import classNames from "classnames";

const Cuadro = ({ turno, valor, onClick, ganador }) => {
    
  const handleClick = () => {
    // Si el turno le pertenece a alguien es decir !== null
    // el turno = a null es por que ya no se puede jugar
    // y ademas el valor es null puede ejecutar el click
    turno !== null && valor === null && onClick();
  };

  let classCuadro = classNames({
    cuadro: true,
    [`cuadro--${valor}`]: valor !== null,
    ganador: ganador,
  });

  return <div onClick={() => handleClick()} className={classCuadro}></div>;
};

export default Cuadro;
