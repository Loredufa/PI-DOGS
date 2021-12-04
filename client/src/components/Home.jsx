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
import { Buttonlp } from './styled/Buttonlp';
import { Select } from './styled/Select';
import { Divhome, Divcard } from './styled/Divhome';
import { Encabezado, Titulo } from './styled/Encabezado';



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
    <Divhome> 
        <Encabezado>     
        <Titulo>Welcome</Titulo>       
        <SearchBar/>
        <Link to='/dog' >Create breed</Link>              
        </Encabezado>
        <div>
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
            <Buttonlp onClick={e => {handleClick(e)}}>
               All Dogs
            </Buttonlp>
            <Paginado
            dogsPerPage = {dogsPerPage}
            alldogs = {alldogs.length}
            paginado = {paginado}
            />
            {currentDog?.map( (element) => {
                  return (
                    <Divcard>
                        <Link to={'/home/' + element.id}>
                            <Card key={element.id} image={element.image? element.image : <img src="https://pixabay.com/es/photos/perro-tejonero-cachorro-mascota-1519374/"/>} name={element.name} temperament={element.temperament} weight_min={element.weight_min} />
                        </Link>
                    </Divcard>
                  );
                })}           
        </div>
    </Divhome>

)
}