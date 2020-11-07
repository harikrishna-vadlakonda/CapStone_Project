import InitialValue from '../InitialValues'

const myReducer = (currValue=InitialValue,action)=>{
     currValue = {
        UserData:action.payload
     }
    return currValue;

}
export default myReducer;