import { useContext, useEffect } from "react";
import "./product.css";
import QuantityPicker from "./QuantityPicker";
import DataContext from "../state/DataContext";

function Product(props) {

    const addProductToCart = useContext(DataContext).addProductToCart;

    function add() {
        console.log("Adding products to the cart");

        let copy = {...props.data};
        copy.quantity = 1;

        addProductToCart(copy)        
    }
    return (
        <div className="product">
            <span>ID: {props.data._id}</span>
            <img src={"/images/" + props.data.image}></img>
            <h3>{props.data.title}</h3>
            <div className="price-section">
                <div className="prices">
                    <label>Total: $0.00</label>
                    <label>Price: ${props.data.price}</label>
                </div>
            </div>
            <div>
                <QuantityPicker />
            </div>
            <div className="add-button">

                <button className="btn btn-sm btn-success" onClick={add}>Add</button>


            </div>

        </div>
    );
}





export default Product;