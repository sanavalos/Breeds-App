import axios from 'axios';

export function getDogs(){
    return async function(dispatch){
        try {
            var json = await axios.get('http://localhost:3001/dogs')
            return dispatch({
                type: 'GET_DOGS',
                payload: json.data
            })
        } catch (error) {
            console.log(`Following error from actions: ${error}`)
        }
    }
}

export function getDogsByName(name){
    return async function(dispatch){
        try {
            var json = await axios.get(`http://localhost:3001/dogs?name=${name}`)
            return dispatch({
                type: 'GET_DOGS_NAMES',
                payload: json.data
            })
        } catch (error) {
            console.log(`Following error from actions: ${error}`)
        }
    }
}

export function getTemperaments(){
    return async function (dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/temperaments')
            return dispatch ({
                type: "GET_TEMPERAMENTS",
                payload: json.data
            })
        } catch (error) {
            console.log(`Following error from actions: ${error}`)
        }
    }
}

export function postDog(payload){
    try {
        return async function() {
            const json = await axios.post('http://localhost:3001/dogs', payload)
            return json
        }
    } catch (error) {
        console.log(`Following error from actions: ${error}`)
    }
}

export function sortDogsByWeight(payload){
    return {
        type: 'SORT_BY_WEIGHT',
        payload
    }
}

export function sortDogsByName(payload){
    return {
        type: 'SORT_BY_NAME',
        payload
    }
}

export function filterDogsByDb(payload){
    return {
        type: 'FILTER_BY_DB',
        payload
    }
}

export function filterDogsByTemperament(payload){
    return {
        type: 'FILTER_BY_TEMPERAMENT',
        payload
    }
}

export function getDetails(id){
    return async function(dispatch){
        try {
            var json = await axios.get(`http://localhost:3001/dogs/${id}`)
            return dispatch({
                type: 'GET_BY_ID',
                payload: json.data
            })
        } catch (error) {
            console.log(`Following error from actions: ${error}`)
        }
    }
}