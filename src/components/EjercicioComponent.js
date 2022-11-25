import React, {useState} from 'react'
import { PropTypes } from 'prop-types';

const EjercicioComponent = ({year}) => {
    const [yearState, setYear] = useState(year);

    const nextYear = e => {
        setYear(yearState + 1);
    };
    const beforeYear = e => {
        let operation = yearState -1;
        setYear(operation);
    };
    const changeYear = (e) => {
        let dato = parseInt(e.target.value);
        if (Number.isInteger(dato)) {
            setYear(dato);
        }else{
            setYear(year)
        }
      
    }
  return (
    <div>
        <h1>Ejercicios con Eventos y useState</h1>
        <strong className='label label-green'>{yearState}</strong>
        <br/>
        <br/>
        <button onClick={beforeYear}>Ir al año anterior</button>
        &nbsp;
        <button onClick={nextYear}>Ir al siguiente año</button>
        <p>
            Cambiar año:
            <input onChange={changeYear} type="text" placeholder='Cambia el año'></input>
        </p>
    </div>
  )
}

EjercicioComponent.propTypes = {
    year: PropTypes.number.isRequired
}

export default EjercicioComponent
