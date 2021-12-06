import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from './assets/lp.jpg';


const Contenedor = styled.div`
background-image: url(${img});
background-size: cover;
font-family: 'Courgette', cursive;
color: #252525;
position: absolute;
display: flex;
top: 0px;
bottom: 0;
left:0px;
right:0;
font-size: 2rem;
`;
const Title1 = styled.h1`
padding: 20px;
margin-left: 100px;
`;

const Button1 = styled.button`
margin-left: 180px;
background-color: #f5abeb;
font-family: 'Courgette', cursive;
color:#252525;
cursor: pointer;
font-size: 1rem;
padding: 4px 15px;
border: 2px solid #383738;
border-radius: 50px;
transition: background-color .3s ease;
&:hover {
    color: #f5abeb;
    background-color:#4e4e4e;  
}
`;

export default function LandingPage() {    
    return (
    <Contenedor>
        <div >
           <Title1>My Best Friend</Title1>
            <Link to='/home'>
                <Button1>Lets Go In!</Button1>
            </Link>
        </div>
    </Contenedor>
    )
}