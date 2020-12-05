import React, {useEffect, useState} from 'react';
import get_gifs from './../service/get_gifs';

export const useSearchGiffy = ({keyword, raiting, language}={}) => {
    const [gifs, setGifs] = useState([]);
    const use_keyword = keyword || localStorage.getItem('lastkeyword');

    /* Crear los estados Loading y Error */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
   
    useEffect( () => {
        setLoading(true); //Poner el Loading en true
       //Ejecutar el servicio donde se obtienen los gifs.
       get_gifs({keyword:use_keyword, raiting, language})
         .then(item_gif => {
             setLoading(false);
             setError(false);
             setGifs(item_gif); //Actualizar el estado de gifs
             localStorage.setItem('lastkeyword', use_keyword); //Actualizar storage con la ultima keyword
             localStorage.setItem('lastraiting', raiting); //Actualizar storage con el raiting
             localStorage.setItem('lastlanguage', language); //Actualizar storage con el language
           })
        .catch(error => {
            setLoading(false);
            setError(true);
            console.log(error);
        })

       
    },[keyword, raiting, language, setGifs])

    return{
        gifs,
        setGifs,
        loading,
        error
    }
}