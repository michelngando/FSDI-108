import "./Admin.css"
import axios from "axios";

function Admin(){
    //let newResponse = axios.post("http://127.0.0.1:8000/api/products");
    return (
        <div className="page">
            <h1>Admin Page</h1>
            <br />
            <br />
            <h5>Enter info for your new product</h5>
            <form className="admin-form">                
                
                    
                    <div class="mb-3">
                        <label  className="form-label">Title:</label>
                        <input type="text" class="form-control-sm" id="product-name"></input>
                    </div>
                    <div class="mb-3">
                        <label  className="form-label">Category:</label>
                        <input type="text" class="form-control-sm" id="product-category"></input>
                    </div>
                    <div class="mb-3">
                        <label  className="form-label">Price:</label>
                        <input type="number" class="form-control-sm" id="product-name"></input>
                    </div>
                    <div class="mb-3">
                        <label  className="form-label">Image:</label>
                        <input type="text" class="form-control-sm" id="product-name"></input>
                    </div>
                    
                    <button  type="submit" className="btn btn-primary">Save Product</button>
                

            </form>
        </div>
    )
}











export default Admin;