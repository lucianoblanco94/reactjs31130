import React from 'react';

export const ItemDetail = ({ product }) => {
   
        return (
            <div style={containerDetail}>
                    {product}
            </div>)
}

const containerDetail = {
    margin: 30,
    display: 'flex',
    justifyContent: 'center',
}