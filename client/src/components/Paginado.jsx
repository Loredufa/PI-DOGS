import React from 'react';
import styled from 'styled-components';

const ANav = styled.a`
font-family: 'Courgette', cursive;
cursor: pointer;
color:#252525;
transition: background-color .3s ease;
border-radius: 2.5px;
margin-left: 0.2rem;
margin-right: 0.2rem;

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