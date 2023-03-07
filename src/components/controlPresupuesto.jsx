import { useEffect, useState } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({ presupuesto, spents }) => {

  const [ available, setAvailable ] = useState(0);
  const [ gastado, setGastado ] = useState(0);

  const [ porcentaje, setPorcentaje ] = useState(0);

  useEffect(() => {

    const TOTAL_AVAILABLE = spents.reduce((total, gasto) => gasto.amount + total, 0);
    const TOTAL_GASTADO = presupuesto - TOTAL_AVAILABLE;

    const REGLA_3 = ((( presupuesto - TOTAL_GASTADO ) / presupuesto) * 100).toFixed(2); 

    setGastado( TOTAL_AVAILABLE );
    setAvailable( TOTAL_GASTADO );

    setTimeout(() => {
      setPorcentaje(REGLA_3);
    }, 1000);

  }, [ spents ]);

  /**
   * Formatear Número a Dinero en USD
   * @param { Number } cantidad - a Ingresar
   * @returns { Number } Cantidad ya convertida
  */

  const formatearNumeros = (cantidad) => {

    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  }

  return (
    <div className = "contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        < CircularProgressbar 
          value = { porcentaje } 
          text = { `${porcentaje}% Gastado`}
          styles = {buildStyles({
            pathColor: porcentaje > 100 ? '#DC2626' : '#3B8DF6',
            trailColor: `#F5D5D5`,
            textColor: porcentaje > 100 ? '#DC2626' : '#3B8DF6',
            strokeLinecap: 'butt'
          })}
        />
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>{ formatearNumeros(presupuesto) }
        </p>
        <p className={`${available < 0 ? 'negativo' : ''}`}>
          <span>Disponible: </span>{ formatearNumeros(available) }
        </p>
        <p>
          <span>Gastado: </span>{ formatearNumeros(gastado) }
        </p>
      </div>
    </div>
  );
}

export { ControlPresupuesto };
