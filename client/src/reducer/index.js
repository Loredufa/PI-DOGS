const initialState = {
    dogs : [],
    allDogs : [],
    temperaments : [],
    detail: {}
}

function rootReducer (state = initialState, action) {
    switch(action.type) {
        case 'GET_DOGS' :
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }
        case 'FILTER_CREATED' :
        const allDogs = state.allDogs
        const filterCreated = action.payload === 'Our Breeds' ? allDogs.filter (el => el.createdInDb) : allDogs.filter(el => !el.createdInDb)
        return {
            ...state,
            dogs: action.payload === 'All'? state.allDogs : filterCreated
        }
        case 'ORDER_DOGS' :
        let sortArr = action.payload === 'asc' ?
            state.dogs.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (b.name > a.name) {
                    return -1;
                }
                return 0;          
            }) :
            state.dogs.sort(function (a,b) {
                if (a.name > b.name) {
                    return -1;
                }
                if (b.name > a.name) {
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                dogs: sortArr
            }
            case 'ORDER_WEIGHT' :
                let sortWeight = action.payload === 'weightasc' ?
                    state.dogs.sort(function (a, b) {
                        return (
                            parseInt(a.weight_min) - parseInt(b.weight_min)
                    )}):
                    state.dogs.sort(function (a, b) {
                        return (
                            parseInt(b.weight_min) - parseInt(a.weight_min)
                    )}) 
            return {
            ...state,
            dogs: sortWeight
        }
        case 'FILTER_TEMPERAMENT' :
        
            const tempDogs = state.allDogs
                let tempFiltered = tempDogs.filter( e => {
                    if(e.temperament) {
                        return e.temperament.includes(action.payload)
                    }
                    if(e.temperaments) {
                        return e.temperaments.map((e) => e.name === action.payload)
                    }
                    return null
                })
            return {
                ...state,
                dogs : tempFiltered
            }

        case 'GET_SEARCH_DOG' :
            return {
                ...state,
                dogs: action.payload
            }
        case 'POST_DOG' :
            return {
                ...state,
            }
        case 'GET_TEMPERAMENTS' :
            return {
                ...state,
                temperaments: action.payload
            }
        case 'GET_DETAILS' :
            return {
                ...state,
                detail: action.payload
            }
        default:
            return state;
    }

}

export default rootReducer;
