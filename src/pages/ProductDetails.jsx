import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
      <p>More product info coming soon...</p>
    </div>
  );
};

export default ProductDetails;
