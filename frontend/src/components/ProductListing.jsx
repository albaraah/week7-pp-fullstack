const ProductListing = ({ product }) => {
    return (
        <div>
            <h2>{product.productName}</h2>
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>Invbentory: {product.inventoryCount}</p>
            <p>Supplier Name: {product.supplier.name}</p>
            <p>Supplier Email: {product.supplier.contactEmail}</p>
            <p>Supplier Phone #: {product.supplier.contactPhone}</p>
            <p>Verified Status: {product.supplier.isVerified ? "Yes" : "No"}</p>
        </div>
    );
};

export default ProductListing;