import React from 'react';
import { Link } from 'react-router-dom';
// hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// actions
import { getAllDogs, filterCreated, orderDogs, orderWeight} from '../actions';
// coponentes
import Card from './Card';
import Paginado from './Paginado';



export default function Home (){

const dispatch = useDispatch()

const alldogs = useSelector ((state) => state.dogs)
const [orden, setOrden] = useState('')
const [currentPage, setCurrentPage] = useState(1)
const [dogsPerPage, setDogsPerPage] = useState(8)
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
    <div>
        <Link to='/dog' >Create breed</Link>
        <h1>Welcome</h1>
        <button onClick={e => {handleClick(e)}}>
        Volver a cargar los personajes
        </button>
        <div>
            <select onChange={e => handleSort(e)}>
                <option value= 'asc'>Ascendente</option>
                <option value= 'desc'>Descendente</option>
            </select>
            <select  onChange={e => handleSortWeight(e)}>
                <option value='weightasc'>Weight ascendente</option>
                <option value='weightdesc'>Weight descendente</option>
            </select>
            <select onChange={e => handleFilterCreated(e)}>
                <option value='All'>All</option>              
                <option value='name'>Existing breeds</option>
                <option value='Our Breeds'>Our Breeds</option>
            </select>
            <select >
                <option value='temperament'>Temperament</option>
            </select>
            <Paginado
            dogsPerPage = {dogsPerPage}
            alldogs = {alldogs.length}
            paginado = {paginado}
            />
            {currentDog?.map( (element) => {
                  return (
                    <div>
                        <Link to={'/home/' + element.id}>
                            <Card key={element.id} image={element.image} name={element.name} temperament={element.temperament} weight_min={element.weight_min} />
                        </Link>
                    </div>
                  );
                })}           
        </div>
    </div>

)
}