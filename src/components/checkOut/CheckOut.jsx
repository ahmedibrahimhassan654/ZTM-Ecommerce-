import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

function CheckOut() {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <>
      <div>
        <h1>Iam checkout page</h1>
        <div>
          {cartItems.map((cartItem) => {
            const { name, quantity } = cartItem;
            return (
              <>
                <div>
                  <h2>{name}</h2>
                  <span>{quantity}</span>
                  <br />
                  <span>decrement</span>
                  <br />
                  <span
                    onClick={() => {
                      addItemToCart(cartItem);
                    }}
                  >
                    increment
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CheckOut;
