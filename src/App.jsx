import { useState } from "react";

const products = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Cheese", category: "Dairy" },
  { id: 3, name: "Apple", category: "Fruits" },
  { id: 4, name: "Banana", category: "Fruits" },
  { id: 5, name: "Bread", category: "Bakery" },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Filter products
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div
      className="app"
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Shopping App</h1>

      {/* Dark Mode Button (IMPORTANT for tests) */}
      <button onClick={toggleDarkMode}>
        {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
      </button>

      <br />
      <br />

      {/* Category Filter */}
      <label>Select Category: </label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Fruits">Fruits</option>
        <option value="Bakery">Bakery</option>
      </select>

      <h2>Products</h2>

      {/* Products List */}
      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            data-testid={`product-${product.id}`}
            style={{ marginBottom: "10px" }}
          >
            <span>
              {product.name} - {product.category}
            </span>

            <button
              onClick={() => addToCart(product)}
              style={{ marginLeft: "10px" }}
            >
              Add to Cart
            </button>
          </div>
        ))
      )}

      <h2>Cart</h2>

      {/* Cart Display */}
      {cart.map((item, index) => (
        <p key={index}>{item.name} is in your cart.</p>
      ))}
    </div>
  );
}

export default App;