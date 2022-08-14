import axios from 'axios';

export const getProducts = () => async (dispatch) => {
	const { data } = await axios.get('https://fakestoreapi.com/products');

	dispatch({type: 'add-product', payload: data})
}