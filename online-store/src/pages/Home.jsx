import { Link } from "react-router-dom";
import "./Home.css"


function Home() {
    return (
        <div className="home page">
            <h1>Welcome to the Online Store!</h1>
            <br />
            <br />
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nobis quam id adipisci officiis tempore, natus necessitatibus dolore illo molestiae, inventore nemo? Optio fugiat enim eaque ex aut dolores ipsam?</p>
                <br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit deserunt nulla rerum debitis, vitae ipsum. Eos molestias architecto vitae commodi ullam veniam suscipit illum omnis enim sapiente. Vitae, quam cumque?</p>
                
                <div id="carouselExampleAutoplaying" className="carousel slide img-1 home-main" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/images/hoodie.png" className=" w-100"></img>
                        </div>
                                                
                        <div className="carousel-item">
                            <img src="/images/teapot.jpg" className="w-100"></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/banana.png" className="w-100"></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/cheese.png" className="w-100"></img>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <Link to="/catalog">
                <button>Click Here to see more!</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;
