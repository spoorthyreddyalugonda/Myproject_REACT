function Home() {
  return (
    <div className="page">
      <h1>☕ Welcome to Cafe Bello</h1>
      <p>Fresh coffee • Snacks • Cozy vibes</p>

      {/* HERO IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb"
        alt="cafe hero"
        className="hero"
      />

      {/* IMAGE GALLERY */}
      <h2 style={{ marginTop: "30px" }}>Our Cafe Moments 📸</h2>

      <div className="gallery">
        <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93" />
        <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348" />
        <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24" />
        <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b" />
        <img src="https://images.unsplash.com/photo-1550507992-eb63ffee0847" />
      </div>
    </div>
  );
}

export default Home;