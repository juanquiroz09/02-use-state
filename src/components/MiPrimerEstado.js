import React, {useState} from 'react'


const MiPrimerEstado = () => {
    /*
    //Problematica
    let nombre = "Juan";
    const cambiarNombre = () => {
        nombre = "Elias";
    };
    */
   const [nombre, setNombre] = useState("Juan Quiroz");
   const cambiarNombre = (e,nameDefault) => {
    setNombre("Elias")
};
  return (
    <div>
        <h3>Componente mi primer estado</h3>
        <strong>{nombre}</strong>
        &nbsp;
        <button onClick={cambiarNombre}>Cambiar</button>
    </div>
  )
}

export default MiPrimerEstado