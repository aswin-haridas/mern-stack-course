import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
     const navigate = useNavigate();
     const goToAboutPage = () => { navigate("/about"); };

     return(
          <div>
               <h1>Home page.</h1>
               <Link to="/about">Go to About page</Link><br/>
               <Link to="/contact">Go to Contact page</Link><br/>

               <button onClick={goToAboutPage}>Go to About page</button>
          </div>
     )
}

export default Home;
