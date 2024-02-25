import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const HomePageHeaderCard = () => {
  let words = "Welcome To AmanZone";
  const [letter, setLetter] = useState("w");
  let count = 1;

  const newLetter = () => {
    if (count === words.length - 1) {
      count = -1;
      setLetter("");
    }
    setLetter((prevLetter) => prevLetter + words[count]);
    count++;
  };
  useEffect(() => {
    const intervalId = setInterval(newLetter, 200);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="header-card">
      <div className="header-container">
        <div className="header-text">{letter}|</div>

        <div className="header-stat">
          At AmanZone, we redefine the online shopping experience, bringing
          you a curated selection of the latest trends, must-have essentials,
          and exclusive deals—all under one virtual roof.
          
        </div>
      </div>
    </div>
  );
};
const Category = ({ products }) => {
  const limitedProducts = products.slice(0, 3);
  const card = useRef();

   return (
    <>
      <div className="category-container">
        <span className="catergory-header">Categories</span>
        <p className="">visit our prominent categories now </p>
        <Link to="/items">
          <button className="visit-btn">Visit the Shop</button>
        </Link>
     
        <div className="category-cards">
          <div className="category-card-1">
            <div className="category-inner">
              <span className="category-name">Clothe</span>
            </div>
          </div>
          <div className="category-card-2">
            <div className="category-inner">
              <span className="category-name">Electronics</span>
            </div>
          </div>
          <div className="category-card-3">
            <div className="category-inner">
              <span className="category-name">Games</span>
            </div>
          </div>
        </div>
      </div>
      <div className="category-container">
        <span className="catergory-header">Our latest Arrivals</span>
        <p className="">this are our prominent latest products visit now </p>
        <Link to="/items">
          <button className="visit-btn">Visit the Shop</button>
        </Link>
        <div className="category-cards">
          {limitedProducts.map((product) => (
            <div key={product.id} className="category-card">
              <img className="card-image" src={product.image} />
              <div className="card-name">
                <span key={product.id} className="product-name">
                  {product.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const HomePage = ({ products }) => {
  return (
    <div>
      <HomePageHeaderCard />
      <Category products={products} />
    </div>
  );
};
export default HomePage;
