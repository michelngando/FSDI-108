import "./catalog.css";
import Product from "../components/Product";


function Catalog() {
    return (
        <div className="main-content">
            <h1>This is our catalog:</h1>
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}

export default Catalog;