import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="page">
      <h1>Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹ {item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}

          <h2>Total: ₹ {total}</h2>

          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default Cart;