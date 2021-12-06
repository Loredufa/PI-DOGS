import React from 'react';
import styled from 'styled-components';

const DivC = styled.div`
color:#252525;
display: flex;
flex-direction:column;
font-size: 8pt;
width:16vw;
height:25vw;
overflow:hidden;
background-color: #ccc9c9ec;
backdrop-filter: blur(8px);
margin: 2.5rem;
border-radius: 10px;
justify-content: center;
align-items: center;

`;

const Img = styled.img`
margin: 0;
overflow:hidden;
position:relative;

`;

const Description = styled.div`
font-family: 'Courgette', cursive;
padding: 0;
margin: 1rem;
text-justify: inter-word;
font-size: 11px;
`;

export default function Card({name, weight_min, image, temperament}) {

    return (
        <DivC>
            <Img src={image ? image : "https://pixabay.com/es/photos/amigos-perro-mascota-traje-de-mujer-3042751/"} alt='imge not found' width='200px' height='250px' />
            <Description>
            <h3>My breed is {name}</h3>
            <h5>I'm {temperament} </h5>
            <h6>My weight is {weight_min} Kg</h6> 
            </Description>          
        </DivC>
    )
}