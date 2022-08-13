const initialState = {
    dogs: [],
    dogsCopy: [],
    temperaments: [],
    details: []
}
function rootReducer (state = initialState, action){
    switch(action.type){
        case 'GET_DOGS':
            return{
                ...state,
                dogs: action.payload,
                dogsCopy: action.payload
            }

        case 'GET_DOGS_NAMES':
            return{
                ...state,
                dogs: action.payload
            }

        case 'GET_TEMPERAMENTS':
            return {
                ...state,
                temperaments: action.payload
            }

        case 'POST_DOG':
            return{
                ...state
            }
        
        case 'GET_BY_ID':
            return {
                ...state,
                details: action.payload
            }
        
        case 'SORT_BY_WEIGHT':
            const sortedWeight = action.payload === 'ascendant' ?
                state.dogs.sort((a, b) => {
                    return parseInt(a.weight_min) - parseInt(b.weight_min);
                }) :
                state.dogs.sort((a, b) => {
                    return parseInt(b.weight_max) - parseInt(a.weight_max);
                });
            return {
                ...state,
                dogs: sortedWeight,
            }

        case 'SORT_BY_NAME':
            const sortedName = action.payload === 'ascendant' ?
            state.dogs.sort((a, b) => {
                return (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
            }) :
            state.dogs.sort((a, b) => {
                return (a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1)
            }); 
            return{
                ...state,
                dogs: sortedName,
            }

        case 'FILTER_BY_DB':
            const copy = state.dogsCopy;
            const filtered = action.payload === 'all' ? copy : action.payload === 'db' ? copy.filter(dog => dog.createdInDb) : copy.filter(dog => !dog.createdInDb);
            return {
                ...state,
                dogs: filtered
            }
        
        case 'FILTER_BY_TEMPERAMENT':
            const copyDogs = state.dogsCopy;
            const temperament = action.payload.toLowerCase()
            const filter = action.payload === 'all' ? copyDogs : 
            copyDogs.filter(dog =>{ 
                if(typeof dog.temperaments === 'string'){ 
                    return dog.temperaments.toLowerCase().includes(temperament)
                }
                if(typeof dog.temperaments === 'object') { 
                    let dogDb = dog.temperaments.join(', ').toLowerCase().includes(temperament)
                    return dogDb
                }
                return true
            })
            return {
                ...state,
                dogs: filter
            }
        
        default:
            return state;
    }
}

export default rootReducer;