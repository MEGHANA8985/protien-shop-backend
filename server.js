const express = require("express");
const cors = require("cors");
const neo4j = require("neo4j-driver");

const app = express();

// ✅ VERY FIRST MIDDLEWARE
// app.use(cors({
//   origin: ["http://localhost:5173", "http://localhost:5174"]
// }));

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://protien-shop-aptu6hzg2-meghana8985s-projects.vercel.app"
  ]
}));

app.use(express.json());

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  console.log("🔥 HOME HIT");
  res.send("Backend working");
});

// ✅ PRODUCTS API
const driver = neo4j.driver(
  "neo4j://127.0.0.1:7687",
  neo4j.auth.basic("neo4j", "Maggie@123")
);

// app.get("/products", async (req, res) => {
//   console.log("🔥 PRODUCTS HIT");

//   let session;

//   try {
//     session = driver.session();

//     const result = await session.run("MATCH (p:Product) RETURN p");

//     const products = result.records.map((record) => {
//       const p = record.get("p").properties;

//       return {
//         name: p.name,
//         price: p.price?.low ?? p.price,
//         category: p.category,
//         rating: p.rating,
//         image: p.image,
//       };
//     });

//     res.json(products);

//   } catch (err) {
//     console.error("❌ ERROR:", err.message);
//     res.status(500).json({ error: err.message });
//   } finally {
//     if (session) await session.close();
//   }
// });

app.get("/products", (req, res) => {
  res.json([
    {
      name: "Whey Protein",
      price: 1999,
      category: "Whey",
      rating: 4.5,
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Creatine Monohydrate",
      price: 899,
      category: "Creatine",
      rating: 4.3,
      image: "https://via.placeholder.com/300"
    }
  ]);
});

// ✅ START SERVER
// app.listen(5000, () => {
//   console.log("🚀 Server running on http://localhost:5000");
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("🚀 Server running on port " + PORT);
});