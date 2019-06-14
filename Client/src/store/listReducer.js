
const initState = {
    list: [],
    
}

 const listReducer  = (state = initState, action) =>
 {
     switch(action.type)
     {
         case 'GET_ITEM':
             return{
                list: action.payload
             }

         case 'ADD_PROJECT':
         return{
             ...state,
           list: [...state.list, action.payload]
         }

         case 'DELETE_DATA':
           const afterDel =  state.list.filter(({_id}) =>
                 _id !== action.del._id
             )
             return{
                 ...state,
                 list: afterDel  
             }
             
             case 'DELETE_ERR':
                 console.log("deleter error"+ action.error);
                 break;

                 case "UPDATE_DATA":
                     return{
                         list: action.payload
                     }

          default:
             console.log('default')
     }
    return state
 }

 export default listReducer