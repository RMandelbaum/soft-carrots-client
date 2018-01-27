import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return(
        <div className="HomeContainer">
          <div className="PageContent">
            <h2>Create and view jokes</h2>
            <Link to="/jokes" exact >Enter</Link>
          </div>
        </div>
    )
}

export default Home;
