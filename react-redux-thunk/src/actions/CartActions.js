export const addToCartAction = (product) => (dispatch) => {
	dispatch({ type: 'add-to-cart', payload: product })
}

export const removeItemFormCartAction = (index) => (dispatch) => {
	dispatch({ type: 'remove-item-form-cart', payload: index })
}