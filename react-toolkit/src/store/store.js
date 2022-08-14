import { combineReducers, configureStore } from '@reduxjs/toolkit'

const products = [
	{
		id: 1,
		images: 'https://via.placeholder.com/150',
		title: "Product 1",
		price: 10,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
	},
	{
		id: 2,
		images: 'https://via.placeholder.com/150',
		title: "Product 2",
		price: 10,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
	}
	,
	{
		id: 3,
		images: 'https://via.placeholder.com/150',
		title: "Product 3",
		price: 10,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
	}
	,
	{
		id: 4,
		images: 'https://via.placeholder.com/150',
		title: "Product 4",
		price: 10,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
	}
	,
	{
		id: 5,
		images: 'https://via.placeholder.com/150',
		title: "Product 5",
		price: 10,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
	}
	,
	{
		id: 6,
		images: 'https://via.placeholder.com/150',
		title: "Product 6",
		price: 10,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
	}
	,
	{
		id: 7,
		images: 'https://via.placeholder.com/150',
		title: "Product 7",
		price: 10,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
	}
]

const ProductReducer = (state = products, action) => {
	return state;
}

const CartReducer = (state = { cartItems: [] }, action) => {

	if (action.type === 'add-to-cart') {

		return {
			...state.cart,
			cartItems: [...state.cartItems, action.payload]
		}

	}

	if (action.type === 'update-cart') {

		return {
			...state,
			cartItems: state.cartItems.map(item => item.id === action.payload.id
				? { ...item, quantity: item.quantity + 1 }
				: 0),
		}

	}

	return state;
}

const reducers = combineReducers({
	product: ProductReducer,
	cart: CartReducer
})

const initialState = {}

const store = configureStore({
	reducer: reducers,
	initialState
});

export default store;


