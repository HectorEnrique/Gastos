import { Gasto } from '../components/';

const ListadoGastos = ({ spents, setGastoEditar, deleteSpent, filtros, gastosFiltrados }) => {

  return (
    <div className="listado-gastos contenedor">
      {
        filtros ? (
          <> 
            <h2>{ !gastosFiltrados.length ? 'No hay gastos de esta categoría' : 'tus gastos filtrados'}</h2>
          {
            gastosFiltrados.map(spent => (
              <Gasto spent = { spent } key = {spent.id} setGastoEditar = { setGastoEditar } deleteSpent = { deleteSpent } />
            ))
          }
          </>
          ):( 
            <>
            <h2>{ !spents.length ? 'No tienes gastos... Agrega uno' : 'tus gastos'}</h2>
            {
             spents.map(spent => (
              <Gasto spent = { spent } key = {spent.id} setGastoEditar = { setGastoEditar } deleteSpent = { deleteSpent } />
              ))
          }
            </>
       )}
    </div>
  );
}

export { ListadoGastos };
