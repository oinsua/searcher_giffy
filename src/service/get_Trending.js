import {url, api_key} from './config/service_config';

const response_Trending = ({res}) => {
     //Recuperar el arreglo de objetos que devuelve la API
    const {data = []} = res;
   return data;
}


const get_Trending = async () => {
     /*Construir la url para la consulta */
     const url_gif = `${url}/trending/searches?api_key=${api_key}`;
 
     //Ejecuto una llamada async await para obtener las tendencias
     try {
        const response = await fetch(url_gif);
        if (!response.ok) {
                            const message = `An error has occured: ${response.status}`;
                            throw new Error(message);
                          }
        const json = await response.json();
        return response_Trending({res: json})
     } catch (error) {
         const message = `An error has ocurred: ${error}`;
         throw new Error(message);
     }
        
                 
}

export default get_Trending
