import React from 'react';
import {Redirect} from 'react-router-dom';
import {Helmet} from "react-helmet";
//Importando componentes
import Searcher from './../../component/Searcher/Searcher';
import List_Gifs from './../../component/List_Gifs/List_Gifs';
import Lazy_Trendings from '../../component/Lazy_Trendings/Lazy_Trendings';
import Skeleton_List from '../../skeletons/List_Gif/Skeleton_List';
//Importando Hook 
import {useSearchGiffy} from './../../hook/useSearchGiffy';
//Importando CSS
import './Home.css';

//Importando el Favicon
import Favicon from '../../assets/images/favicon.png'


const Home = () => {
    /*Recuperar los parametros de busqueda que se almacenan en el localstorage */
    const keyword = localStorage.getItem('lastkeyword');
    const raiting = localStorage.getItem('lastraiting');
    const language = localStorage.getItem('lastlanguage');
 
    /*Ejecutar el use para recuperar los gifs, el estado del loading y el error */
    const {gifs, loading, error} = useSearchGiffy({keyword, raiting, language});
    /*Si no existen el listado de gifs, se retorna null */
    if(!gifs) return null;

    return (
        <> 
           <Searcher/>
           <h1 className="app-title"> Your last Search was "{decodeURI(keyword)}"</h1>
           {   //Si loading es true, muestra Skeleton sino el listado de Gif.
               loading ?
                            <Skeleton_List array={[1,2,3,4,5,6,7,8,9,10]} /> 
                       : 
                       <>
                          <Helmet>
                                <title>Giffy-Home</title>
                                <meta name="application-name" content="searcher_giffy" />
                                <meta name="description" content="Giffy-Home"/>
                                <meta name="google" content="notranslate"/>
                                <link rel="icon" href={Favicon} sizes="32x32" type="image/png"></link>
                            </Helmet>
                            <List_Gifs gifs={gifs} />
                       </>
           }
           <Lazy_Trendings />   
           {  //Si error es true, muestra un pagina 404
               error ? <Redirect to="/Error404" /> : null
           }
        </>
    );
}

export default Home;