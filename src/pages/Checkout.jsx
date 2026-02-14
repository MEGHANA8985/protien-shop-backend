import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (!user) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Please login to place order</h2>
        <button onClick={() => navigate("/login")}>Go to Login</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>

      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - ₹{item.price}
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#2874f0",
          color: "white",
          border: "none",
        }}
        onClick={() => alert("Order Placed Successfully!")}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
