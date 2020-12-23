import {api_key, url} from './config/service_config';

const response_Gif = res => {
        const {data = []} = res;
  
        if(Array.isArray(data))
         {
             const gifs = data.map(item => {
                                             const {id, title} =item
                                             const {url} = item.images.downsized_medium
                                             return {id, title, url}  
                                            })
                                           
            return gifs;
         }
} 

const get_gifs = ({keyword = '', limit = 10, rating = 'g', language= 'en', page = 0} = {}) => {
    /*Construir la url para la consulta a la API Giffy */
    const api_url = `${url}/gifs/search?api_key=${api_key}&q=${keyword}&limit=${limit}&offset=${page*limit}&rating=${rating}&lang=${language}`;

    /* consulta al servicio giffy para obtener todos los gifs de una keyword */
    return fetch(api_url)
            .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response_Gif);
}

export default get_gifs;