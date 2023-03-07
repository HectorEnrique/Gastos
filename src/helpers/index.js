/**
  * Genera un ID aleatorio
  * @returns { String } un ID para colocar en la información
*/
export const generateId = () => {
  const RANDOM = Math.random().toString(36).substring(2)
  const DATE = Date.now().toString(36)
  return RANDOM + DATE;
}


/**
  *  Convierte los milisegundos en una fecha con formato
  * @param { Date } ms - Fecha en milisegundos (Date.now())
  * @returns { Date }  fecha convertida a un formato (04 de Marzo de 2023)
*/
export const dateEs = ms => {
  const DATE = new Date(ms);
  const OPTIONS = {
    year:'numeric',
    month:'long',
    day:'2-digit',
  }
  return DATE.toLocaleDateString('es-ES',OPTIONS)
}
