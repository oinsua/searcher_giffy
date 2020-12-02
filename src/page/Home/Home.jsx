import React from 'react';
import Searcher from './../../component/Searcher/Searcher';
import './Home.css';

const Home = () => {
    return (
        <>
           <Searcher/>
           <h1 className="home-title"> The last Search</h1>
        </>
    );
}

export default Home;