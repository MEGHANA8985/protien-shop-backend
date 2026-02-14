import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { useCart } from "../context/CartContext";

const categories = [
  "All",
  "Whey",
  "Creatine",
  "BCAA",
  "PreWorkout",
  "Fish Oil",
  "Multivitamins",
  "Mass Gainers",
  "Others",
];

const wheyImg =
  "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRyCOHc72CmnAdvphRhN3t0nG_HTh8fvFS2EbMgahrLyuYgSVTlIjjqhdCXOk9cBYBkkBgvBw7LcOsRck0rDj5kP29oirZcd7bpqbEW6K_8IQuVsetBIINBvNLf3zvOcAoV-GpTz0csOA&usqp=CAc";

const creatineImg =
  "https://img2.hkrtcdn.com/35711/prd_3571061-MuscleBlaze-Creatine-Monohydrate-CreAMP-0.88-lb-Unflavoured_o.jpg";

const fallbackImg =
  "https://via.placeholder.com/300x300?text=Supplement";

const categoriesList = ["Whey", "Creatine", "BCAA", "Mass Gainers"];

const allProducts = Array.from({ length: 50 }, (_, i) => {
  const category = categoriesList[i % 4];

  return {
    id: i + 1,
    name:
      [
        "Nutrabay Gold",
        "Optimum Nutrition",
        "MuscleBlaze",
        "Nakpro",
        "Avvatar",
        "Dymatize",
        "Isopure",
        "BigMuscles",
        "Naturaltein",
        "GNC",
      ][i % 10] +
      " " +
      category +
      " " +
      (i + 1),

    price: 799 + (i % 10) * 250,

    rating: (4.2 + (i % 6) * 0.1).toFixed(1),

    category,

    image:
      category === "Whey"
        ? wheyImg
        : category === "Creatine"
        ? creatineImg
        : fallbackImg,
  };
});



const Home = () => {
  const location = useLocation();
const query = new URLSearchParams(location.search);
const categoryFromUrl = query.get("category");

const [selectedCategory, setSelectedCategory] = useState(
  categoryFromUrl || "All"
);

  const { search } = useCart();

  let filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  filteredProducts = filteredProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>

      {/* HERO BANNER */}
      <div
        style={{
          background: "linear-gradient(to right, #000000, #222222)",
          height: "220px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "40px",
          color: "white",
          marginBottom: "30px",
          borderRadius: "8px",
        }}
      >
        <h1>Fuel Your Fitness Journey</h1>
        <p>Premium Supplements • Best Prices • Fast Delivery</p>
      </div>

      {/* CATEGORIES */}
      <div className="category-bar">
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              fontWeight: selectedCategory === cat ? "bold" : "normal",
              color: selectedCategory === cat ? "#2874f0" : "black",
              cursor: "pointer",
            }}
          >
            {cat}
          </div>
        ))}
      </div>

      <h2 style={{ marginBottom: "15px", color: "white" }}>
        {selectedCategory} Products
      </h2>

      <div className="products">
  {filteredProducts.slice(0, 8).map((p) => (
    <ProductCard key={p.id} product={p} />
  ))}
</div>

    </div>
  );
};

export default Home;
