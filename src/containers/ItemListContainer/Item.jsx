import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


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