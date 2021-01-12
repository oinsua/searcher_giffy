import React, {useRef, useCallback, useEffect} from 'react';
import { useParams, Redirect} from "react-router-dom";
import {Helmet} from "react-helmet";
import debounce_it from 'just-debounce-it';
//Importando componentes
import Searcher from './../../component/Searcher/Searcher';
import List_Gifs from './../../component/List_Gifs/List_Gifs';
import Skeleton_List from '../../skeletons/List_Gif/Skeleton_List';
//Importar hook
import {useSearchGiffy} from './../../hook/useSearchGiffy';
import { useIntersection_Observer } from '../../hook/useIntersection_Observer';

//Importando el Favicon
import Favicon from '../../assets/images/favicon.png'

 
const Search = () => {
    /*Tomando los parametros enviados por la url */
    const {keyword, rating = 'g', language = 'en'} = useParams();
    const {gifs, loading, error, setPage} = useSearchGiffy({keyword, rating, language});
    /*Haciendo uso del hook useIntersection Observer para el InfiniteScroll */
    const ref_external = useRef();
    const {intersection} = useIntersection_Observer({distance: '400px', flag: false, ref_external: loading ? null : ref_external}); //Se le pasa la referencia del elemento a observar
    const debounceHandle_NextPage = useCallback(debounce_it( //Funcion que se encarga de incrementar en 1 page
                                                          () => setPage(prevPage => prevPage + 1),200
                                                        )
                                                , [setPage])
    
    /* Efecto que se encarga de ejecutar una vez entre muchos renderizados el intersecting y la actualizacion del page */
    useEffect( () => {
          if(intersection) debounceHandle_NextPage();  
    }, [intersection, debounceHandle_NextPage])

    return (
        <>
           <Searcher intitialKeyword={keyword} initialRaiting={rating} initialLanguage={language}/>
           <h1 className="app-title"> Your last Search was "{decodeURI(keyword)}"</h1>
           {   //Si loading es true, muestra Skeleton sino el listado de Gif.
               loading ? 
                         <Skeleton_List array={[1,2,3,4,5,6,7,8,9,10]} /> 
                       :  
                       <>
                          <Helmet>
                                <title>Giffy-Search</title>
                                <meta name="application-name" content="searcher_giffy" />
                                <meta name="description" content="Giffy-Search"/>
                                <meta name="google" content="notranslate"/>
                                <link rel="icon" href={Favicon} sizes="32x32" type="image/png"></link>
                            </Helmet>
                          <List_Gifs gifs={gifs} />
                       </>
           }
           {  //Si error es true, muestra un pagina 404
               error ? <Redirect to="/Error404" /> : null
           }
           <div id="visor" ref={ref_external}></div>       
        </>
    );
}

export default Search;