import React from 'react';
import Gifs from './../Gifs/Gifs';
import './List_Gifs.css';

const List_Gifs = ({gifs}) => {
    return (
        <div className="list-gifs">
             {
                 Array.isArray(gifs) && gifs.map(({id, title, url}) => <Gifs key={id} id={id} title={title} url={url} />)
             }
        </div>
    )
}

export default List_Gifs
