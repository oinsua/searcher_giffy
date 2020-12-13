import React from 'react';
import {Link} from 'react-router-dom';
import './Gifs.css';


const Gifs = ({id, title, url, css}) => {
    const classes = css || 'gifs'; //Asignar una clase  segun corresponda a Result o Detail
    
    return (
        <div className={classes}>
            { //Se evalua si se debe mostrar un titulo para las paginas detalle o un Link para la lista de Gifs
                css ? <h3 className="detail-gif-title">{title} -- {id}</h3>
                    : <Link className={`${classes}-link`} to={`/detail/${id}`}>{title} -- {id}</Link>
            }
            <img src={url} alt="gifs" loading="lazy" className={`${classes}-img`} />
        </div>
    )
}

export default Gifs
