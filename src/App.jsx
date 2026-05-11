import { useState } from "react";

const productsData = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Cheese", category: "Dairy" },
  { id: 3, name: "Apple", category: "Fruits" },
  { id: 4, name: "Banana", category: "Fruits" },
  { id: 5, name: "Bread", category: "Bakery" },
];

function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Cart state
  const [cart, setCart] = useState([]);

  // Filter state
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Add item to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Filter products
  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div
      className={darkMode ? "dark app" : "app"}
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Shopping App</h1>

      {/* Dark Mode Button */}
      <button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <br />
      <br />

      {/* Category Filter */}
      <label>Select Category: </label>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Fruits">Fruits</option>
        <option value="Bakery">Bakery</option>
      </select>

      <h2>Products</h2>

      {/* Product List */}
      {filteredProducts.map((product) => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
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
      ))}

      <h2>Cart</h2>

      {/* Cart Items */}
      {cart.map((item, index) => (
        <p key={index}>{item.name} is in your cart.</p>
      ))}
    </div>
  );
}

export default App;
