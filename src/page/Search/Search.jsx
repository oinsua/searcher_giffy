import React from 'react';
import { useParams, Redirect} from "react-router-dom";
import Searcher from './../../component/Searcher/Searcher';
import {useSearchGiffy} from './../../hook/useSearchGiffy';
import List_Gifs from './../../component/List_Gifs/List_Gifs';
import Skeleton_List from '../../skeletons/List_Gif/Skeleton_List';

const Search = () => {
    /*Tomando los parametros enviados por la url */
    const {keyword, rating = 'g', language = 'en'} = useParams();
    const {gifs, loading, error} = useSearchGiffy({keyword, rating, language});

    return (
        <>
           <Searcher intitialKeyword={keyword} initialRaiting={rating} initialLanguage={language}/>
           <h1 className="app-title"> Your last Search was "{decodeURI(keyword)}"</h1>
           {   //Si loading es true, muestra Skeleton sino el listado de Gif.
               loading ? <Skeleton_List array={[1,2,3,4,5,6,7,8,9,10]} /> : <List_Gifs gifs={gifs} />
           }
           {  //Si error es true, muestra un pagina 404
               error ? <Redirect to="/Error404" /> : null
           }
       
        </>
    );
}

export default Search;