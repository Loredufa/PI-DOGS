import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { postDog, getTemperament} from '../actions/'
import { useDispatch, useSelector } from 'react-redux';
import { Buttonlp } from './styled/Buttonlp';
import { Select } from './styled/Select';
import { Input } from './styled/Input';


export default function Create () {
const dispatch = useDispatch()
const navigate = useNavigate();
const temperaments = useSelector((state) => state.temperaments);
const [error, setError] = useState(false);

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
    <div>
        <Link to= '/home'><Buttonlp>Back to home</Buttonlp></Link>
        <h1>Here you can register the breed of your best friend</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          {error ? 'You must complete breed, weight and height fields':null}
           <div>              
               <label>Breed </label>
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
               <label>Weigh min </label>
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
               <label>Life span </label>
               <Input
               type='text'
               value={input.life_span}
               name = 'life_span'
               onChange={(e) => handleChange(e)}
               />               
           </div> 
           <div>
               <label>Image </label>
               <Input
               type='text'
               value={input.image}
               name = 'image'
               onChange={(e) => handleChange(e)}
               />               
           </div> 
            <Select onChange={(e) => handleSelect(e)}>
                {temperaments.map((tem) => (
                    <option value={tem.name}>{tem.name}</option>
                ))}
            </Select>          
            <Buttonlp type='submit'>Create breed</Buttonlp>
            </form>  
            {input.temperament.map(el => 
                <div className='divTem'>               
                <Buttonlp className='botonX' onClick={() => handleDelete(el)}> {el} x</Buttonlp>
            </div>
           )}
    </div>
)}
