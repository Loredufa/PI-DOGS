import React from 'react';
import styled from 'styled-components';

const DivC = styled.div`
color:#252525;
size: 7pt;
width:16vw;
height:25vw;
overflow:hidden;
background-color: #f4f4f4;
margin: 2rem;
padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover {
    .card__image {
      filter: contrast(100%);
    }
  }
`;

const Img = styled.img`
height: 50%;
max-width: 100%;
vertical-align: middle;
border-radius: 5px;
`;

const Description = styled.div`
font-family: 'Courgette', cursive;
padding: 0;
text-justify: center;
color: #252525;
text-overflow: ellipsis;
height: auto;
word-wrap: break-word;
overflow:hidden;
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