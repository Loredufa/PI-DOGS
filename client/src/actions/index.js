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
//export function getNameDogs

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
