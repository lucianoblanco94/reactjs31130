import React from 'react';
import {ItemCount} from '../../components/count/ItemCount'
import { Link } from 'react-router-dom'
import './itemdetail.css'

export const ItemDetail = ({ product }) => {
    const onAdd = (count) => {
        console.log(`Estas comprando ${count}`);
    }; 
    return (
        <div className='container-detail'>
            <h4 className='title-product'>{product.title}</h4>
        <div className='item-detail' key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className='info-detail'>

            <div className='label-detail'>
                <span className='info-product'>$ {product.price}</span>
            </div>
            <div className='label-detail'>
                <p className='detail-product'>Stock:</p>
                <span className='info-product'>{product.rating.count}</span>
            </div>
            <div className='label-detail'>
                <p className='detail-product'>ID:</p>
                <p className='info-product'>{product.id}</p>
            </div>
            <div className='label-detail'>
                <p className='detail-product'>Description:</p>
                <span className='info-product'>{product.description}</span>
            </div>
            <div className='label-detail'>
                <p className='detail-product'>Category:</p>
                <span className='info-product'>{product.category}</span>
            </div>
            </div>

        </div>
        <div className='sell-container'>
            <ItemCount stock={product.rating.count} initial={0} onAdd={onAdd} />
            <Link to="/cart">
            <button className='btn-sell'>Finalizar compra</button></Link>

        </div>

        </div>
    )
}

const containerDetail = {
    margin: 30,
    display: 'flex',
    justifyContent: 'center',
}
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