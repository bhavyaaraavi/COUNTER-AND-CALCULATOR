
import "./index.css";

function Navbar() {
  return (
    <nav>
      <h2>ShopEasy</h2>
      <div>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
      </div>
    </nav>
  );
}

function ProductList() {
  return (
    <div className="products">
      <div className="card">
        <h3>Wireless Headphones</h3>
        <p>₹1,499</p>
      </div>

      <div className="card">
        <h3>Smart Watch</h3>
        <p>₹2,499</p>
      </div>

      <div className="card">
        <h3>Bluetooth Speaker</h3>
        <p>₹999</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 ShopEasy. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <div className="content">
        <h1>Welcome to ShopEasy</h1>
        <p>Find your favourite products at the best prices!</p>

        <h2>Our Products</h2>
        <ProductList />
      </div>

      <Footer />
    </>
  );
}

export default App;
