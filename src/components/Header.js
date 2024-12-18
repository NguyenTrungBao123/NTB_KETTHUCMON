import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = ({
  cartItems,
  cartCount,
  isLoggedIn,
  userName,
  onLogin,
  onLogout,
  onPayment,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const calculateTotalPrice = () => {
    return selectedItems
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
  };

  const openCheckoutModal = () => {
    setIsCheckoutModalOpen(true);
    setSelectedItems([]); // Khởi tạo lại selectedItems khi mở modal
  };

  const closeCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
  };

  const toggleItemSelection = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handlePayment = () => {
    onPayment(selectedItems);
    setSelectedItems([]); // Xóa các sản phẩm đã chọn thanh toán
    closeCheckoutModal();
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAJzO_eDY3EXeQcimve5gv-9HPNTuybXvS2Q&s"
          alt="Logo"
          style={{ height: "50px", width: "auto" }}
        />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/shop">Sản phẩm</Link>
          </li>
          <li>
            <Link to="/about">Giới thiệu</Link> {/* Thêm liên kết giới thiệu */}
          </li>
        </ul>
      </nav>

      <div className="header-actions">
        <form className="search-form">
          <input type="text" placeholder="Tìm kiếm sản phẩm..." />
          <button type="submit">Tìm</button>
        </form>

        <div
          className="cart-container"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="cart" onClick={openCheckoutModal}>
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cartCount}</span>
          </div>

          {isHovering && (
            <div className="cart-dropdown">
              <h4>Giỏ hàng của bạn</h4>
              <ul>
                {cartItems.length === 0 ? (
                  <li>Giỏ hàng trống</li>
                ) : (
                  cartItems.map((item, index) => (
                    <li key={index}>
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item)}
                        onChange={() => toggleItemSelection(item)}
                      />
                      <span>{item.name}</span> -{" "}
                      <span>{item.price.toLocaleString()} VND</span>
                    </li>
                  ))
                )}
              </ul>
              {selectedItems.length > 0 && (
                <div className="cart-summary">
                  <p>
                    <strong>
                      Tổng: {calculateTotalPrice().toLocaleString()} VND
                    </strong>
                  </p>
                </div>
              )}
              <div className="cart-actions">
                <button onClick={openCheckoutModal}>Xem giỏ hàng</button>
                <button onClick={handlePayment}>Thanh toán</button>
              </div>
            </div>
          )}
        </div>

        <div className="login">
          {isLoggedIn ? (
            <div>
              <span>Chào, {userName}</span>
              <button onClick={onLogout}>Đăng xuất</button>
            </div>
          ) : (
            <Link to="/login">
              <button>Đăng nhập</button>
            </Link>
          )}
        </div>
      </div>

      {isCheckoutModalOpen && (
        <div className="checkout-modal">
          <div className="modal-content">
            <h2>Thanh toán</h2>
            <ul>
              {cartItems.length === 0 ? (
                <li>Giỏ hàng trống</li>
              ) : (
                cartItems.map((item, index) => (
                  <li key={index}>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item)}
                      onChange={() => toggleItemSelection(item)}
                    />
                    {item.name} - {item.price.toLocaleString()} VND
                  </li>
                ))
              )}
            </ul>
            <button onClick={closeCheckoutModal}>Đóng</button>
            {selectedItems.length > 0 && (
              <div className="cart-summary">
                <p>
                  <strong>
                    Tổng: {calculateTotalPrice().toLocaleString()} VND
                  </strong>
                </p>
              </div>
            )}
            {selectedItems.length > 0 && (
              <button onClick={handlePayment}>Thanh toán</button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
