import {createStore,combineReducers, applyMiddleware} from 'redux'
import myReducer from '../Reducers/myReducer'
import Logger from 'redux-logger'

const combinedReducer = combineReducers({myReducer})
const myStore = createStore(combinedReducer,applyMiddleware(Logger))
export default myStore;

     