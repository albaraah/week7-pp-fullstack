import { Link } from "react-router-dom";

const Navbar = () => {
  const handleClick = () => {
    localStorage.removeItem("user");
  };
  return (
    <nav className="navbar">
      <h1>Product search</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/add-product">Add Product</a>
        <a href="/signup">Signup</a>
        <a href="/login">Login</a>
        <button className onClick={handleClick}>Log out</button>
      </div>
    </nav>
  );
}

export default Navbar;