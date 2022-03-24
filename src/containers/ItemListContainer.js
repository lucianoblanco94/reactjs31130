import { width } from '@mui/system';
import React, { useEffect } from 'react';
import { ItemCount } from '../components/count/ItemCount'

const ItemListContainer = ({greeting}) => {

    const container = {
        display:'flex',
        justifyContent:'center',
    }
    const gradientBorder = {
        backgroundImage: 'linear-gradient(45deg, #e69d43, #000)',
        backgroundRepeat: 'repeat',
        padding: 10,
        margin: 20,
        borderRadius:7,
        width: '70%',
        textAlign:'center',
    }

    const gradientBox = {
        backgroundColor: '#f6f6f6',
        padding: 2,
        display: 'flex',
        justifyContent: 'center',
        borderRadius:7,         

    }

    const welcome = {
        fontSize: 48,
        backgroundImage: 'linear-gradient(45deg, #111111, #e69d43)',
        webkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent',  
    }

    const onAdd = (count) => {
        console.log(`Estas comprando ${count}`);
    };

    return  (
        <>
        <div style={container}>
            <div style={gradientBorder}>
                <div style={gradientBox} >
                <h2 style={welcome}>{greeting}</h2>
            </div>
            </div>
        </div>
        <ItemCount stock={10} initial={0} onAdd={onAdd} />
        </>
    )
}

export default ItemListContainer
