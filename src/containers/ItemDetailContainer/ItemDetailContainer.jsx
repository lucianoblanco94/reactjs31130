import React, { useEffect, useState} from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { id } = useParams();

    const getdetails = async () => {
        try{
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
        }
        catch {
            setError(true);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getdetails();
                  
    }, [id]);


    return (
        
        loading
            ? <h2>Cargando ...</h2>
            : error 
            ?<h2>Lo sentimos, un error.</h2>
            : <ItemDetail product={product} />
    )
}

export default ItemDetailContainer

