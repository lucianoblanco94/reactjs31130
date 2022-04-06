import React from 'react';
import './Categories.css'

const CategoryItem = (products) => {
    return (
        <div className='container-category'>
            {products}
        </div>
    )
}
export default CategoryItem