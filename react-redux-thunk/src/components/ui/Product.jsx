import React from "react";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../actions/CartActions";

function Product({data}) { 

  const dispatch = useDispatch();

  const addToCartHandler = (event) => {
    event.preventDefault();

    data.quantity = 1;

    dispatch(addToCartAction(data));
  }

  return (
    <div className="card mt-4">
      <img src={data.image} className="card-img-top" alt={data.title} height="200" />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p>Price : $ {data.price}</p>

        <button type="button" className="btn btn-primary" onClick={ addToCartHandler}>Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;
