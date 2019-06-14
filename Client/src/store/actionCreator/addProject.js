import axios from 'axios'
export const addProject = (name) => dispatch =>
{
    
        axios.post("http://localhost:5000/api/new", name)
    .then(res => dispatch({type: 'ADD_PROJECT', payload: res.data}))
    .catch(err => console.log("axios error" + err.message))
       
    
}