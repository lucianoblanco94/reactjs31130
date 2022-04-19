import React, { useEffect, useState } from 'react'

export const PruebaAsync = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getitems = async () => {
        try{

            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        }
        catch {
            setError(true)
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(() => {

        getitems();
      
    }, []);


    return (
        <div>
            {
                loading ?
                <h1>Cargando...</h1>
                : 
                    error ? 
                        <h2>Lo sentimos, hubo un error.</h2>
                    :products.map((product) => {
                    return (
                        <div key={product.id}>
                            <h1>{product.title}</h1>
                            <span>$ {product.price}</span>
                            <p> {product.description} </p>
                            <p>{product.category}</p>
                            {/* <img src={product.image} alt={product.title} /> */}
                        </div>
                    )
                })
            }
            
        </div>
    )
}

/* {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    } */