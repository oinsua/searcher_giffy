import React from 'react';
import Searcher from './../../component/Searcher/Searcher';
import List_Gifs from './../../component/List_Gifs/List_Gifs';
import {useSearchGiffy} from './../../hook/useSearchGiffy';
import './Home.css';

const Home = () => {
    /*Recuperar los parametros de busqueda que se almacenan en el localstorage */
    const keyword = localStorage.getItem('lastkeyword');
    const raiting = localStorage.getItem('lastraiting');
    const language = localStorage.getItem('lastlanguage');

    /*Ejecutar el use para recuperar los gifs */
    const {gifs, setGifs} = useSearchGiffy({keyword, raiting, language});

    return (
        <>
           <Searcher intitialKeyword={keyword} initialRaiting={raiting} initialLanguage={language}/>
           <h1 className="app-title"> Your last Search was "{decodeURI(keyword)}"</h1>
           <List_Gifs gifs={gifs} />
        </>
    );
}

export default Home;