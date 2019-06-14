import axios from 'axios';
export const getItem  = () =>
{
   
    return(dispatch,getState) =>{
        axios.get('http://localhost:5000/api/name')
        .then(res =>
            {
                dispatch({type: "GET_ITEM",  payload: res.data})

            }).catch(err => console.log("get otem error"))

    }
    
}