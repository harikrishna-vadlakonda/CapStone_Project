import InitialValue from '../InitialValues'

const myReducer = (currValue=InitialValue,action)=>{
      InitialValue = {
         clientData:''
      }

    return currValue;

}
export default myReducer;