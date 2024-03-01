import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export const CartPage = () => {
  const [items, setItems] = useState([]);
  const [cartState, setCartState] = useState(false);
  let total = 0;
  let sum = 0;
  items.map((item) => {
    const pricePerItem = item.quantity * item.price;
    sum += pricePerItem;
    total = Math.round(sum);
  });
  useEffect(() => {
    const storedAsString = localStorage.getItem("items") || "{}";
    const storedItemsObject = JSON.parse(storedAsString);
    const storedItemsArray = Object.values(storedItemsObject);
    const storedItems = Object.keys(storedItemsObject)
      .map((key) => storedItemsObject[key])
      .flat();
    setItems(storedItems);
    if (storedAsString !== "{}") {
      setCartState(true);
    }
  }, []);
  return (
    <>
      <div className="cart-container">
        <div className="cart-list-container">
          <span className="cart-header">Your cart</span>
          <p>
            Not readys to checkout ?{" "}
            <Link to="/items" className="back-btn">
              continue shopping
            </Link>
          </p>
          {cartState ? (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <img className="cart-item-image" src={item.image}></img>
                <div className="cart-item-detail">
                  <Link to={`/detail/${item.id}`}>
                    <span className="cart-item-name">{item.name}</span>
                  </Link>

                  <span> Quantity : {item.quantity}</span>
                  <span className="cart-item-price">${item.price}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="cart-item">
              <img
                className="cart-item-image"
                src="images/empty cart.png"
              ></img>
              <div className="cart-item-detail">
                <span className="cart-item-price"></span>
              </div>
            </div>
          )}
        </div>
        <div className="order-container">
          <span className="cart-header">Order Summary</span>
          
          {items.map((item) => (
            <div className="order-list">
              <div className="list-item">{item.name} </div>
              <div className="list-item-price">
                {" "}
                ${Math.round(item.price * item.quantity)}
              </div>
            </div>
          ))}

          <p style={{ fontSize: "1.5rem", marginTop: "50px" }}>
            {" "}
            Total:${total}
          </p>
          <button className="checkout">Check Out</button>
        </div>
      </div>
    </>
  );
};
