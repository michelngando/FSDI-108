
import DataContext from "../state/DataContext";
import "./Payment.css"
import { useContext } from "react";


function Payment() {
    const cart = useContext(DataContext).cart;
    return (
        <div className="payment page">
            <h1>Payment Information</h1>
            <div id="emailHelp" className="form-text">We pledge to keep your information secured.</div>
            <div className="main-form">
                <form className="payment-form" >
                    <div className="mb-3">
                        <label for="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="email" aria-describedby="emailHelp"></input>

                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"></input>
                    </div>
                    <div className="mb-3">
                        <label for="card number" className="form-label">Card Number</label>
                        <input type="number" className="form-control" id="card number"></input>
                    </div>
                    <div className="mb-3">
                        <label for="expiration date" className="form-label">Expiration date</label>
                        <input type="date" className="form-control" id="expiration date"></input>
                    </div>
                    <div className="mb-3">
                        <label for="cvv" className="form-label">CVV:</label>
                        <input type="number" className="form-control" id="cvv"></input>
                    </div>
                </form>
            
                <div className="pay-other">
                    <h5>Your total is: $99.99</h5>
                    <br />
                    <button type="submit" className="btn btn-primary">Click here to pay!</button>
                </div>
            </div>
        </div>

        
    );

}








export default Payment;
