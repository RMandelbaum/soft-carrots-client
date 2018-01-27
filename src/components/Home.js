import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return(
        <div className="HomeContainer">
            <h1>Home Content</h1>
            <h2>Home Content</h2>
            <Link to="/about" exact >Learn More</Link>
        </div>
    )
}

export default Home;
