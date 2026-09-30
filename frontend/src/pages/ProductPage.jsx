import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/products/${id}`);
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await res.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <>
                    <h2>{product.productName}</h2>
                    <p>Category: {product.category}</p>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price}</p>
                    <h4>Supplier:</h4>
                    <p>Inventory: {product.inventoryCount}</p>
                    <p>Supplier Name: {product.supplier.name}</p>
                    <p>Supplier Email: {product.supplier.contactEmail}</p>
                    <p>Supplier Phone #: {product.supplier.contactPhone}</p>
                    <p>Verified Status: {product.supplier.isVerified ? "Yes" : "No"}</p>
                    <button onClick={() => handleGoHome()}>Back</button>
                </>
            )}
        </div>
    );
};

export default ProductPage;