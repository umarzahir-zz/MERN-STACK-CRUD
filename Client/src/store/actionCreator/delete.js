import axios from 'axios'
export const delteAction = (data)=>
{
    return(dispatch, getState)=>{
        axios.delete("http://localhost:5000/api/delete/"+data)
        .then(del => 
            dispatch({type: 'DELETE_DATA', del: del.data}))
        .catch( error =>
            dispatch({type: 'DELETE_ERR', error}))
        
    }
}