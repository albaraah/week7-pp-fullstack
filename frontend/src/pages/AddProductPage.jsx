import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProductPage = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [inventoryCount, setInventoryCount] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [supplierContactEmail, setSupplierContactEmail] = useState("");
  const [supplierContactPhone, setSupplierContactPhone] = useState("");
  const [isVerified, setIsVerified] = useState("true");

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user ? user.token : null;

  const navigate = useNavigate();

  const addProduct = async (newProduct) => {
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,

        },
        body: JSON.stringify(newProduct),
      });
      if (!res.ok) {
        throw new Error("Failed to add product");
      }
    } catch (error) {
      console.error(error);
      return false;
    }
    return true;
  };

  const submitForm = (e) => {
    e.preventDefault();

    const newProduct = {
      productName,
      category,
      description,
      price,
      inventoryCount,
      supplier: {
        name: supplierName,
        contactEmail: supplierContactEmail,
        contactPhone: supplierContactPhone,
        isVerified
      },
    };

    addProduct(newProduct);
    console.log(newProduct);

    return navigate("/");
  };

  return (
    <div className="create">
      <h2>Add a New product</h2>
      <form onSubmit={submitForm}>
        <label>Product Name:</label>
        <input
          type="text"
          required
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <label>Category:</label>
        <input
          type="text"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <label>Product Description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label>Price:</label>
        <input
          type="number"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>Inventory count:</label>
        <input
          type="number"
          required
          value={inventoryCount}
          onChange={(e) => setInventoryCount(e.target.value)}
        />

        <label>Supplier Name:</label>
        <input
          type="text"
          required
          value={supplierName}
          onChange={(e) => setSupplierName(e.target.value)}
        />

        <label>Supplier Email:</label>
        <input
          type="email"
          required
          value={supplierContactEmail}
          onChange={(e) => setSupplierContactEmail(e.target.value)}
        />

        <label>Supplier Contact Phone:</label>
        <input
          type="text"
          required
          value={supplierContactPhone}
          onChange={(e) => setSupplierContactPhone(e.target.value)}
        />

        <label>Verification:</label>
        <select required value={isVerified} onChange={(e) => setIsVerified(e.target.value)}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <button>Add Job</button>
      </form>
    </div>
  );
};

export default AddProductPage;