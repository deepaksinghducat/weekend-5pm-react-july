import React from "react";
import { useSelector } from "react-redux";
import CardUi from "./CardUi";

function Product() {
  const products = useSelector((state) => state.product);
  return (
    <div className="mt-4">
      <div className="row">
        {products.length > 0 &&
          products.map((product) => (
            <div className="col-sm-3" key={product.id}>
              <CardUi data={product}/>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Product;
