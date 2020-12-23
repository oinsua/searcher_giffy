import {url, api_key} from './config/service_config';
/* Extraer las propiedades correspondientes y retornar el Gif */
const response_Gif_Id = res => {
       /*Recuperar los datos del objeto res */
       const {data ={}} = res;
       const {id, title, rating, images} = data;
       const url = images.original.url; 
       return {id, title, rating, url};
}

const get_Gif_Id = ({id}) => {
    /*Construir la url para la consulta */
    const url_gif = `${url}/gifs/${id}?api_key=${api_key}`;
    /* consulta al servicio giffy para obtener un Gif a partir de su id */
    return fetch(url_gif)
             .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
             .then(res => res.json())
             .catch(error => console.error('Error:', error))
             .then(response_Gif_Id);
}

export default get_Gif_Id
