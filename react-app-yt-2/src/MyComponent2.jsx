import React, { useState } from "react";

function MyComponent2() {
  const [name, setName] = useState("Guest");
  const [qty, setQty] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQtyChange(event) {
    setQty(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  return (
    <>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input type="number" value={qty} onChange={handleQtyChange} />
      <p>Qty: {qty}</p>

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter your comment here"
      />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Visa">Visa</option>
            <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>
    </>
  );
}

export default MyComponent2;
