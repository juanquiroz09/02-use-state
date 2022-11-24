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
   const cambiarNombre = (nameDefault) => {
    setNombre(nameDefault);
};
  return (
    <div>
        <h3>Componente mi primer estado</h3>
        <h1>Mi nombre es: <strong className={nombre.length >= 4 ? 'green' : 'red'}>{nombre}</strong></h1>
        &nbsp;
        <input type="text" onChange={ e => cambiarNombre(e.target.value)} placeholder="Ingresa el nombre" />
        &nbsp;
        <button onClick={ e => {
          console.log("El valor guardado en tu estado es: " + nombre)
        }}>Mostrar Valor por Consola</button>
        &nbsp;     
        <button onClick={ e => cambiarNombre(nombre)}>Cambiar Nombre</button>
    </div>
  )
}

export default MiPrimerEstado