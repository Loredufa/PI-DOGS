import React from 'react';

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
                    <a onClick={() => paginado(number)}>{number}-</a>
                ))}
            </ul>
        </nav>
    )
}