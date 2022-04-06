import React, {useState, useEffect} from 'react'
import { InitialProducts } from '../../mock/InitialProducts'
import Category from './Category'
import './Categories.css'
import 'bootstrap/dist/css/bootstrap.min.css';



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

    const item = categorias.map((category, index) => {
        return (
            <div className='category-list' key={index}>
                <div className='category-content'>
                    <div className='item-content'>
                        <a href="#">
                            <i className='icon'></i>
                            {/* <img src="" className={category.icon} alt={category.title} /> */}
                            <span>{category.title}</span>
                        </a>
                    </div>
                </div>
            </div> 
    )
    })

    return (
        <Category products={item} />
    )
}

export default CategoryContainer