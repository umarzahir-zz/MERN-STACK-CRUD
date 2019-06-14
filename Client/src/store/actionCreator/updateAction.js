import axios from 'axios';
export const update = (id,d) =>
{
    return(dispatch, getState) =>
    {
        axios.put("http://localhost:5000/api/update/"+id, d)
        .then(doc =>
            { 
            axios.get('http://localhost:5000/api/name')
        .then(res =>
            {
                dispatch({type: "UPDATE_DATA",  payload: res.data})

            }).catch(err => console.log("Geting Data Error in: :UpdateAction: File"))
        })
        .catch(err => console.log("error in update" , err));
    }
}