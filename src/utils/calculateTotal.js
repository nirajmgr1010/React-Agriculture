const calculateTotal = (cartItems) => {
  return cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
};

export default calculateTotal;