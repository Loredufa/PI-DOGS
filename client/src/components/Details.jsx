import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../actions/index';         
import { useEffect } from 'react';
import { Button } from './styled/Button';
import styled from 'styled-components';

const Divdetail = styled.div`
display: flex;
font-family: 'Courgette', cursive;
color:#252525;
font-size: 15px;
margin: 50px;
margin-left: 15%;

`;
const Imgdetail = styled.img`
display: inline-flex;
max-width: 80%;
max-height: 60%;
float: left;
border-radius: 10px;
padding-right: 10px;
background-size: cover;
`;

export default function Detail () {
    const dispatch = useDispatch()
    const params = useParams();
    const detail = useSelector (state => state.detail)
      //console.log(detail)
    useEffect (()=> {
        dispatch(getDetail(params.id)) 
    }, [dispatch])

return(
    <Divdetail>
        { 
         detail.length > 0 ?
            <div>
                <h1>Breed: {detail[0].name}</h1>
                <Imgdetail src={detail[0].image}/>
                <h2>Height min {detail[0].height_min} Height max {detail[0].height_max} cm at the withers</h2>
                <h3>Weight min {detail[0].weight_min} Weihght max {detail[0].weight_max} Kgs</h3>            
                <p>{detail[0].life_span} years average life span</p>
                <h4>Temperament: {!detail[0].createdInDb ? detail[0].temperament + ' ' : detail[0].temperaments.map(el => el.name + (' '))}</h4>
            </div> : <p>Loading...</p>
        }
        <Link to='/home'>
            <Button>Go back</Button>
        </Link>
    </Divdetail>
)

}