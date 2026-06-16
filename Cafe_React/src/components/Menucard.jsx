function MenuCard({ item, addToCart }) {
  return (
    <div className="menu-card">
      <div className="img-container">
        <img src={item.image} alt={item.name} />
        <span className="price-badge">₹ {item.price}</span>
      </div>

      <div className="menu-content">
        <h3>{item.name}</h3>
        <p>Freshly prepared • Premium taste</p>

        <button onClick={() => addToCart(item)}>
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}

export default MenuCard;