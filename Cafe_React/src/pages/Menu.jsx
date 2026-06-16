
import menuData from "../data/menuData";
import MenuCard from "../components/MenuCard";
import { useCart } from "../context/CartContext";

function Menu() {
  const { addToCart } = useCart();

  return (
    <div className="page">
      <h1 className="title">☕ Our Menu</h1>
      <p className="subtitle">Fresh coffee, snacks & desserts made with love</p>

      <div className="menu-grid">
        {menuData.map((item) => (
          <MenuCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Menu;