import React from 'react';
import './Select.css';  

const Select = ({name, register, validate, style='', options }) => {
    return ( 
        <>
           <label className="label">{name}
            <select 
            name={name} 
            className={`select ${style}`} 
            ref={register(validate)}>
            {
             options.map(item => <option key={item}>{item}</option>)
            }
            </select>
           </label>  
        </>
    )
}

export default Select
