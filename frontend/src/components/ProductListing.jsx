import { Link } from "react-router-dom";

const ProductListing = ({ product }) => {
    return (
        <div>
            <h2>
                <Link to={`/products/${product.id}`}>{product.productName}</Link>
            </h2>
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <h4>Supplier:</h4>
            <p>Inventory: {product.inventoryCount}</p>
            <p>Supplier Name: {product.supplier.name}</p>
            <p>Supplier Email: {product.supplier.contactEmail}</p>
            <p>Supplier Phone #: {product.supplier.contactPhone}</p>
            <p>Verified Status: {product.supplier.isVerified ? "Yes" : "No"}</p>
        </div>
    );
};

export default ProductListing;