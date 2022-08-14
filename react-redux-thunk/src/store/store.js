import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { CartReducer } from '../reducers/CartReducer'
import { ProductReducer } from '../reducers/ProductReducer'
import thunk from 'redux-thunk'

const initialState = {}

const reducers = combineReducers({
	products: ProductReducer,
	cart: CartReducer
})

const middleware = [thunk];

const store = configureStore({
	reducer: reducers,
	initialState,
	middleware,
	devTools: true
})

export default store;