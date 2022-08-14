export const ProductReducer = (state = { products: [] }, action) => {

	if(action.type === 'add-product') {
		return {
			...state,
			products: [...action.payload]
		}
	}

	return state;
}