import React, { useState } from 'react';

export const MiComponente = () => {
    // Desestructuracion. Forma de declararlo
    const [contador, setContador] =  useState(0);
    // const [users, setUsers] = useState([]);
  
    const handlerClick = () => {
        setContador(contador + 1)
        // setUsers([...users,{name:"pepe"}]) // lo vamos a usar mucho para agregar al carrito el spread
        
    };

    const restador = () => {
        setContador(contador -1 );
    };

    const reset = () => {
        setContador(0);
    }
    

    return(
        <>
            <h1>{contador}</h1>
            <button onClick={handlerClick}>Agrega</button>
            <button onClick={restador}>Quita</button>
            <button onClick={reset}>Reset</button>
            
        </>
    )
}
