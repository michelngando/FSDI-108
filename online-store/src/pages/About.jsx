import "./About.css"
import { useState } from "react";

function About(){
    //Apply all the logic here
    const [visibleEmail, setVisibleEmail] = useState(false);
    console.log(visibleEmail);
    function showEmail(){
        setVisibleEmail(true);
    }



    return(
        <div className="about">
            <h3>About Page</h3>
            <div className="box">
                <h2>Michel Ngando</h2>
                { visibleEmail ? <h5>michelngando@hotmail.com</h5> : <label>Clicke the button to see the email</label> }
                <br/>
                {
                    !visibleEmail
                    ? <button onClick={showEmail} className="btn btn-outline-primary">Show Email</button> : null
                }

            </div>
        </div>
    );
}




export default About;