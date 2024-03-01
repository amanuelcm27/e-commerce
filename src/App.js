import "./css/main.css";
import "./css/navigation.css"
import './css/homepage.css'
import "./css/cart.css"
import "./css/details.css"
import "./css/items.css"

import HomePage from "./pages/HomePage";
import { DetailsPage } from "./pages/DetailsPage";
import { CartPage } from "./pages/CartPage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ItemsPage } from "./pages/ItemsPage";
import { useState } from "react";
import { Footer } from "./componets/Footer";
import { Navigation } from "./componets/Navigation";

function App() {
  const products = [
    {
      id: 23,
      name: "Airpad Pro 14",
      image: "/images/earphone.jpg",
      category: "electronics",
      description: "Immerse yourself in high-quality audio with the Airpad Pro 14 earphones. These wireless earbuds offer crystal-clear sound and a comfortable fit, making them perfect for music lovers on the go.",
      price: 129.99,
      quantity: 0,
    },
    {
      id: 24,
      name: "Lenovo Legion 8",
      image: "/images/lenovo.avif",
      category: "electronics",
      description: "Elevate your gaming experience with the Lenovo Legion 8 laptop. This powerful gaming laptop features cutting-edge hardware, high refresh rates, and immersive graphics for an unparalleled gaming journey.",
      price: 1599.99,
      quantity: 0,
    },
    {
      id: 25,
      name: "Nike Airbus",
      image: "/images/shoe2.jpg",
      category: "clothe",
      description: "Step into style and comfort with the iconic Nike Airbus shoes. These fashionable sneakers combine modern design with premium materials, ensuring you make a statement with every step.",
      price: 89.99,
      quantity: 0,
    },
    {
      id: 26,
      name: "Beats H-6",
      image: "/images/beats.jpg",
      category: "electronics",
      description:
        "Experience premium sound quality with the Beats H-6 headphones. These over-ear headphones deliver deep bass, crisp highs, and exceptional clarity for an immersive audio experience.",
      price: 199.99,
      quantity: 0,
    },
    {
      id: 27,
      name: "Gucci",
      image: "/images/gucci.jpg",
      category: "clothe",
      description:
        "Elevate your fashion game with the timeless elegance of Gucci. This classic design combines luxury and style, making it a must-have accessory for fashion enthusiasts.",
      price: 499.99,
      quantity: 0,
    },
    {
      id: 28,
      name: "Days Gone",
      image: "/images/game.jpg",
      category: "games",
      description:
        "Embark on a post-apocalyptic adventure with Days Gone. This action-packed game offers an open-world experience, intense battles, and a gripping storyline that will keep you on the edge of your seat.",
      price: 49.99,
      quantity: 0,
    },
    {
      id: 29,
      name: "Sony Headphones",
      image: "/images/sony.jpg",
      category: "electronics",
      description:
        "Immerse yourself in high-quality audio with Sony Headphones. These wireless headphones provide superior sound, comfortable design, and noise-canceling technology, making them perfect for music lovers and audiophiles.",
      price: 149.99,
      quantity: 0,
    },
    {
      id: 30,
      name: "Adidas Running Shoes",
      image: "/images/adidas.jpg",
      category: "clothe",
      description:
        "Step into comfort and style with Adidas Running Shoes. Designed for both performance and casual wear, these shoes offer excellent support, durability, and a sleek modern look for your active lifestyle.",
      price: 79.99,
      quantity: 0,
    },
    {
      id: 31,
      name: "Nintendo Switch",
      image: "/images/nintendo.jpg",
      category: "electronics",
      description:
        "Unlock a world of gaming possibilities with the Nintendo Switch. This versatile gaming console allows you to play on-the-go or connect to your TV for a shared gaming experience. Join the Nintendo gaming community and enjoy countless adventures.",
      price: 299.99,
      quantity: 0,
    },
    {
      id: 32,
      name: "Smartwatch Pro",
      image: "/images/smartwatch.jpg",
      category: "electronics",
      description:
        "Stay connected and monitor your health with the Smartwatch Pro. Packed with advanced features such as fitness tracking, heart rate monitoring, and notifications, this smartwatch is your perfect companion for a modern and active lifestyle.",
      price: 129.99,
      quantity: 0,
    },
    {
      id: 33,
      name: "Levi's Jeans",
      image: "/images/jeans.avif",
      category: "clothe",
      description:
        "Embrace timeless style with Levi's Jeans. Crafted with precision and attention to detail, these jeans offer a comfortable fit and versatile look that suits any occasion. Elevate your wardrobe with Levi's quality denim.",
      price: 69.99,
      quantity: 0,
    },
    {
      id: 34,
      name: "Elden Ring",
      image: "/images/eldenring.jpg",
      category: "games",
      description:
        "Embark on an epic fantasy journey with Elden Ring. This highly anticipated action role-playing game features a vast open world, challenging enemies, and a rich storyline created in collaboration with George R.R. Martin. Prepare for an unforgettable gaming experience.",
      price: 59.99,
      quantity: 0,
    },
  ];
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Navigation />

          <Routes>
            <Route path="/" element={<HomePage products={products} />} />
            <Route path="/items" element={<ItemsPage products={products} />} />
            <Route path="/detail/:itemId/" element={<DetailsPage products={products} />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
