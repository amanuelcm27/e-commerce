import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ItemsCard = ({ products }) => {
  const [filteredProducts, setFilter] = useState(products);

  const filter = (method) => {
    const filteredList = products.filter((product) => {
      if (method == "all") {
        return product;
      } else {
        return product.category === method;
      }
    });
    setFilter(filteredList);
  };
  return (
    <div className="items-card">
      <div className="item-header">
        <span className="item-header-text">Shop</span>
        <div className="item-header-sub">
          <span> choose from the our wide variety of goods down below </span>
          <div>
            <ul className="filters">
              Filter
              <li key="0">
                <label> All</label>
                <input
                  type="radio"
                  value="all"
                  name="filter"
                  onChange={(e) => filter(e.target.value)}
                />
              </li>
              <li key="1">
                <label>Electronics</label>
                <input
                  type="radio"
                  name="filter"
                  value="electronics"
                  onChange={(e) => filter(e.target.value)}
                />
              </li>
              <li key="2">
                <label>Games</label>
                <input
                  type="radio"
                  value="games"
                  name="filter"
                  onChange={(e) => filter(e.target.value)}
                />
              </li>
              <li key="3">
                <label>Clothe</label>

                <input
                  type="radio"
                  name="filter"
                  value="clothe"
                  onChange={(e) => filter(e.target.value)}
                />
              </li>
             
            </ul>
          </div>

          <div className="category-container">
            <div className="category-cards">
              {filteredProducts.map((product) => (
                <div key={product.id} className="category-card">
                  <img className="card-image" src={product.image} />
                  <div className="card-name">
                    <Link to={`/detail/${product.id}`}>
                      <span key={product.id} className="product-name">
                        {product.name}
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const ItemsPage = ({ products }) => {
  return <ItemsCard products={products} />;
};
