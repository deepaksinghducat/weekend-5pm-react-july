import React from "react";
import { useDispatch } from "react-redux";

function CardUi({data}) {
 const dispatch =useDispatch();

  return (
    <div className="card mt-2">
      <img src={data.images} className="card-img-top" alt={data.title} />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">
          {data.description}
        </p>

		<button type="button" 
			className="btn btn-primary" 
			onClick={() => dispatch({type:'add-to-cart', payload: {...data,quantity: 1}}) }
		>Add To Cart</button>
      </div>
    </div>
  );
}

export default CardUi;
