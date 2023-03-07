import { dateEs } from '../helpers/';

import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import IconoAhorro from '../assets/icono_ahorro.svg';
import IconoCasa from '../assets/icono_casa.svg';
import IconoComida from '../assets/icono_comida.svg';
import IconoGastos from '../assets/icono_gastos.svg';
import IconoOcio from '../assets/icono_ocio.svg';
import IconoSalud from '../assets/icono_salud.svg';
import IconoSubs from '../assets/icono_suscripciones.svg';

const Gasto = ({ spent, setGastoEditar, deleteSpent }) => {

  const diccionarioIconos = {
    ahorro: IconoAhorro,
    comida: IconoComida, 
    casa: IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSubs,
  }

  const { spentName, amount, category, id ,fecha } = spent;
  
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(spent)}>Editar</SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => deleteSpent(spent.id) } destructive = {true} >Eliminar</SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem 
        leadingActions = { leadingActions() }
        trailingActions = { trailingActions() }
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={diccionarioIconos[category]} alt="" / >
            <div className="descripcion-gasto">
              <p className="categoria">{ category }</p>
              <p className="nombre-gasto">{ spentName }</p>
              <p className="fecha-gasto">Agregado el: <span>{ dateEs(fecha) }</span></p>
            </div>
          </div>
          <p className="cantidad-gasto">${ amount }</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>

  );
}

export { Gasto };
