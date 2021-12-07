import React from 'react';
import { Link } from 'react-router-dom';
// hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// actions
import { getAllDogs, filterCreated, orderDogs, orderWeight } from '../actions';
// coponentes
import Card from './Card';
import Paginado from './Paginado';
import SearchBar from './SearchBar';
import FilterTemperament from './FilterTemperament'
// Estilos
import styled from 'styled-components';
import { Select } from './styled/Select';
import { Button } from './styled/Button';

const Divgral = styled.div`
background-color: #f4f4f4;
`;
const Divcards = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
margin-left: 25px;
margin-right: 25px;
background-color: #bfb8e6;
border-radius: 20px;
`;
const Divpaginado = styled.div`
display: flex;
justify-content: center;
`;
const Divfilter = styled.div`
display: flex;
justify-content: space-between;
margin-left: 8%;
margin-right: 10%;

`;
const Divhead = styled.div`
display: flex;
font-family: 'Courgette', cursive;
color:#252525;
font-size: 25px;
justify-content: space-between;
margin-left: 10%;
margin-right: 10%;
margin-bottom: 20px;
`;
const Divlik = styled.div`
margin-top: 45px;
`;

export default function Home (){

const dispatch = useDispatch()

const alldogs = useSelector ((state) => state.dogs)
const [orden, setOrden] = useState('')
const [currentPage, setCurrentPage] = useState(1)
const [dogsPerPage] = useState(8)
const indexOfLastDog = currentPage * dogsPerPage //8
const indexOffFirstDog = indexOfLastDog - dogsPerPage //0
const currentDog = alldogs.slice(indexOffFirstDog, indexOfLastDog)

const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
}


useEffect(() => {
    dispatch(getAllDogs());
    }, [dispatch])


function handleClick(e){
    e.preventDefault();
    dispatch(getAllDogs());
}

function handleFilterCreated (e) {
    dispatch(filterCreated(e.target.value))
}
function handleSort (e) {
    e.preventDefault();
    dispatch(orderDogs (e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`)  
}
function handleSortWeight (e) {
    e.preventDefault();
    dispatch(orderWeight (e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`)  
}

return (
    <Divgral> 
        <Divhead>     
        <h1>Welcome</h1>       
        <SearchBar/>
        <Divlik>
        <Link to='/dog'> <Button> Create your breed </Button> </Link>         
        </Divlik>       
        </Divhead>
        <div>
            <Divfilter>
            <Select onChange={e => handleSort(e)}>
                <option value= 'asc'>Ascendente</option>
                <option value= 'desc'>Descendente</option>
            </Select>
            <Select  onChange={e => handleSortWeight(e)}>
                <option value='weightasc'>Weight ascendente</option>
                <option value='weightdesc'>Weight descendente</option>
            </Select>
            <Select onChange={e => handleFilterCreated(e)}>
                <option value='All'>All</option>              
                <option value='name'>Existing breeds</option>
                <option value='Our Breeds'>Our Breeds</option>
            </Select>
            <FilterTemperament/>
            <Button onClick={e => {handleClick(e)}}>
               All Dogs
            </Button> 
            </Divfilter>
            <Divpaginado>           
            <Paginado            
            dogsPerPage = {dogsPerPage}            
            alldogs = {alldogs.length}            
            paginado = {paginado}            
            />
            </Divpaginado>
            <Divcards>
            {currentDog?.map( (element) => {
                  return (
                    <div>
                        <Link to={'/home/' + element.id}>
                            <Card key={element.id} 
                            image={element.image}
                            name={element.name} 
                            temperament={element.temperament ? element.temperament : element.temperaments && element.temperaments.map ((temp) => temp.name + (' '))} 
                            weight_min={element.weight_min} />
                        </Link>
                    </div>
                 );
                })}  
                </Divcards>         
        </div>
    </Divgral>

)
}