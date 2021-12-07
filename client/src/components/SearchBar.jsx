import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
//action
import { getSearchDog } from '../actions';
// estilos
import styled from 'styled-components';
import { Button } from './styled/Button';
import { Input } from './styled/Input';

const Divsearch = styled.div`
margin-top: 40px;
`;

export default function SearchBar () {
const dispatch = useDispatch()
const [name, setName] = useState('');

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
    <Divsearch>
        <Input 
        type= 'text'
        placeholder = 'Breed...'
        onChange = {(e) => handleInputChange(e)}/>
        <Button type='submit'onClick={(e) => handleSubmit(e)}>Search</Button>
    </Divsearch>
)

}