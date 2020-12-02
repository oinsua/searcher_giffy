import React from 'react';
import {useForm} from 'react-hook-form';
import './Search.css';

const Searcher = () => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
          console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="search">
           <div className="search-form">
                <button>search</button>
                <input type="text" 
                        name="search" 
                        ref={register({
                            required: true,
                            maxLength: 50
                        })}
                    />
                {errors.search?.type === "required" && "Your input is required"}
                {errors.search?.type === "maxLength" && "Your input exceed maxLength = 50"}
           </div>
           <div className="search-filter">
               <label className="search-label"> Raiting:
                    <select>
                        <option>Ra</option>
                    </select>
               </label> 
               <label className="search-label"> Language: 
                    <select>
                        <option>Lan</option>
                    </select>
               </label>
           </div>
        </form>
    );
}

export default Searcher;