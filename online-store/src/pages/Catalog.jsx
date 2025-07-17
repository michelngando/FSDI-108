import "./catalog.css";
import Product from "../components/Product";
import DataService from "../service/data";
import { useState, useEffect } from "react";


function Catalog() {
    const [products, setProducts] = useState([]);

    useEffect(function () {
        loadCatalog();
    }, []);

    function loadCatalog() {
        //get the products
        let service = new DataService();
        let prods = service.getProducts();
        setProducts(prods);
    }

    return (
        <div className="main-content page">
            <h1>This is our catalog:</h1>
            <h5>We have {products.length} new products</h5>
            <br />
            <div className="catalog-items">
                {
                    products.map((item) => (
                        <Product key={item._id} data={item}></Product>
                    ))
                }
            </div>
        </div>
    )
}

export default Catalog;