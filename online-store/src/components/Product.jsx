import "./product.css";
import QuantityPicker from "./QuantityPicker";

function Product() {
    return (
        <div className="product">
            <span>ID: 0000</span>
            <img src="https://picsum.photos/250/200" alt="" />
            <h3>I'm a product!</h3>
            <div className="price-section">
                <div className="prices">
                    <label>$total</label>
                    <label htmlFor="">$price</label>
                </div>
            </div>
            <div>
                <QuantityPicker/>
            </div>
            <div>
                <button className="btn btn-sm btn-success">Add</button>
            </div>

        </div>
    );
}

export default Product;