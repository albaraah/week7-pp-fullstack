import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [inventoryCount, setInventoryCount] = useState("");
    const [supplierName, setSupplierName] = useState("");
    const [supplierContactEmail, setSupplierContactEmail] = useState("");
    const [supplierContactPhone, setSupplierContactPhone] = useState("");
    const [isVerified, setIsVerified] = useState("true");;
    const [loading, setLoading] = useState(true);

    const user = JSON.parse(localStorage.getItem("user"));
    const token = user ? user.token : null;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/products/${id}`);
                const data = await res.json();
                setProductName(data.productName);
                setCategory(data.category);
                setDescription(data.description);
                setPrice(data.price);
                setInventoryCount(data.inventoryCount);
                setSupplierName(data.supplier.name);
                setSupplierContactEmail(data.supplier.contactEmail);
                setSupplierContactPhone(data.supplier.contactPhone);
                setIsVerified(data.supplier.isVerified ? "true" : "false");
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const updateProduct = async (product) => {
        try {
            const res = await fetch(`/api/products/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(product),
            });
            if (!res.ok) {
                throw new Error("Failed to update product");
            }
        } catch (error) {
            console.error(error);
            return false;
        }
        return true;
    };

    const submitForm = (e) => {
        e.preventDefault();

        const updatedProduct = {
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

        updateProduct(updatedProduct);
        return navigate(`/products/${id}`);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="create">
            <h2>Update product</h2>
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

                <button>Save Update</button>
            </form>
        </div>
    );
};

export default EditProductPage;