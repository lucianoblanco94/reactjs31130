import React from 'react';

export const ItemDetail = ({ product }) => {
   
    return (
        <div style={itemStyle} key={product.id}>
            <h4 style={itemTitle}>{product.title}</h4>
            <img style={imagen} src={product.image} alt={product.title} />
            <div style={label}>
                <span style={details}>$ {product.price}</span>
            </div>
            <div style={label}>
                <p style={details}>Stock:</p>
                <span style={details}>{product.count}</span>
            </div>
            <div style={label}>
                <p style={details}>ID:</p>
                <p style={details}>{product.id}</p>
            </div>
            <div style={label}>
                <p style={details}>Descripcion:</p>
                <span style={details}>{product.description}</span>
            </div>
            <div style={label}>
                <p style={details}>Category:</p>
                <span style={details}>{product.category}</span>
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