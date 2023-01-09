import React, { useState } from "react";
import { useHistory } from "react-router";
import './SearchBar.css';


export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState('')
  let history = useHistory() 

  function validateCity(city){
    let error = ''
    if(/(?=.*[0-9])/.test(city)){
        error = 'not numbers'
    }else{
        error = ''
    }
    return error
  }

  function handleInputChange(e){
    setErrors(validateCity(e))
    setCity(e)
  }

  function devolver(){
      if(history.location.pathname !== '/'){
        history.push('/')
      }
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('')
      devolver()
    }}>
      <input
        className={errors && 'danger'}
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => handleInputChange(e.target.value)}
      />
      <input disabled={errors && true} type="submit" value="Agregar" className="boton"/>
    </form>
  );
}
