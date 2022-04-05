import React, { useEffect, useState} from 'react';
import { ItemDetail } from './ItemDetail';

const ItemDetailContainer = () => {
    // const item = [{"id":34234,"name":"Moto E20","price":22999,"storage":"32 GB","ram":"2 GB","stock":25,"url":"https://http2.mlstatic.com/D_NQ_NP_2X_832761-MLA48048712904_102021-F.webp"}];
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    // const promesa = new Promise((res, rej) => {
    //     setTimeout(() => {
    //         res(item);            
    //         }, 1500)
    // });
    // useEffect(() => {

    //     promesa.then((product) =>{
    //         setProduct(product);
    //     }).catch((error) => {
    //         console.error('Error: ', error);
    //     }).finally(() => {
    //         setLoading(false);
    //     })
    // }, [])

    useEffect(() => {
        const url = "https://mocki.io/v1/7fcc394d-27bb-4ee7-b193-1bce5067eeda";
        
        const getitem = () =>{
            fetch(url)
                .then(data => data.json())
                .then((data) => {
                    console.log(data)
                    setProduct(data)
                }).catch(() => {
                    console.log("Se detectó un error.")
                })
                .finally(() => {
                    setLoading(false);
                })            
        }
        getitem()
    }, []);

    return (
        loading
            ? (
                <p>Detalles</p>
            )
            : (
                <div style={containerDetail}>
                    <ItemDetail product={product} />
                </div>)
    )
}

export default ItemDetailContainer

const containerDetail = {
    margin: 30,
    display: 'flex',
    justifyContent: 'center',
}