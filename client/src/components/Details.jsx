import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../actions/index';         
import { useEffect } from 'react';
import { Button } from './styled/Button';
import styled from 'styled-components';

const Divdetail = styled.div`
background: #DFC2F2;
background-image: linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%);
background-attachment: fixed;	
background-size: cover;
box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
background: rgba(255, 255, 255, 0.90);
text-align: center;
border-radius: 5px;
overflow: hidden;
margin: 5em auto;
height: 700x;
width: 700px;
`;
const Imgdetail = styled.img`
transition: all 0.3s ease-out;
display: inline-block;
position: relative;
overflow: hidden;
height: 100%;
float: right;
width: 50%;
display: inline-block;
border-radius: 10px;
margin-left: 5px;
margin-right: 10px;
margin-bottom: 10px;
`;
const Divtext = styled.div`
font-family: 'Courgette', cursive;
display: inline-block;
position: relative;
font-size: 15px;
color: #344055;
margin: 0;
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
            <Divtext>
                <h1>Breed: {detail[0].name}</h1>
                <Imgdetail src={detail[0].image}/>
                <h2>Height min {detail[0].height_min} Height max {detail[0].height_max} cm at the withers</h2>
                <h3>Weight min {detail[0].weight_min} Weihght max {detail[0].weight_max} Kgs</h3>            
                <p>{detail[0].life_span} years average life span</p>
                <h4>Temperament: {!detail[0].createdInDb ? detail[0].temperament + ' ' : detail[0].temperaments.map(el => el.name + (' '))}</h4>
            </Divtext> : <p>Loading...</p>
        }
        <div>
        <Link to='/home'>
            <Button>Go back</Button>
        </Link>
        </div>
    </Divdetail>
)

}