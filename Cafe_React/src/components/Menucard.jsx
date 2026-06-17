function MenuCard({ item, addToCart }) {
  return (
    <div className="menu-card">
      <div className="menu-content">
        <h3>{item.name}</h3>
        <p>Freshly prepared • Premium taste</p>
        
        {/* Price added here */}
        <div className="price-tag">₹ {item.price}</div>

        <button onClick={() => addToCart(item)}>
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}

export default MenuCard;