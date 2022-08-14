import React from "react";
import { useEffect } from "react";
import Product from "../ui/Product";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/ProductActions";

function Home() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="row mb-4">
      {products.length > 0 && products.map((product) =>(
        <div className="col-3" key={product.id}>
          <Product data={product} />
        </div>
      ))}
    </div>
  );
}

export default Home;
