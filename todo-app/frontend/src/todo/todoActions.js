import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = (e) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: e.target.value
});

export const search = () => {
//Explicação em 7/84 6:00min 
    return (dispatch,getState) =>{
        const description = getState().todo.description;
        const s = description ? `&description__regex=/${description}/`:'';
        const request = axios.get(`${URL}?sort=-createdAt${s}`)
            .then(resp=>dispatch({type:'TODO_SEARCHED',payload: resp.data}))
    }
}

export const add = (description) =>{
    return dispatch =>{
        axios.post(URL,{description})
            .then(resp=>dispatch(clear()))
            .then(resp=>dispatch(search()));
    }
}

export const markAsDone = (todo) =>{
    return dispatch => {
        axios.put(`${URL}/${todo._id}`,{...todo, done: true})
            .then(resp=>dispatch(search()));
    }
}

export const del = (todo) =>{
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp=>dispatch(search()));
    }
}

export const markAsPending = (todo) =>{
    return dispatch => {
        axios.put(`${URL}/${todo._id}`,{...todo, done: false})
            .then(resp=>dispatch(search()));
    }
}

export const clear = () => {
    return [{
        type: 'TODO_CLEARED'
    },search()]
}