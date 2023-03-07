import { useEffect, useState } from 'react';
import { Header, Modal, ListadoGastos, Filtros } from './components/';
import { generateId } from './helpers/';
import imgNewBudget from './assets/nuevo-gasto.svg'


function App() {
  const LOCALS_PPRESPUESTO = Number(localStorage.getItem('presupuesto')) ?? 0;
  const LS_GASTOS = localStorage.getItem('spents') ? JSON.parse(localStorage.getItem('spents')) : [];

  const [ presupuesto, setPresupuesto ] = useState(LOCALS_PPRESPUESTO);
  const [ isValidPresupuesto , setIsValidPresupuesto] = useState(false);

  const [ modal, setModal ] = useState(false);
  const [animarModal, setAnimarModal ] = useState(false);

  const [ spents, setSpents ] = useState(LS_GASTOS);
  const [ gastoEditar, setGastoEditar ] = useState({});

  const [ filtros, setFiltros ] = useState('');
  const [ gastosFiltrados, setGastosFiltrados ] = useState([]);

  let EXISTE = Object.keys(gastoEditar).length;

  useEffect(() => {
    if( EXISTE > 0){
      setModal(true)
      setTimeout(() => {
        setAnimarModal(true)
      }, 500);
      
    }
  }, [ gastoEditar ]);

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0);
  }, [ presupuesto ]);

  useEffect(() => {
    const PRESUPUESTO_LS = LOCALS_PPRESPUESTO ?? 0;

    if(PRESUPUESTO_LS > 0) {
      setIsValidPresupuesto(true)
    }
  }, [])

  useEffect(() => {
    const GASTOS_LS = localStorage.setItem('spents', JSON.stringify(spents) ?? []);
  }, [ spents ])

  useEffect(() => {
    if(filtros) {
      const FILTRAR = spents.filter(filtraGasto => filtraGasto.category === filtros);
      setGastosFiltrados(FILTRAR);
    }
  }, [ filtros ])

  const handleModalBudget = () => {
    setModal(true)

    setGastoEditar({});

    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  /**
    * Campos a llenar para el objeto/parametro de gasto
    * @param { Object } gasto - Informacion de nuestro gasto guardado
  */
  const saveSpent = gasto => {
    // return gasto;
    if(gasto.id) {
      //Editar el gasto
      const EDITAR_GASTO = spents.map(gastoState =>  gastoState.id === gasto.id ? gasto : gastoState);
      setSpents(EDITAR_GASTO);
      setGastoEditar({})

    }else {

      gasto.id    = generateId();
      gasto.fecha = Date.now();
      setSpents([...spents, gasto]);

    }

    // Sino, creara un nuevo gasto

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500)
  } 

  const deleteSpent = id => {
    const GASTOS_ACTUALIZADOS = spents.filter(spentsActuales => spentsActuales.id !== id);
    setSpents(GASTOS_ACTUALIZADOS);
  }

  return (
    <div className={ modal ? 'fijar' : ''}>
      <Header 
        spents = { spents }
        setSpents = { setSpents }
        presupuesto    = { presupuesto }
        setPresupuesto = { setPresupuesto }
        isValidPresupuesto = { isValidPresupuesto }
        setIsValidPresupuesto = { setIsValidPresupuesto }
      />

      { isValidPresupuesto &&  (

        <>
          <main>
            <Filtros  
              filtros = { filtros }
              setFiltros = { setFiltros }
            />
            <ListadoGastos 
              spents = { spents }
              setGastoEditar = { setGastoEditar }
              deleteSpent = { deleteSpent }
              filtros = { filtros }
              gastosFiltrados = { gastosFiltrados }
            />
          </main>
          <div className='nuevo-gasto'>
            <img src={imgNewBudget} alt="icono imagen" onClick={handleModalBudget}/>
          </div>
        </>

      )}

      {modal && <Modal 
        setModal = { setModal } 
        animarModal = { animarModal } 
        setAnimarModal = { setAnimarModal }
        saveSpent = { saveSpent }
        gastoEditar = { gastoEditar }
        setGastoEditar = { setGastoEditar }
      /> }
    </div>
  );
}

export default App
