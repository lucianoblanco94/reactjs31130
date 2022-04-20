import Item from './Item';
import { ItemCount } from '../../components/count/ItemCount';
import './itemlist.css'
import { Link} from 'react-router-dom'

const ItemList = ({products}) => {

    const onAdd = (count) => {
        console.log(`Estas comprando ${count}`);
    };

    
    const element = products.map((element) => {
        const URL= `/product/${element.id}`;
        return (
            <>
            <div className="card" key={element.id}>
                <div className='card-col'>
                {/* <img src={element.logo} alt="logo"  /> */}
                <h3>{element.title}</h3>

                <div className='card-info'>                    
                    <p className='card-text'><span className="card-price">${element.price}</span>
                    </p>
                    <p className='card-text'>ID:<span>{element.id} </span></p>
                    <p className='card-text'>Stock:<span>{element.rating.count} </span></p>
                    <p className='card-text'>Category:<span>{element.category} </span></p>
                </div>

                </div >
                <div className='card-thumb'>
                    <img  src={element.image} alt={element.title} className='card-img' />
                    <Link to={URL}>

                    <button className='btn-more'>See More</button>
                    </Link>
                </div>
                <div className='card-col'>
                    <p>{element.description}</p>
                    <ItemCount stock={element.rating.count} initial={0} onAdd={onAdd} />
                </div>
            </div>
            </>
        )
    })

    return (
        <>
            <Item key={element.id} producto={element} />
        </>
    )  
}



export default ItemList

