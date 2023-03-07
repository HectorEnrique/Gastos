import { NuevoPresupuesto, ControlPresupuesto } from '../components/';

const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, spents }) => {
  return (
    <header>
      <h1>Planificador de Presupuestos</h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto 
          spents = { spents }
          presupuesto = { presupuesto }
        />

      ) : (
        <NuevoPresupuesto 
          presupuesto    = { presupuesto }
          setPresupuesto = { setPresupuesto }
          setIsValidPresupuesto = { setIsValidPresupuesto }
        />
      )}

    </header>
  );
}

export { Header };
