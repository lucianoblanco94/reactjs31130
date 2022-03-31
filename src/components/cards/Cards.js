import React from 'react';


const Cards = (props) => {
    const containerSection = {
        width:'100%',
        display: 'flex',
        flexFlow: 'row wrap'
    }
    const cardContainer = {
        height: 'auto',
        width: 180,
        borderRadius: 10,
        padding: 4,
        margin: 20,
        backgroundImage: 'linear-gradient(180deg, #e69d43, #2f2f2f)',
        backgroundRepeat: 'repeat'
    }

    const card = {
        backgroundImage: 'linear-gradient(180deg, #e69d43, #2f2f2f)',
        backgroundRepeat: 'repeat',
        height: '100%',
        borderRadius:7,

    }
    const imgCard = {
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        borderRadius:20
    }

    const imgThumb = {
        width: '100%'
    }

    const sellButton = {
        width:'100%',
        height:25,
        border: 'solid 1px #e69d43',
        backgroundColor: '#e69d43',
        fontSize: 16,
        textAlign: 'center',
        fontWeight:600,
    }

    return (
        <div style = {containerSection}>
        {props.productos.map((element, index) => {
               return (
                    <div style={cardContainer} key={index}>
                        <div style={card}>
                            <div style={imgCard}>
                                <img src={element.src} style={imgThumb} alt={element.alt} />
                            </div>
                            <div className='card-info'>
                                <h3 className='card-title'>{element.title}</h3>
                                <p className='card-text'></p>
                            </div>
                            <div>
                                <button style={sellButton}>Comprar</button>
                            </div>
                          
                        </div>
                    </div>     
        )})
        }
        </div>


    )
}



export default Cards