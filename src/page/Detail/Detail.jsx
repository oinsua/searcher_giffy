import React from 'react';
import {useDetailGif} from './../../hook/useDetailGif';
import {useParams} from 'react-router-dom';

const Detail = () => {
     const {id} = useParams();
     const {gif, loading, error} = useDetailGif({id});
     
    return (
        <>
         <h2>Welcome to Detail Page</h2>
        </>
    );
}

export default Detail;