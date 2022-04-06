import React, {useState, useEffect} from 'react'
import { InitialProducts } from '../../mock/InitialProducts'
import Category from './Category'
import './Categories.css'


const CategoryContainer = () => {
    const promesa = new Promise((res, rej) => {
        setTimeout(() => {
            res(InitialProducts);
        }, 1500);
    });

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        promesa.then((categorias) => {
            setCategorias(categorias);
        }).catch((error) => {
            console.log("Hemos encontrado un error", error)
        })
    }, [])

    const item = categorias.map((category) => {
        return (
        
            <div className='box-shadow d-flex mx-auto'>
                <div>
                    <div className='item-content'>
                        <a href="#">
                            <img src={category.icon} alt={category.title} />
                            <span>{category.title}</span>
                        </a>
                    </div>
                </div>
            </div> 
    )
    })

    return (
        <Category product={item} />
    )
}

export default CategoryContainer