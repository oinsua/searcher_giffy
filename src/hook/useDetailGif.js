import {useEffect, useState} from 'react';
import get_Gif_Id from './../hook/useSearchGiffy';
import {useSearchGiffy} from './useSearchGiffy';

export const useDetailGif = ({id}) => {
    /* Recuperar el Gif si esta en cache */
    const {gifs} = useSearchGiffy();
    const gif_Cache = gifs.find(item => item.id == id);
    const [gif, setGif] = useState(gif_Cache);
    
    /* Crear el estado Loading y Error */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
          if(!gif){
              setLoading(true); //poner el loading en true
              /*Recuperar el Gif con una llamada al servicio */
              get_Gif_Id({id})
                 .then(item => {
                     setGif(item);
                     setLoading(false);
                     setError(false)
                    })
                .catch(error => {
                    setError(true);
                    setLoading(false);
                    console.log(error);
                })

          }

    },[setGif, id])
    
    return {
            gif,
            loading,
            error
          }
}


