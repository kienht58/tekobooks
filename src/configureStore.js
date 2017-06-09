import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import { autoRehydrate } from 'redux-persist'

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    compose (
    	applyMiddleware(
	      thunkMiddleware
	    ),
	    autoRehydrate()
    )
  
)}