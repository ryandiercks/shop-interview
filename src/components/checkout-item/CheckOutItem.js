import React from "react";

import "./CheckOutItem.scss";

import { connect } from "react-redux";
import {
  clearItemFromCart,
  removeItem,
  addItem
} from "../../redux/cart/cartAction";

const CheckOutItem = ({ cartItem, dispatch }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={cartItem.imageUrl} alt="item" />
    </div>

    <span className="name">{cartItem.name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>
        &#10094;
      </div>
      <span className="value">{cartItem.quantity}</span>
      <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
        &#10095;
      </div>
    </span>
    <span className="price">{cartItem.price}</span>
    <div
      className="remove-button"
      onClick={() => dispatch(clearItemFromCart(cartItem))}
    >
      &#10005;
    </div>
  </div>
);

export default connect(
  null,
  null
)(CheckOutItem);
