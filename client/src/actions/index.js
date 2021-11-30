import axios from 'axios';


export function getAllDogs() {
return async function(dispatch) {
    var json = await axios.get('http://localhost:3001/dogs')
        return dispatch({
            type:'GET_DOGS',
            payload: json.data
        })
}
}
export function getSearchDog (name) {
    return async function (dispatch) {
        try {
            var back = await axios.get('http://localhost:3001/dogs?name=' + name);
            return dispatch ({
                type: 'GET_SEARCH_DOG',
                payload: back.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function getTemperament () {
    return async function (dispatch) {
        var info = await axios.get('http://localhost:3001/temperament', {
    });
    return dispatch({ type: 'GET_TEMPERAMENTS', payload: info.data});
    };
}

export function postDog (payload) {
    return async function (dispatch){
        const response = await axios.post('http://localhost:3001/dog',payload);
        console.log(response)
        return response;
    }
  
}

export function filterCreated(payload) {
        return {
            type:'FILTER_CREATED',
            payload
            }
        }

export function orderDogs (payload) {
        return {
            type:'ORDER_DOGS',
            payload
            }
        }
export function orderWeight (payload) {
    return {
        type: 'ORDER_WEIGHT',
        payload
    }
}
