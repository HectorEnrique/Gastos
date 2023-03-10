const Filtros = ({ filtros, setFiltros }) => {
  return (
    <div className="filtros sombra contenedor">
      <form >
        <div className="campo">
          <label>Filtrar Gastos</label>
          <select value={filtros}
                  onChange={e => setFiltros(e.target.value)}>
            <option value="">Todas categorías</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Varios Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  );
}
export { Filtros };
