import React from 'react';

export default function Card({name, weight_min, image, temperament}) {
    return (
        <div>
            <img src={image ? image : "https://pixabay.com/es/photos/amigos-perro-mascota-traje-de-mujer-3042751/"} alt='imge not found' width='200px' height='250px' />
            <h3>{name}</h3>
            <h5>{temperament}</h5>
            <h6>{weight_min}</h6>           
        </div>
    )
}