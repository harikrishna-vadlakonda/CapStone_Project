/* eslint-disable default-case */
import InitialValue from '../InitialValues'

const myReducer = (currValue=InitialValue,action)=>{
   switch(action.type) {
      case 'LOGIN':
         currValue = {
            ...currValue,
            UserData:action.payload,
         }
         break;
   
     case 'ALLSERVICES':
      currValue = {
         ...currValue,
         AllServices:action.payload,
      }
      break;
      case 'SERVICES':
         currValue = {
            ...currValue,
            Services:action.payload
         }
      }
    return currValue;

}
export default myReducer;