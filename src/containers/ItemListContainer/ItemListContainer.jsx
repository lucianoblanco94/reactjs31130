import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import './itemlist.css'
// import { Loading } from '../../components/loading/Loading';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { category } = useParams();

    // async await igual que item detail
    useEffect(() => {
        const url = "https://fakestoreapi.com/products"
        ? `https://fakestoreapi.com/products/category/${category}`
        : "https://fakestoreapi.com/products";

        const getItems = async () =>{
            try {
                const res = await fetch(url);
                const data = await res.json();
                setProducts(data);
            } catch {
                setError(error)
            } finally {
                setLoading(false);
            }
        }
        getItems();
    }, [category])

    return (
        <>

            <div className='container-title'>
                <div className='grad-border'>
                    <div className='grad-box' >
                        <h2 className='welcome'>{greeting}</h2>
                    </div>
                </div>
            </div>
            {(loading
                ? (
                    <div>
                        {/* <Loading /> */}
                        Hola
                    </div>
                ) : error ?
                    <h2>Error</h2>
                : (<div className='container'>
                    <ItemList products={products} />
                </div>
                ))}
        </>
    )
}

export default ItemListContainer

/* Fijarse xq no funciona
useEffect (() => {
    const intervalo = setInterval(() => {
        console.log("ping");
    }, 1000);
    return () => {
        clearInterval(intervalo);
    }
}, [])

const [productos, setProductos] = useState([])    
    useEffect (() => {        
        promesa.then((productos) => {
            setProductos(productos);
        }).catch(() => {
            console.log("Error")
        })
    }, [])

    Es lo mismo que lo de arriba
    const promesa2 = fetch()
    fetch()
    .then((data) => {console.log(data)})
    .catch(() => {console.log("Error")})



Con api

const url = "";
if(category){
    url = (comillainvertida) urlconcategory${category};
}else {
    url= "url producto generales"
}
fetch(url)

async/await
  const getitems = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
    }

    useEffect(() => {

        getitems();
      
    }, []); */