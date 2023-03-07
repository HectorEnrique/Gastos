import { NuevoPresupuesto, ControlPresupuesto } from '../components/';

const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, spents, setSpents }) => {
  return (
    <header>
      <h1>Planificador de Presupuestos</h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto 
          spents = { spents }
          presupuesto = { presupuesto }
          setSpents = { setSpents }
          setPresupuesto = { setPresupuesto }
          setIsValidPresupuesto = { setIsValidPresupuesto }
        />

      ) : (
        <NuevoPresupuesto 
          setSpents      = { setSpents }
          presupuesto    = { presupuesto }
          setPresupuesto = { setPresupuesto }
          setIsValidPresupuesto = { setIsValidPresupuesto }
        />
      )}

    </header>
  );
}

export { Header };
