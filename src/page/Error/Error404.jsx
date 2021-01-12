import React from 'react';
import {Helmet} from "react-helmet";
import {Link} from 'react-router-dom';

//Importando el Favicon
import Favicon from '../../assets/images/favicon.png'

const Error404 = () => {
    return (
        <>
        <Helmet>
          <title>Giffy-Search</title>
          <meta name="application-name" content="searcher_giffy" />
          <meta name="description" content="Giffy-Search"/>
          <meta name="google" content="notranslate"/>
          <link rel="icon" href={Favicon} sizes="32x32" type="image/png"></link>
        </Helmet>
            <h1>SE HA PRODUCIDO UN ERROR 404</h1>
            <Link to="/">GO TO GIFS HOME</Link>
        </>
    )
}

export default Error404
