import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import phones from '../multimedia/img/phones.jpg'
import { flexbox } from '@mui/system';


const Item = ({producto}) => {

    return (
        <>
            <div style={contenedor}>
                {producto}
            </div>

        </>
    )
}


export default Item

const contenedor = {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'wrap row'
}