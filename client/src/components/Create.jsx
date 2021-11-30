import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { postDog, getTemperament} from '../actions/'
import { useDispatch, useSelector } from 'react-redux';

export default function Create (payload) {
const dispatch = useDispatch()
const navigate = useNavigate();
const temperaments = useSelector((state) => state.temperaments)


const [input, setInput] = useState({
    name:'',
    height_min: '',
    height_max: '',
    weight_min: '',
    weight_max: '',
    life_span: '',
    temperament: [],
    //image,
    
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
    //image,
    })
    navigate('/home')
}
useEffect(() => {
    dispatch(getTemperament());
}, []);


return (
    <div>
        <Link to= '/home'><button>Back to home</button></Link>
        <h1>Here you can register the breed of your best friend</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
           <div>
               <label>Breed</label>
               <input
               type='text'
               value={input.name}
               name = 'name'
               onChange={(e) => handleChange(e)}
               />
           </div> 
           <div>
               <label>Height min</label>
               <input
               type='text'
               value={input.height_min}
               name = 'height_min'
               onChange={(e) => handleChange(e)}
               />               
           </div> 
           <div>
               <label>Height max</label>
               <input
               type='text'
               value={input.height_max}
               name = 'height_max'
               onChange={(e) => handleChange(e)}
               />               
           </div> 
           <div>
               <label>Weigh min</label>
               <input
               type='text'
               value={input.weight_min}
               name = 'weight_min'
               onChange={(e) => handleChange(e)}
               />               
           </div> 
           <div>
               <label>Weigh max</label>
               <input
               type='text'
               value={input.weight_max}
               name = 'weight_max'
               onChange={(e) => handleChange(e)}
               />               
           </div> 
           <div>
               <label>Life span</label>
               <input
               type='text'
               value={input.life_span}
               name = 'life_span'
               onChange={(e) => handleChange(e)}
               />               
           </div> 
           <div>
               <label>Image</label>
               <input
               type='text'
               value={input.image}
               name = 'image'
               onChange={(e) => handleChange(e)}
               />               
           </div> 
            <select onChange={(e) => handleSelect(e)}>
                {temperaments.map((tem) => (
                    <option value={tem.name}>{tem.name}</option>
                ))}
            </select>          
            <ul><li>{input.temperament.map(el => el + " ,")}</li></ul>
            <button type='submit'>Create breed</button>
            </form>  
    </div>
)

}