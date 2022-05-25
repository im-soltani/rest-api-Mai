import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import { contReducer } from './reducers/contReducer'
import {composeWithDevTools } from "redux-devtools-extension"

const middleware=[thunk]
const store=createStore(contReducer,composeWithDevTools (applyMiddleware(...middleware))
);
export default store