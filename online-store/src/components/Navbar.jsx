import { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import DataContext from "../state/DataContext";

function Navbar() {

    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;

    return (
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">Online Store</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">Catalog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <span className="btn btn-outline-dark btn-user">
                            {user.name}
                        </span>

                        <Link 
                        className="badge rounded-pill text-bg-info" to='/cart'>
                            <span className="badge rounded-pill text-bg-primary">{cart.length}</span> 
                            View Cart
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

//Link is used intead of the anchor <a><a/> because we're creating a single page application (SPA)
//The href is replaced by to. This makes the page faster, allowing the browser just to make a single call to the server