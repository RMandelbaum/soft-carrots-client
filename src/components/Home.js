import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return(
        <div className="HomeContainer">
          <div className="PageContent">
              <h3>Welcome to Soft Carrots!</h3>
              <p>A comedy platform to view and submit jokes</p>
              <Link to="/jokes" >ENTER</Link>
          </div>
        </div>
    )
}

export default Home;
