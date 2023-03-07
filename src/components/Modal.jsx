import { useEffect, useState } from 'react';
import iconCloseModal from '../assets/cerrar.svg';
import { Mensaje } from '../components';

const Modal = ({ setModal, 
                 animarModal, 
                 setAnimarModal, 
                 saveSpent, 
                 gastoEditar,
                 setGastoEditar}) => {

  let EXISTE = Object.keys(gastoEditar).length;

  const [ spentName, setSpentName] = useState('');
  const [ amount, setAmount]       = useState('');
  const [ category, setCategory ]  = useState('');
  const [ mensaje, setMensaje ]    = useState('');
  const [ fecha, setFecha ]        = useState('');
  const [ id, setId ]              = useState('');
  
  useEffect(() => {

    if (Object.keys(gastoEditar).length > 0){
      setSpentName(gastoEditar.spentName);
      setAmount(gastoEditar.amount);
      setCategory(gastoEditar.category);
      setFecha(gastoEditar.fecha);
      setId(gastoEditar.id);
    }

  }, [])

  const handleModalClose = () => {
    setAnimarModal(false);
    setGastoEditar({})
    setTimeout(() => {
      setModal(false);
    }, 500)
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(!(spentName && amount && category)) {
      setMensaje('Faltan datos/campos por llenar')

      setTimeout(() => {
        setMensaje('')
      }, 3000);
      return;
    }

    saveSpent({ spentName, amount, category, id, fecha });

  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={iconCloseModal} alt="Icono de Cerrar" onClick={handleModalClose}/>
      </div>

      <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`} onSubmit={handleSubmit}>

        {mensaje && <Mensaje tipo="error"> {mensaje} </Mensaje>}

        <legend>{ !EXISTE ? 'NUEVO GASTO' : 'EDITAR GASTO'}</legend>

        <div className="campo">
          <label htmlFor='nombre'>Nombre Gasto:</label>
          <input type="text" id='nombre' 
            placeholder='Agrega el nombre del Gasto' 
            value = { spentName }
            onChange = { e => setSpentName(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor='cantidad'>Cantidad:</label>
          <input type="number" id='cantidad' 
            placeholder='Agrega la cantidad del Gasto'
            value= { amount }
            onChange = {e => setAmount(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor='categoria'>Categoría:</label>
          <select id="categoria" value={category} onChange={e => setCategory(e.target.value)}>
            <option value="" unselectable='off'>-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Varios Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>

          <input type="submit" value={!EXISTE ? 'Añadir Gasto' : 'Editar gasto 😊'}/>
        </div>
      </form>
    </div>
  );
}

export { Modal };
