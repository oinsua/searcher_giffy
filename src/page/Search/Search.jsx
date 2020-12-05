import React from 'react';
import { useParams} from "react-router-dom";
import Searcher from './../../component/Searcher/Searcher';
import {useSearchGiffy} from './../../hook/useSearchGiffy';
import List_Gifs from './../../component/List_Gifs/List_Gifs';

const Search = () => {
    /*Tomando los parametros enviados por la url */
    const {keyword, raiting = 'g', language = 'en'} = useParams();
    const {gifs, setGifs} = useSearchGiffy({keyword, raiting, language});

    return (
        <>
        <Searcher intitialKeyword={keyword} initialRaiting={raiting} initialLanguage={language}/>
        <h1 className="app-title">You have Search = "{decodeURI(keyword)}", Raiting = "{raiting}", Language = "{language}"</h1>
        <List_Gifs gifs={gifs} />
        </>
    );
}

export default Search;