import React, { useEffect, useState} from 'react';
import { ItemDetail } from './ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

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

    const item = product.map((element) => {
        return (
            <div style={itemStyle} key={element.id}>
                <h4 style={itemTitle}>{element.name}</h4>
                <img style={imagen} src={element.url} alt={element.name} />
                <div style={label}>
                    <p style={details}>Price:</p>
                    <span style={details}>$ {element.price}</span>
                </div>
                <div style={label}>
                    <p style={details}>Stock:</p>
                    <span style={details}>{element.stock}</span>
                </div>
                <div style={label}>
                    <p style={details}>ID:</p>
                    <p style={details}>{element.id}</p>
                </div>
                <div style={label}>
                    <p style={details}>Almacenamiento:</p>
                    <span style={details}>{element.storage}</span>
                </div>
                <div style={label}>
                    <p style={details}>RAM:</p>
                    <span style={details}>{element.ram}</span>
                </div>
            </div>
        )
    }) 

    return (
        loading
            ? (<p>Detalles</p>)
            : (<ItemDetail product={item} />)
    )
}

export default ItemDetailContainer

const label = {
    display: 'flex',
    justifiContent: 'start',
    flexFlow: 'nowrap row',
    padding: 10,
    margin: 2,
}

const details = {
    fontSize: 18,
    color: '#111111',
    margin: '0 5px 0 5px',
    fontWeight: 500,
}

const imagen = {
    width: '100%',
}

const itemStyle = {
    width: 250,
}
const itemTitle = {
    fontSize: 24,
    fontWeight: 600,
    textAlign: 'center',
}