import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
      <nav>
        <Link to="/">
          <span className="nav-logo">AmanZone</span>
        </Link>
        <ul>
          <Link to="/items">
            <li className="nav-item">Shop</li>
          </Link>
        </ul>
        <span className="cart-icon">
          <Link to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
  
          </Link>
        </span>
      </nav>
    );
  };