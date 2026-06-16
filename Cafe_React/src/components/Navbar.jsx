import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <h2>☕ Cafe Bello</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/About">About</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;