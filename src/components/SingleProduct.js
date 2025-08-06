import React from "react";
import { CartState } from "../context/Context";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="productCard">
      <img src={prod.image} alt={prod.name} />
      <div className="productDetails">
        <h4>{prod.name}</h4>
        <p>₹ {prod.price}</p>
        <p>Rating: {prod.ratings} ⭐</p>
        <p>{prod.fastDelivery ? "Fast Delivery 🚀" : "3 days delivery 🚚"}</p>
        {cart.some((p) => p.id === prod.id) ? (
          <button
            className="removeBtn"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: prod })
            }
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className="addBtn"
            onClick={() =>
              dispatch({ type: "ADD_TO_CART", payload: prod })
            }
            disabled={!prod.inStock}
          >
            {prod.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
