import React from 'react';

const ItemListContainer = ({greeting}) => {

    const welcome = {
        margin: '20px 5px',
        color: '#e69d43',
        textDecoration: 'underline 3px #e69d43',      
    }

    return  (
    <h2 style={welcome}>{greeting}</h2>
    )
}

export default ItemListContainer