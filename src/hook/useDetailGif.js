import {useEffect, useState, useContext} from 'react';
import get_Gif_Id from './../service/get_Gif_Id';
import Context_Gifs from '../context/Context_Gifs';

export const useDetailGif = ({id}) => {
    /* Recuperar el Gif si esta en cache */
    const {gifs} = useContext(Context_Gifs);
    const gif_Cache = gifs.find(item => item.id == id); 
    const [gif, setGif] = useState(gif_Cache); //Inicializar el estado con el gif que esta en el contexto

    /* Crear el estado Loading y Error */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        /*Si no tenemos el gif en el contexto, entonces hacemos la llamada a la API */
        if(!gif){
                    setLoading(true); //poner el loading en true
                    //Se agrega un timeout para mostrar el skeleton por 3 segundos
                    setTimeout(() => {
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
                                throw new error;
                            })   
                    }, 10000);
                }
    },[setGif, id])
    
    return {
            gif,
            loading,
            error
          }
}


