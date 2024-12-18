import React, { useState } from "react";

const ProductPage = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Dữ liệu sản phẩm mẫu (mỗi danh mục sẽ có 6 sản phẩm)
  const products = [
    // Đồ chơi lắp ráp
    {
      id: 1,
      name: "Đồ chơi xếp hình lắp ghép các mẫu khủng long nhỏ từ 25-42 mảnh ghép cho bé",
      price: 17500,
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/403/846/products/12-44deb213-b8b4-4780-9d81-277d28f167dc.jpg?v=1727948134680",
      category: "Đồ chơi lắp ráp",
    },
    {
      id: 2,
      name: "Đồ chơi xếp hình lắp ghép đoàn tàu voi con với 55 mảnh ghép lớn an toàn cho bé từ 3 tuổi",
      price: 18000,
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/403/846/products/27-3c15060d-c517-43f8-a8ec-e9bf6f2df13c.jpg?v=1732465572317",
      category: "Đồ chơi lắp ráp",
    },
    {
      id: 3,
      name: "Đồ chơi lắp ghép trang trại 120 chi tiết - Hàng Cao Cấp - 4826 – Polesie Toys",
      price: 349000,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/285/774/products/4826-869b20b5-938e-42ce-ae75-505bb50c603c.jpg?v=1715152786643",
      category: "Đồ chơi lắp ráp",
    },
    {
      id: 4,
      name: "Bộ lắp ghép xếp hình cỡ lớn 78 chi tiết PL3001",
      price: 305000,
      image:
        "https://dochoiphulong.com/wp-content/uploads/2020/10/bo-do-choi-lep-ghep-78-chi-tiet-pl3001.jpg",
      category: "Đồ chơi lắp ráp",
    },
    {
      id: 5,
      name: "Đồ chơi lắp ghép kích thước lớn 36 chi tiết -Hàng cao cấp – 37527- Polesie Toys",
      price: 2495000,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/285/774/products/37527-1-6-dcc9a060-145e-4af9-8252-2330e9a7a6ba.jpg?v=1715154040157",
      category: "Đồ chơi lắp ráp",
    },

    // Xe điều khiển
    {
      id: 7,
      name: "Siêu xe điều khiển từ xa FD - 0101",
      price: 15500,
      image:
        "https://product.hstatic.net/1000166921/product/fd-0101_1000x1000_e00a19306c184226b5865f76ec97a5ba_small.png",
      category: "xe điều khiển",
    },
    {
      id: 8,
      name: "Xe đua điều khiển từ xa có đèn FD-0002",
      price: 26000,
      image:
        "https://product.hstatic.net/1000166921/product/fd-0002_95cdbbd37c4d4faaa8b59f2cec2ee181_small.jpg",
      category: "xe điều khiển",
    },
    {
      id: 9,
      name: "Siêu xe thể thao điều khiển từ xa 070",
      price: 150000,
      image:
        "https://boquatangcongty.vn/upload/sanpham/large/sieu-xe-the-thao-dieu-khien-tu-xa-070-1710318334-bce7dc.png",
      category: "xe điều khiển",
    },
    {
      id: 10,
      name: "Xe điều khiển từ xa Lamborghini tay lái vô lăng R7010-R8010",
      price: 297000,
      image:
        "https://dochoitreem.com/wp-content/uploads/2015/06/Xe-dieu-khien-tu-xa-Lamborghini-tay-lai-vo-lang-R7010-1-500x480.jpg",
      category: "xe điều khiển",
    },
    {
      id: 11,
      name: "Đồ chơi siêu xe ô tô điều khiển từ xa 3699-AR11",
      price: 225000,
      image:
        "https://mbmart.com.vn/thumbnails/products/large/100/329/420/products/xe-o-to-dieu-khien-tu-xa-no-3699-do-choi-van-dong-thong-minh1.jpg.webp",
      category: "xe điều khiển",
    },

    // Ô tô điện thể thao
    {
      id: 13,
      name: "Xe ô tô điện trẻ em Lamborghini A798",
      price: 2290000,
      image:
        "https://www.xechobe.com.vn/vnt_upload/product/11_2017/thumbs/300_xe_oto_dien_tre_em_lamborghini_a798_1_1.png",
      category: "Ô tô điện thể thao",
    },
    {
      id: 14,
      name: "Ô Tô Điện Trẻ Em BPD-720",
      price: 3100000,
      image:
        "https://bizweb.dktcdn.net/thumb/compact/100/169/104/products/2-46203285-4ce3-48d2-9b72-b84ccb96e44e.png?v=1730355707977",
      category: "Ô tô điện thể thao",
    },
    {
      id: 15,
      name: "Ô Tô Điện Trẻ Em BBH-035(1-5 tuổi)",
      price: 3690000,
      image:
        "https://bizweb.dktcdn.net/thumb/compact/100/169/104/products/bbh-035-1.jpg?v=1708940344393",
      category: "Ô tô điện thể thao",
    },
    {
      id: 16,
      name: "Xe ô tô điện trẻ em SJBB1600",
      price: 2500000,
      image:
        "https://docuabeyeu.com/wp-content/uploads/2020/07/xe-o-to-dien-tre-em-dia-hinh.jpg",
      category: "Ô tô điện thể thao",
    },
    {
      id: 17,
      name: "Xe ô tô điện trẻ em 2 chỗ ngồi kiểu dạng địa hình 028",
      price: 6750000,
      image:
        "https://daiphattoy.vn/upload/sanpham/large/xe-o-to-dien-tre-em-2-cho-ngoi-kieu-dang-dia-hinh-028-1616466229-e5ee42.jpg",
      category: "Ô tô điện thể thao",
    },
  ];

  // Lọc sản phẩm theo danh mục đã chọn
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="product-page">
      {/* Lọc theo danh mục */}
      <div className="category-filter">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="all">Tất cả sản phẩm</option>
          <option value="Đồ chơi lắp ráp">Đồ chơi lắp ráp</option>
          <option value="xe điều khiển">Xe điều khiển</option>
          <option value="Ô tô điện thể thao">Ô tô điện thể thao</option>
        </select>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{new Intl.NumberFormat("vi-VN").format(product.price)} VND</p>
            <button onClick={() => onAddToCart(product)}>Thêm vào giỏ</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
