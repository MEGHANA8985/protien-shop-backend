import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useWishlist } from "../../context/WishlistContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const { wishlist } = useWishlist();

  const categories = ["Whey", "Creatine", "BCAA", "Mass Gainers"];

  return (
    <div className="navbar">
      <h2 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        Protein Shop
      </h2>

      {/* CATEGORY MENU */}
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          Home
        </span>

        {categories.map((cat) => (
          <span
            key={cat}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/?category=${cat}`)}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <span>❤️ {wishlist.length}</span>

        {user ? (
          <>
            <span>{user.email}</span>
            <span style={{ cursor: "pointer" }} onClick={logout}>
              Logout
            </span>
          </>
        ) : (
          <span style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>
            Login
          </span>
        )}

        <span style={{ cursor: "pointer" }} onClick={() => navigate("/cart")}>
          🛒 {cart.length}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
