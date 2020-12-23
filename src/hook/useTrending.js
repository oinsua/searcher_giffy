import {useEffect, useState} from 'react';
import get_Trending from '../service/get_Trending';

export const useTrending = () => {
    const [trend, setTrend] = useState({}); //Para controlar el estado de las tendencias
    
    const [trend_loading, setLoading] = useState(false); //Para controlar el estado de loading
    const [trend_error, setError] = useState(false); //Para controlar el estado de error
    
    useEffect( () => {
         setLoading(true); //Poner el loading en true para mostrar los skeleton
         //Ejecutar un timeout para mostrar los skeleton y dar tiempo a recuperar los datos
         setTimeout(() => {
             get_Trending()
                       .then(res => {
                           setTrend(res); //Actualizo el estado con los resultados de las tendencias
                           setLoading(false); //Poner loading a false, para poder mostrar los resultados
                           setError(false); //Poner error a false.
                       })
                       .catch(error => {
                            setLoading(false);
                            setError(true); //Poner error a true, para mostrar el error y redireccionar a 404
                            const message = `An error has ocurred: ${error}`;
                            throw new Error(message); //Mostrar el mensaje de error
                       })
         }, 3000); 
    }, [])

    return {
        trend,
        trend_loading,
        trend_error
    }
}
