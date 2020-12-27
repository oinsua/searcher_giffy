import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './page/Home/Home';
import Detail from './page/Detail/Detail';
import Login from './page/Login/Login';
import Search from './page/Search/Search'; 
import Logo from './assets/images/logo_blanco1.png';
import {Context_Gifs_Provider} from './context/Context_Gifs';
import './App.css'

const App = () => {
    return ( 
        <> 
           <header className="header-container">
                     <div className="menu-container">
                           <Link to="/Register">Register</Link>
                           <Link to="/login">Login</Link>
                     </div>
            </header>
            <Context_Gifs_Provider>
                <nav className="nav-container">
                        <Link to="/" className="logo-container">
                            <img src={Logo} alt="logo-giffy"/>
                        </Link>
                </nav>
                <section className="section-search">
                    <Switch>
                        <Route path="/" exact><Home/></Route>
                        <Route path="/login"><Login/></Route>
                        <Route path="/detail/:id"><Detail/></Route>
                        <Route path="/search/:keyword/:raiting?/:language?"><Search/></Route>
                    </Switch>
                </section>
            </Context_Gifs_Provider>
            <footer className="footer">Copyrigth</footer>
        </>
    );
}

export default App;