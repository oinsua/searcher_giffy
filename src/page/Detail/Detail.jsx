import React from 'react';
import {Helmet} from "react-helmet";
import {useParams, Redirect} from 'react-router-dom';
//Importando componentes
import {useDetailGif} from './../../hook/useDetailGif';
import Gifs from './../../component/Gifs/Gifs';
import Skeleton_Detail from '../../skeletons/Detail/Skeleton_Detail';

//Importando el Favicon
import Favicon from '../../assets/images/favicon.png'

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
                    <>
                       <Helmet>
                                <title>Giffy-Detail</title>
                                <meta name="application-name" content="searcher_giffy" />
                                <meta name="description" content="Giffy-Detail"/>
                                <meta name="google" content="notranslate"/>
                                <link rel="icon" href={Favicon} sizes="32x32" type="image/png"></link>
                        </Helmet>
                        <Gifs {...gif} />
                    </>
        }
        {  //Si error es true, muestra un pagina 404
               error ? <Redirect to="/Error404" /> : null
        }
        </>
    );
}

export default Detail;