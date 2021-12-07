import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { postDog, getTemperament} from '../actions/'
import { useDispatch, useSelector } from 'react-redux';
import { Input } from './styled/Input';
import { Select } from './styled/Select';
import { Button } from './styled/Button';
import styled from 'styled-components';


const H1title = styled.h1`
font-family: 'Courgette', cursive;
color:#252525;
font-size: 25px;
margin-left: 28%;
`;
const Divform = styled.div`
font-family: 'Courgette', cursive;
color:#252525;
font-size: 15px;
display: flex;
justify-content: center;

`;
const Divend = styled.div`
display: flex;
justify-content: center;
margin-top: 15px;
`;
const Diverror = styled.div`
font-family: 'Courgette', cursive;
color: #ff0000;
`;
const Divfondo = styled.div`
background-color:#dfd9e2;
height: 608px;
`;

export default function Create () {
const dispatch = useDispatch()
const navigate = useNavigate();
const temperaments = useSelector((state) => state.temperaments);
const [error, setError] = useState(false);
const [errorValor, setErrorValor] = useState(false);

const [input, setInput] = useState({
    name:'',
    height_min: '',
    height_max: '',
    weight_min: '',
    weight_max: '',
    life_span: '',
    temperament: [],
    image: ''
    
})

function handleChange (e) {
setInput({
    ...input,
    [e.target.name] : e.target.value
})
    console.log(input)
}

function handleSelect (e) {
    setInput({
        ...input,
    temperament: [...input.temperament, e.target.value]
})
}
function handleSubmit(e) {
    e.preventDefault();
    console.log(input)
    // valido si los campos estan llenos
    if(input.name === '' || input.height_min === '' || input.height_max=== '' || input.weight_min === '' || input.weight_max === '') {
            setError(true);
            return;
        }
    if(input.height_min <=0 || input.height_max <=0 || input.weight_min <=0 || input.weight_max <=0 || input.life_span <=0 ) {
        setErrorValor(true);
        return;
    }
    // caso contrario paso los datos
    setError(false);
    dispatch(postDog(input))
    alert('Breed created!')
    setInput({
    name:'',
    height_min: '',
    height_max: '',
    weight_min: '',
    weight_max: '',
    life_span: '',
    temperament: [],
    image: ''
    })
    navigate('/home')
}
function handleDelete(el) {
    setInput({
        ...input,
        temperament: input.temperament.filter(temp => temp !== el)
    })
}

useEffect(() => {
    dispatch(getTemperament());
}, []);


return (
    <Divfondo>
        <Link to= '/home'><Button>Back to home</Button></Link>
        <H1title>Here you can register the breed of your best friend</H1title>
        <Divform>
        <form onSubmit={(e) => handleSubmit(e)}>
           <Diverror>
          {error ? 'You must complete breed, weight and height fields':null}
          {errorValor? 'weight, height and years of life must have a value greater than or equal to 1' : null}
          </Diverror>
           <div>              
               <label>Breed......... </label>
               <Input
               type='text'
               value={input.name} 
               name = 'name'
               onChange={(e) => handleChange(e)}
               />
           </div> 
           <div>
               <label>Height min </label>
               <Input
               type='text'
               value={input.height_min}
               name = 'height_min'
               onChange={(e) => handleChange(e)}
               />               
           </div> 
           <div>
               <label>Height max </label>
               <Input
               type='text'
               value={input.height_max}
               name = 'height_max'
               onChange={(e) => handleChange(e)}
               />               
           </div> 
           <div>
               <label>Weigh min. </label>
               <Input
               type='text'
               value={input.weight_min}
               name = 'weight_min'
               onChange={(e) => handleChange(e)}
               />               
           </div> 
           <div>
               <label>Weigh max </label>
               <Input
               type='text'
               value={input.weight_max}
               name = 'weight_max'
               onChange={(e) => handleChange(e)}
               />               
           </div> 
           <div>
               <label>Life span ...</label>
               <Input
               type='text'
               value={input.life_span}
               name = 'life_span'
               onChange={(e) => handleChange(e)}
               />               
           </div> 
           <div>
               <label>Image........ </label>
               <Input
               type='text'
               value={input.image}
               name = 'image'
               onChange={(e) => handleChange(e)}
               />               
           </div>
            
            <label>Temperament </label>
            <Select onChange={(e) => handleSelect(e)}>
                {temperaments.map((tem) => (
                    <option value={tem.name}>{tem.name}</option>
                ))}
            </Select>          
            <Button type='submit'>Create breed</Button>
            {input.temperament.map(el => 
                <Divend>                              
                <Button className='botonX' onClick={() => handleDelete(el)}> {el} x</Button>
            </Divend>
            )}
            </form>           
           </Divform>
    </Divfondo>
)}
