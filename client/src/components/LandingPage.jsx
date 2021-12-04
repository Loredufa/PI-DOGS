import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from './assets/lp.jpg';
import { Buttonlp } from './styled/Buttonlp';

const Contenedor = styled.div`
background-image: url(${img});
background-size: cover;
font-family: 'Courgette', cursive;
color: #252525;
position: absolute;
display: flex;
top: 0px;
bottom: 0;
left:40px;
right:0;
font-size: 1.5rem;
`;


export default function LandingPage() {    
    return (
    <Contenedor>
        <div >
           <h1>My Best Friend</h1>
            <Link to='/home'>
                <Buttonlp>Enter</Buttonlp>
            </Link>
        </div>
    </Contenedor>
    )
}