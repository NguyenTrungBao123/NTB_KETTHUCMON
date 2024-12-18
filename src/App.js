import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import Header from "./components/Header";
import Login from "./components/Login";
import ProductPage from "./components/ProductPage";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage"; // Import AboutPage

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUserName(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };

  const handlePayment = (selectedItems) => {
    const updatedCartItems = cartItems.filter(
      (item) => !selectedItems.includes(item)
    );
    setCartItems(updatedCartItems);
    alert(`Đã thanh toán ${selectedItems.length} sản phẩm!`);
  };

  return (
    <Router>
      <div className="App">
        <Header
          cartItems={cartItems}
          cartCount={cartItems.length}
          isLoggedIn={isLoggedIn}
          userName={userName}
          onLogin={() => setShowLoginPage(true)}
          onLogout={handleLogout}
          onPayment={handlePayment}
        />

        <Routes>
          <Route
            path="/"
            element={<HomePage onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/shop"
            element={<ProductPage onAddToCart={handleAddToCart} />}
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/about" element={<AboutPage />} />{" "}
          {/* Thêm tuyến đường AboutPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
