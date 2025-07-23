import { useContext, useEffect, useState } from "react";
import "./product.css";
import QuantityPicker from "./QuantityPicker";
import DataContext from "../state/DataContext";

function Product(props) {

    const addProductToCart = useContext(DataContext).addProductToCart;
    const [quantity, setQuantity] = useState(1);
        function add() {
        console.log("Adding products to the cart");

        let copy = {...props.data};
        copy.quantity = quantity;

        addProductToCart(copy)        
    }
function handleQuantity(val){
    console.log("changed!", val)
    setQuantity(val)
}

    return (
        <div className="product">
            
            <img src={"/images/" + props.data.image}></img>
            <h3>{props.data.title}</h3>
            <div className="price-section">
                <div className="prices">
                    <label>Total: ${(quantity * props.data.price).toFixed(2)}</label>
                    <label>Price: ${props.data.price.toFixed(2)}</label>
                </div>
            </div>            
            <div className="add-button controls">
                <QuantityPicker onChange={handleQuantity} />
                <button className="btn btn-sm btn-success" onClick={add}>Add</button>
            </div>

        </div>
    );
}





export default Product;