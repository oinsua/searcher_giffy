import React from 'react';
import {Link} from 'react-router-dom';
import './Gifs.css';


const Gifs = ({id, title, url}) => {

    return (
        <div className="gifs">
            <Link className="gifs-link" to={`/detail/${id}`}>{title} -- {id}</Link>
            <img src={url} alt="gifs" loading="lazy" className="gifs-img" />
        </div>
    )
}

export default Gifs
