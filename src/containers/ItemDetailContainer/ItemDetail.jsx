import React from 'react';

export const ItemDetail = ({ product }) => {
   
        return (
            <div className='itemDetail' key={product.id}>
                <h4>{product.name}</h4>
                <img src={product.url} alt={product.name} />
                <div style={label}>
                    <p style={details}>Price</p>
                    <span style={details}>{product.price}</span>
                </div>
                <div style={label}>
                    <p style={details}>Stock</p>
                    <span style={details}>{product.stock}</span>
                </div>
                <div style={label}>
                    <p style={details}>ID</p>
                    <p style={details}>{product.id}</p>
                </div>
                <div style={label}>
                    <p style={details}>Almacenamiento</p>
                    <span style={details}>{product.storage}</span>
                </div>
                <div style={label}>
                    <p style={details}>RAM</p>
                    <span style={details}>{product.ram}</span>
                </div>
            </div>
        )
    }
    


const label = {
    display: 'flex',
    justifiContent: 'start',
    flexFlow: 'nowrap row',
    padding: 10,
    backgroundColor: '#111111',
}

const details = {
    fontSize: 16,
    color: '#e69d43'

}