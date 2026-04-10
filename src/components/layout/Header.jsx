import logo from "../../VIT_AP_logo.png";

const Header = () => {
  return (
    <div
      style={{
        background: "#0b3c8c",   // full blue block
        padding: "15px 0",
        textAlign: "center",
      }}
    >
      <img
        src={logo}
        alt="VIT-AP"
        style={{
          height: "80px",
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default Header;
