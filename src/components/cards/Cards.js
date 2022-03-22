import React from 'react';

const Cards = () => {

    const cardContainer = {
        height: 300,
        width: 180,
        backgroundColor: '#e69d43',
        borderRadius: 7,
        padding:5,
        margin: 20,
    }

    const card = {
        backgroundColor: '#000',
        height: '100%',

    }
    const imgCard = {
        width: 'auto',
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
    }

// Seguir con los estilos de la card luego
    const prodCat = [
        {title: "Phones", src: "../../multimedia/img/phones.jpg", alt:"phones" },
        {title: "Cameras", src: "../../multimedia/img/cameras.jpg", alt:"cameras" },
        {title: "Notebooks", src: "../../multimedia/img/notebooks.jpg", alt:"notebooks" },
        {title: "Drones", src: "../../multimedia/img/drones.jpg", alt:"drones" },
        {title: "Pc Gamer", src: "../../multimedia/img/pcgamer.jpg", alt:"pc gamer" },
        {title: "Watches", src: "../../multimedia/img/watches.jpg", alt:"watches" },
    ]

    return (
    <div style={cardContainer}>
        <div style={card}>
            <div style={imgCard}>
                <img src="" alt="" />
            </div>
            <div className='card-info'>
                <h3 className='card-title'></h3>
                <p className='card-text'></p>
            </div>
        </div>

    </div>
    )
}



export default Cards