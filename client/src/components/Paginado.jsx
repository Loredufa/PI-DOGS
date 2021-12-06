import React from 'react';
import styled from 'styled-components';

const ANav = styled.a`
justify-content: center;
flex-wrap: wrap;
font-family: 'Courgette', cursive;
cursor: pointer;
color:#252525;
transition: background-color .3s ease;
border-radius: 50px;
padding: 5px;
margin-left: 0.5rem;
margin-right: 0.5rem;
text-align: center;

&:hover {
    background-color:#f5bfee;  
}
`;

export default function Paginado ({dogsPerPage, alldogs, paginado}) {
    const pageNumber = []

    for (let i=1; i<=Math.ceil(alldogs/dogsPerPage); i++){
        pageNumber.push(i)
    }
    return (
        <nav>
            <ul className='paginado'>
                { pageNumber &&
                pageNumber.map(number => (
                    <ANav onClick={() => paginado(number)}>{number} </ANav>
                ))}
            </ul>
        </nav>
    )
}