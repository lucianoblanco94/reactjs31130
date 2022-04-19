import Item from './Item';
import { ItemCount } from '../../components/count/ItemCount';
import './itemlist.css'

const ItemList = ({products}) => {

    const onAdd = (count) => {
        console.log(`Estas comprando ${count}`);
    };

    const element = products.map((element,index) => {
        return (
            <>
            <div className="card" key={index}>
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
                </div>
                <div className='card-col'>
                    <p>{element.description}</p>
                    <ItemCount stock={element.rating.count} initial={0} onAdd={onAdd} />
                </div>




                {/* <div className='img-item'> */}
                {/* <img src={element.src} alt={element.alt} className='card-img' /> */}
                {/* </div> */}
                    {/* <div className="card-body">
                        <h5 className="card-title">{element.title}</h5>
                        <p className="card-text">${element.price}.</p>
                        <a href="#" className="btn btn-primary">See more</a>
                        <ItemCount stock={10} initial={0} onAdd={onAdd} />
                    </div> */}
            </div>
            </>
        )
    })

    return (
        <>
            <Item producto={element} />

        </>
    )  
}



export default ItemList

