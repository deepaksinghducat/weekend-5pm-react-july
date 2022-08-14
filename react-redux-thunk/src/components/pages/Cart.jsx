import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFormCartAction } from "../../actions/CartActions";

function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const disptach = useDispatch();

  return (
    <ol className="list-group list-group-numbered mt-4">
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-start" key={item.id}>
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.title}</div>
            </div>
            <span className="badge bg-primary rounded-pill">{item.price}</span>
            <button className="mx-2 btn btn-primary" onClick={() => disptach(removeItemFormCartAction(index)) }>Remove Item</button>
          </li>
        ))
      ) : (
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">No Item in Cart</div>
        </li>
      )}
    </ol>
  );
}

export default Cart;
