import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import {InitialProducts} from '../../mock/InitialProducts';
// import { Loading } from '../../components/loading/Loading';

const ItemListContainer = ({greeting}) => {

    const promesa = new Promise((res, rej) => {
        setTimeout(() => {
            res(InitialProducts);            
            }, 1500)
    });
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        promesa.then((products) =>{
            setProducts(products);
        }).catch((error) => {
            console.error('Error: ', error);
        }).finally(() => {
            setLoading(false);
        })
    }, [])

    return  (
        <>
        
        <div style={container}>
            <div style={gradientBorder}>
                <div style={gradientBox} >
                <h2 style={welcome}>{greeting}</h2>
            </div>
            </div>
        </div>
        {(loading
        ? (
        <div>
            {/* <Loading /> */}
            Hola
        </div>
        )
        :(<ItemList products={products} />))}
        </>
    )
}

export default ItemListContainer

const container = {
    display:'flex',
    justifyContent:'center',
    width: '70%'
}
const gradientBorder = {
    backgroundImage: 'linear-gradient(45deg, #e69d43, #000)',
    backgroundRepeat: 'repeat',
    padding: 10,
    margin: 20,
    borderRadius:7,
    width: '100%',
    textAlign:'center',
}

const gradientBox = {
    backgroundColor: '#f6f6f6',
    padding: 2,
    display: 'flex',
    justifyContent: 'center',
    borderRadius:7,         

}

const welcome = {
    fontSize: 48,
    backgroundImage: 'linear-gradient(45deg, #111111, #e69d43)',
    webkitBackgroundClip: 'text',
    webkitTextFillColor: 'transparent',  
}

// Fijarse xq no funciona
// useEffect (() => {
//     const intervalo = setInterval(() => {
//         console.log("ping");
//     }, 1000);
//     return () => {
//         clearInterval(intervalo);
//     }
// }, [])

// const [productos, setProductos] = useState([])    
    // useEffect (() => {        
    //     promesa.then((productos) => {
    //         setProductos(productos);
    //     }).catch(() => {
    //         console.log("Error")
    //     })
    // }, [])

    // Es lo mismo que lo de arriba
    // const promesa2 = fetch()
    // fetch()
    // .then((data) => {console.log(data)})
    // .catch(() => {console.log("Error")})
