import React, {useEffect, useState} from 'react';
import get_gifs from './../service/get_gifs';

const PAGE_INITIAL = 0; //Valor inicial para el infinite scroll

export const useSearchGiffy = ({keyword, rating, language}={keyword:''}) => {
    const [gifs, setGifs] = useState([]);
    const use_keyword = keyword || localStorage.getItem('lastkeyword');

    /* Crear los estados Loading y Error */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
   /* Efecto para obtener los Gifs iniciales que se muestran en la web */
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
            throw  new error;
        })  
       },3000);       
    },[keyword, rating, language, setGifs])
    /**********************************************************************************************/
     /*Efecto que se utiliza para obtener los resultados que se necesitan para el Infinite Scroll */
     const [nextLoading, setNextLoading] = useState(false);
     const [page, setPage] = useState(PAGE_INITIAL);

     useEffect(() => {
        if(page == PAGE_INITIAL) return; //Si page es 0 entonces no se esta solicitando un infinite scroll

        setNextLoading(true) //Poner a true el loading 
        //Se agrega un settimeout para mostrar el skeleton por 3s.
        setTimeout(() => { //Se llama al servicio para obtener los gifs
            get_gifs({keyword:use_keyword, rating, language, page}) //Se agrega page como parametro para obtener mas gifs
            .then(nextGifs => { //Se toman los Gifs que se obtienen del siguiente page
                                setGifs(prevGifs => prevGifs.concat(nextGifs)) //Se actualizan concatenando los previos con los que se obtiene a traves del servicio
                                setNextLoading(false);
                                setError(false);
                               })
            .catch(error => {
                            setNextLoading(false);
                            setError(true);
                            throw  new error;           
                             })
        }, 3000);
     },[page, use_keyword, rating, language]) 

    return {
            gifs,
            setGifs,
            loading,
            error,
            nextLoading,
            setPage
           }
}