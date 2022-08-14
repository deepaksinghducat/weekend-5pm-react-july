export const CartReducer = (state = { cart: [] }, action) => {

	if(action.type === 'add-to-cart') {
		return {
			...state,
			cart : [
				...state.cart,
				action.payload
			]
		}
	}

	if(action.type === 'remove-item-form-cart') {
		state.cart.splice(action.payload,1);

		return {
			...state,
			cart: [
				...state.cart,
			]
		}
	}

	return state;
}