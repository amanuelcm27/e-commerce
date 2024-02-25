import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";

export const DetailsPage = ({ products }) => {
  const { itemId } = useParams();
  const [count , setCount ] = useState(0);
  const mainitems = products.filter(
    (product) => product.id === parseInt(itemId)
  );

  // Start of logic to store in local storage by id and retrieve later
  const getStoredItems = () => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : {};
  };

  const [items, setItems] = useState(() => {
    const storedItems = getStoredItems();
    return storedItems[itemId] || mainitems;
  });
  useEffect(() => {

      localStorage.setItem("items", JSON.stringify({ ...getStoredItems(), [itemId]: items }));
    

  }, [items, itemId]);
  // End of logic

  const QuantityReducer = (state, action) => {
    if (action.type === "incre") {
      const newState = state.map((item) => {
        if (item.quantity !== 100) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return { ...item, quantity: item.quantity };
        }
      });
      setItems(newState);
      return newState;
    }
    if (action.type === "decre") {
      const newState = state.map((item) => {
        if (item.quantity === 0) {
          return { ...item, quantity: 0 };
        } else {
          return { ...item, quantity: item.quantity - 1 };
        }
      });
      setItems(newState);
      return newState;
    }
  };

  const [state, dispatch] = useReducer(QuantityReducer, items);
  const increment = (items) => {
    dispatch({ type: "incre", data: items });
  };
  const decrement = (items) => {
    dispatch({ type: "decre", data: items });
  };
  console.log(state)
  return (
    <div className="items-card">
      {state.map((item) => (
        <div className="detail-gird-container" key={item.id}>
          <div>
            <img className="item-image" src={item.image} alt={item.name} />
          </div>
          <div className="item-desc">
            <h1>{item.name}</h1>
            <span>${item.price}</span>
            <p>{item.description}</p>
            <div className="add-cart-section">
              <button id="add-to-cart-btn" onClick={() => increment(item)}>
                Add To Cart
              </button>
              <span className="cart-buttons">
                <button
                  id="add-to-cart-btn-left"
                  onClick={() => decrement(item)}
                >
                  -
                </button>
                <span
                  style={{
                    padding: "5px 15px",
                  }}
                >
                  {item.quantity}
                </span>
                <button
                  id="add-to-cart-btn-right"
                  onClick={() => increment(item)}
                >
                  +
                </button>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};