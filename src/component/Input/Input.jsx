import React from 'react';
import './Input.css';

const Input = ({name, type, register, style = '', validate, msg, view_label }) => {
    
  const handleClear = (e) => {
     e.target.value = '';
  }

  return (
        <>
          {view_label && <label className="label">{name}</label>}
          <input 
                className={`input ${style}`} 
                name={name} 
                type={type} 
                ref={register(validate)}
                placeholder={msg} 
                onClick={handleClear}
          />  
        </>
    )
}

export default Input
