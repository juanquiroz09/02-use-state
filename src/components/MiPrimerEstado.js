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
    setNombre(nameDefault);
    console.log(e.target.value)
};
  return (
    <div>
        <h3>Componente mi primer estado</h3>
        <strong>{nombre}</strong>
        &nbsp;
        <button onClick= {e => {cambiarNombre(e, "Eloy")}}>Cambiar a Eloy</button>
        &nbsp;
        <input type="text" onKeyUp={ e => {cambiarNombre(e, e.target.value)}} />
    </div>
  )
}

export default MiPrimerEstado