import { cartContext } from "../context/CartProvider";
import React, { useContext } from "react";

function CartWidget() {
  const { totalItems } = useContext(cartContext);

  return (
    <>
      {totalItems() ? (
        <button className="btn-cart">
          <img src="/img/cartWidget.png" className="cartWidget" />
          {totalItems()}
        </button>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default CartWidget;
