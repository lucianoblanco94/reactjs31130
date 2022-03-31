import React from 'react';
import { ItemCount } from '../components/count/ItemCount';
import ItemList from '../components/ItemList'

const productosIniciales = [
    { title: "Phones", src: "../multimedia/img/phones.jpg", alt: "phones", stock: 10, initial: 0, price: 1000 },
    { title: "Cameras", src: "../multimedia/img/cameras.jpg", alt: "cameras", stock: 10, initial: 0, price: 800 },
    { title: "Notebooks", src: "../multimedia/img/notebooks.jpg", alt: "notebooks", stock: 10, initial: 0, price: 2000 },
    { title: "Drones", src: "../multimedia/img/drones.jpg", alt: "drones", stock: 10, initial: 0, price: 4000 },
    { title: "Pc Gamer", src: "../multimedia/img/pcgamer.jpg", alt: "pc gamer", stock: 10, initial: 0, price: 1500 },
    { title: "Watches", src: "../multimedia/img/watches.jpg", alt: "watches", stock: 10, initial: 0, price: 400 }
]
const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(productosIniciales);            
        },2000)
});

const ItemListContainer = ({greeting}) => {

    const onAdd = (count) => {
        console.log(`Estas comprando ${count}`);
    };

    return  (
        <>
        <div style={container}>
            <div style={gradientBorder}>
                <div style={gradientBox} >
                <h2 style={welcome}>{greeting}</h2>
            </div>
            </div>
        </div>
        <ItemList listProducts={promesa} />
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
