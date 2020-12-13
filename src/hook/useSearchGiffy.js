import React, {useEffect, useState} from 'react';
import get_gifs from './../service/get_gifs';

export const useSearchGiffy = ({keyword, rating, language}={keyword:''}) => {
    const [gifs, setGifs] = useState([]);
    const use_keyword = keyword || localStorage.getItem('lastkeyword');

    /* Crear los estados Loading y Error */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
   
    useEffect( () => {
        setLoading(true); //Poner el Loading en true
       //Se agrega un settimeout para mostrar el skeleton por 3s.
       setTimeout(() => {
           /* Se hace la llamada al servicio para obtener los Gifs */
            get_gifs({keyword:use_keyword, rating, language})
            .then(item_gif => {
                setLoading(false);
                setError(false);
                setGifs(item_gif); //Actualizar el estado de gifs
                localStorage.setItem('lastkeyword', use_keyword); //Actualizar storage con la ultima keyword
                localStorage.setItem('lastraiting', rating); //Actualizar storage con el raiting
                localStorage.setItem('lastlanguage', language); //Actualizar storage con el language
            })
        .catch(error => {
            setLoading(false);
            setError(true);
            console.log(error);
        })  
       },3000);
       

       
    },[keyword, rating, language, setGifs])

    return{
        gifs,
        setGifs,
        loading,
        error
    }
}