import { Link } from "react-router-dom";
import "./Login.css"

function Login(){
    return(
        <div className="page">
            <h1>Login Page</h1>
            <br />
            <form className="login-form">    
                
                <div className="mb-3">    
                    <label className="form-label">Username:</label>    
                    <input type="text" id="text" className="form-control"></input>      
                </div>
                <div className="mb-3">    
                    <label  className="form-label">Password:</label>    
                    <input type="password" id="password" className="form-control"></input>
                    <Link to="/home">
                        <button type="submit" className="btn btn-primary login-button">Sign-in</button>
                    </Link>    
                </div>

            </form>
        </div>

    )
}









export default Login;