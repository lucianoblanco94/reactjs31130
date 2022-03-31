import React, { useEffect, useState } from 'react';
import Item from './Item';
import { ItemCount } from './count/ItemCount';
const ItemList = ({listProducts}) => {

    const onAdd = (count) => {
        console.log(`Estas comprando ${count}`);
    };

    const initial = [];
    const [productos, setProductos] = useState(initial);
    const [show, setShow] = useState(false);

    useEffect(() => {
        listProducts.then((prod) =>{
            setProductos(prod);
            setShow(!show);
        }).catch(() => {
            console.log('Error');
        })
    }, [])

    const element = productos.map((element,index) => {
        return (
            <div className="card" style={card} key={index}>
                <img src={element.src} style={cardImg} alt={element.alt} />
                    <div className="card-body">
                        <h5 className="card-title">{element.title}</h5>
                        <p className="card-text">${element.price}.</p>
                        <a href="#" className="btn btn-primary">See more</a>
                        <ItemCount stock={10} initial={0} onAdd={onAdd} />
                    </div>
            </div>
        )
    })

    return (
        <>
            <Item producto={element} />

        </>
    )  
}



export default ItemList

const card = {
    width: '18rem',
    padding:10,
    backgroundImage: 'linear-gradient(180deg, #e69d43, #2f2f2f)',
    backgroundRepeat: 'repeat',
    border: 'none',
    margin: 10,
}

const cardImg = {
    borderRadius:5,
    width:'100%',
}