import React from 'react';
import {useDetailGif} from './../../hook/useDetailGif';
import {useParams, Redirect} from 'react-router-dom';
import Gifs from './../../component/Gifs/Gifs';
import Skeleton_Detail from '../../skeletons/Detail/Skeleton_Detail';

const Detail = () => {
     const {id} = useParams();

     /*Se ejecuta el use para recuperar el Gif, el estado del loading y el error */
     const {gif, loading, error} = useDetailGif({id});
     
     if(gif) gif.css = "detail-gif";  //Se le asigna un nombre de clase para estilar el skeleton
    
    return ( 
        <>
        { //Si loading es true, se muestra skeleton sino el Gifs en vista detalle
            loading ?
                     <Skeleton_Detail type="detail" width="300px" height="280px"/>
                    :
                     <Gifs {...gif} />
        }
        {  //Si error es true, muestra un pagina 404
               error ? <Redirect to="/Error404" /> : null
        }
        </>
    );
}

export default Detail;