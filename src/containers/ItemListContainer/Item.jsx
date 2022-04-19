import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Item = ({ producto }) => {

    return (
        <>
            <div className='container-cards'>

                {producto}

            </div>

        </>
    )
}


export default Item

