import { height } from '@mui/system';
import React, { useState, useEffect } from 'react';

export const ItemCount = ({stock, initial, onAdd}) => {
  
    
    const[count, setCount] = useState(initial);
    // const[setup, setSetup] = useState(0);
    
    // useEffect(() => {
    //     console.log("Se ejecuto el useEffect");
    //     setTimeout(() => {
    //         setSetup(setup + 2);
    //         },2000)
    // }, [count]);

    const restClick = () => {
        (count > 0) 
        ? setCount(count - 1)
        : (console.log("No se puede seleccionar menos que 0"));
    };

    const addClick = () => {
        (count < stock) 
        ? setCount(count + 1)
        : (alert("Lo sentimos, no tenemos más que este stock"))
    };

    const addCart = () => {
       (count !== 0) 
       ? (onAdd(count))
       : (console.log('Agrega la cantidad a comprar'));
    };
    
    const container = {
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        margin: '10px 0',

    }

    const contador = {
        background: '#e69d43',
        padding: 5,
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'column',
        borderRadius:10,
        border: 'solid 3px #111111',
        boxShadow:'5px 5px'
    }

    const cardCount = {
        padding:5,
        backgroundColor: '#e69d43',
        width:'90%',
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        margin: 5
    }

    const box = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        padding: 5,
        width: '100%',
        height: 50,
        borderRadius:7
    }

    const button = {
        width: 34,
        height:34,
        textAlign: 'center',
        border:'solid 2px #111111'
    }

    const cartAdd = {
        backgroundColor: '#111111',
        color: '#f2f2f2',
        fontSize: 16,
        padding:5,
        margin:2,
        width: 'auto',
        border: 'black solid 1px',
        borderRadius:7,
    }

    return (
        <div style={container}>
            <div style={contador}>
                <div style={cardCount}>
                    <div style={box}>
                        <button onClick={restClick} style={button}>-</button>
                        <p>{count}</p>
                        <button onClick={addClick} style={button}>+</button>
                    </div>
                </div>
                <div >
                    <button onClick={addCart} style={cartAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}

 // const [setup, setSetup] = useState(0);
    //   useEffect(() => {
    //     console.log('ejecuta useeffect')
    //     setTimeout(() => {
    //         setSetup(setup +1);
    //     }, 1000)
    // }, [count])

    // setTimeout(() => {
    //     codigo a aplicar
    // }, #tiempo)