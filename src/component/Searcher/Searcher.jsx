import React, {useState, useCallback}from 'react';
import {useForm} from 'react-hook-form';
import { useHistory } from "react-router-dom";
//Importar componentes
import Input from './../Input/Input';
import Select from './../Select/Select';
import './Searcher.css';


/* los valores para los filtros de busquedas */
const RATING = ['g', 'pg', 'pg-13', 'r'];
const LANGUAGE = ['en', 'es', 'pt', 'fr', 'ru'];

const Searcher = () => {    
     /*Variables globales */
    const {register, handleSubmit, errors} = useForm();
    const history = useHistory(); //Se crea un objeto para la navegacion

    const onSubmit = useCallback((data) => {
        history.push(`/search/${data.search}/${data.Rating}/${data.Language}`);
    }, [history])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="search">
           <div className="search-form">
                <button>search</button>
                <Input name="search" type="text" register={register} validate={{required: true, maxLength: 50, minLength: 3}} msg="Write a word" view_label={false} />
           </div>
           <p className="error-msg">
                {errors.search?.type === "required" && "Your input is required"}
                {errors.search?.type === "maxLength" && "Your input exceed maxLength = 50"}
                {errors.search?.type === "minLength" && "Your input must exceed minLength = 3"}
           </p>
           <div className="search-filter">
               <Select name="Rating" register={register} validate={{required: true}} options={RATING} />
               <Select name="Language" register={register} validate={{required: true}} options={LANGUAGE} />
           </div>
        </form>
    );
}

export default React.memo(Searcher);