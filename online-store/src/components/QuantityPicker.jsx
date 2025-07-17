import { useState } from "react";
import "./QuantityPicker.css"

function QuantityPicker(){
    const [quantity, setQuantity] = useState(1);

function addQty(){
    console.log("adding the quantity");
    //if(quantity === 1) return:
    let val = quantity + 1;
    setQuantity(val);
};

function decreasingQty(){
    console.log("decreasing the qty");
    let val = quantity - 1;
    setQuantity(val);
};
    
    return(
        <div className="qt-picker">
            <button className="btn btn-sm btn-outline-dark" onClick={decreasingQty} disabled={quantity === 1}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-outline-dark" onClick={addQty}>+</button>
        </div>
    )
}

export default QuantityPicker;