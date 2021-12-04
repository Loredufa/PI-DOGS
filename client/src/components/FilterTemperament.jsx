import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperament, filterTemperament } from '../actions'
import { Select } from './styled/Select';


export default function Detail () {
const dispatch = useDispatch()
const temperaments = useSelector((state) => state.temperaments);

useEffect(() => {
    dispatch(getTemperament())
},[dispatch])


function handleSelectTemp (e) {
    e.preventDefault ()
    dispatch(filterTemperament(e.target.value))
}

return (
    <div>
    <Select onChange={e => handleSelectTemp(e)}>
    {temperaments.map((tem) => (
        <option value={tem.name}>{tem.name}</option>
    ))}
     </Select>    
     </div>
)

}