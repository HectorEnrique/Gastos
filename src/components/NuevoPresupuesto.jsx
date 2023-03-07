import { useState } from "react";
import { Mensaje } from '../components'

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {

  const [ mensaje, setMensaje ] = useState('');

  const handlePresupuesto = e => {
    e.preventDefault();

    if(!presupuesto || presupuesto <= 0 || presupuesto === null) {
      setMensaje('No es un presupuesto valido');
      return;
    }

    setMensaje('');
    setIsValidPresupuesto(true);
  }

  return (
    <div className='contenedor contenedor-presupuesto sombra'>
      <form  className="formulario" onSubmit={handlePresupuesto}>
        <div className="campo">
          <label htmlFor="">Definir presupuesto: </label>
          <input type="number" 
            className="nuevo-presupuesto" 
            placeholder="Añade tu presupuesto" 
            value={presupuesto}
            onChange = {e => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );

}

export { NuevoPresupuesto };
