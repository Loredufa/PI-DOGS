import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
//action
import { getSearchDog } from '../actions';
// estilos
import { Buttonlp } from './styled/Buttonlp';
import { Input } from './styled/Input';

export default function SearchBar () {
const dispatch = useDispatch()
const [name, setName] = useState('')

function handleInputChange(e) {
e.preventDefault() 
setName(e.target.value)

}

function handleSubmit (e) {
    e.preventDefault()
    dispatch(getSearchDog(name))
    getSearchDog('')
}

return (
    <div>
        <Input 
        type= 'text'
        placeholder = 'Breed...'
        onChange = {(e) => handleInputChange(e)}/>

        <Buttonlp type='submit'onClick={(e) => handleSubmit(e)}>Search</Buttonlp>
        
    </div>
)

}