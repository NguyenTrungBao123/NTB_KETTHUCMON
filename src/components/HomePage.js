import React from "react";

const HomePage = ({ onAddToCart }) => {
  // Danh sách các sản phẩm nổi bật
  const products = [
    {
      id: 1,
      name: "Bộ đồ chơi Đường Ray tàu hỏa Plarail Set Series E8 Tsubasa Set",
      price: 1690000,
      image:
        "https://product.hstatic.net/200000504579/product/4904810915478.5_8f49b77d1ce2417690500b201f665562_master.png",
    },
    {
      id: 2,
      name: "Bộ đường ray đua nhảy vượt cầu Thomas & Friends DFL93 Fisher Price",
      price: 1399000,
      image:
        "https://product.hstatic.net/200000504579/product/bo-duong-ray-dua-nhay-cau-thomas-and-friends-dfl93-1_02826143637d4f048b2777748d82edf0_master.jpg",
    },
    {
      id: 3,
      name: "60368 Đồ chơi lắp ráp Lego  Arctic Explorer Ship - Bộ xếp hình Tàu thám hiểm bắc cực",
      price: 4500000,
      image:
        "https://bizweb.dktcdn.net/thumb/compact/100/096/240/products/60368-alt1-1.jpg?v=1702526969110",
    },
    {
      id: 4,
      name: "Đồ Chơi LEGO CITY Xe Địa Hình Cứu Hộ 60301",
      price: 1259100,
      image:
        "https://product.hstatic.net/1000192450/product/1_f4e29a74087a4ed9ad46e9e5a59999fd.jpg",
    },
    {
      id: 5,
      name: "Đồ chơi tàu hỏa đường ray trẻ em Takara Tomy Thomas & Friends Wobble Bridge Set dùng pin",
      price: 1650000,
      image:
        "https://product.hstatic.net/200000504579/product/fb461f623390447e9d86bcfa52621aec_b73399eb4a3441d396b7ed0fd8333cff_master.jpg",
    },
    {
      id: 6,
      name: "Đồ chơi robot lắp ghép biến hình thành siêu xe cỡ lớn",
      price: 240000,
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/403/846/products/03-181c90ba-d94b-44c4-99e3-47d81eddd0ce.jpg?v=1697214731790",
    },
    {
      id: 7,
      name: "Đồ chơi lắp ghép xếp hình xe tăng quân sự mẫu lớn cùng 8 mẫu xe nhỏ với hơn 1190 chi tiết",
      price: 280000,
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/403/846/products/3-bc75d8e1-1617-4ce1-abf3-37ba88d22953.jpg?v=1727847142323",
    },
    {
      id: 8,
      name: "Đồ chơi lắp ghép xếp hình xe moto thể thao màu đỏ cỡ lớn với 469 mảnh ghép cho bé",
      price: 250000,
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/403/846/products/14-df415b75-9d9a-4837-97fb-49ca169ba301.jpg?v=1732456231200",
    },
    {
      id: 9,
      name: "Đồ chơi trẻ em: Lắp ghép, xếp hình Robot biến hình transformer chiến đấu cơ DK 81101. Kiểu dáng, màu sắc ngẫu nhiên.",
      price: 153900,
      image:
        "https://salt.tikicdn.com/cache/750x750/ts/product/93/67/7a/dbb641b110e9c59757c5f223117150c6.jpg.webp",
    },
    {
      id: 10,
      name: "Đồ chơi mô hình Robot biến hình xe ô tô Transformer Optimus Prime, Bumblebee MySun",
      price: 132000,
      image:
        "https://salt.tikicdn.com/cache/750x750/ts/product/28/1c/35/f8ba905324f5d314c379c3eae7e29b09.png.webp",
    },
    {
      id: 11,
      name: "Đồ Chơi Xếp Hình: Ô tô Khủng Long Biến Hình - QMAN 4803",
      price: 270000,
      image:
        "https://salt.tikicdn.com/cache/750x750/ts/product/7a/f4/1f/395d4ee51521a58a41de5cbb1c344a65.jpg.webp",
    },
    {
      id: 12,
      name: "Đồ chơi lắp ráp mô hình máy bay trực thăng công kích QMAN 3211",
      price: 334000,
      image:
        "https://salt.tikicdn.com/cache/750x750/ts/product/c3/55/8c/a5bd6cbe02e1981d2e6ea05daa2236d6.jpg.webp",
    },
    {
      id: 13,
      name: "Xe ô tô điều khiển từ xa biến hình",
      price: 152000,
      image:
        "https://sieuthidaisymart.com/wp-content/uploads/2023/06/do-choi-tre-em-xe-oto-bien-hinh-robot-6-263x263.jpg",
    },
    {
      id: 14,
      name: "21142 LEGO Minecraft™ LEGO Minecraft the Polar Igloo",
      price: 1220000,
      image:
        "https://bizweb.dktcdn.net/thumb/compact/100/096/240/products/21142-alt1.jpg?v=1534239903357",
    },
    {
      id: 15,
      name: "𝟐𝟏𝟏𝟔𝟕  𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭 𝐓𝐡𝐞 𝐓𝐫𝐚𝐝𝐢𝐧𝐠 𝐏𝐨𝐬𝐭 _ 𝐓𝐫𝐚̣𝐦 𝐠𝐢𝐚𝐨 𝐝𝐢̣𝐜𝐡",
      price: 750000,
      image:
        "https://bizweb.dktcdn.net/thumb/compact/100/096/240/products/21167-alt1.jpg?v=1627752725463",
    },
    {
      id: 16,
      name: "Đồ chơi Lego City 60186 – Máy khoan hạng nặng",
      price: 1450000,
      image:
        "https://shopmc.vn/wp-content/uploads/2019/03/do_choi_lego_60186_1.jpg",
    },
  ];

  return (
    <div className="home-page">
      {/* Phần Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>Chào mừng bạn đến với TITAN Shop</h1>
          <p>Những sản phẩm đồ chơi tốt nhất, giá cả hợp lý!</p>
        </div>
      </section>

      {/* Sản phẩm nổi bật */}
      <section className="featured-products">
        <h2>Sản phẩm nổi bật</h2>
        <div className="product-list">
          {products.map((product) => (
            <div className="product-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{new Intl.NumberFormat("vi-VN").format(product.price)} VND</p>
              <button onClick={() => onAddToCart(product)}>
                Thêm vào giỏ hàng
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Liên hệ */}
      <section className="contact-info">
        <h2>Liên hệ</h2>
        <p>Email: titanshop@gmail.com</p>
        <p>Điện thoại: 0987 654 321</p>
      </section>
    </div>
  );
};

export default HomePage;
