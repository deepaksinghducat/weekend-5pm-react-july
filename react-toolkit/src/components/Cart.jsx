import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Cart() {

  const {cartItems} = 	useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <ul className="list-group mt-4">
		{
			cartItems.length > 0 && cartItems.map((item) => (
				<li className="list-group-item" key={item.id}>
					<p>Name : {item.title}</p>
					<p>Price : {item.price}</p>
					<p>Quantity: {item.quantity}</p>
					<p><button 
						type="button" 
						className="btn btn-primary" 
						onClick={() => dispatch({type: 'update-cart', payload: {...item, quantity: item.quantity +1}})}>Update by 1</button>
					</p>
				</li>
			))
		}
    </ul>
  );
}

export default Cart;
