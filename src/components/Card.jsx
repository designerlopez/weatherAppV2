import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id}) {
    
    function time(){
      setTimeout(fun, 300);
    }

    function fun(){
       const btn = document.getElementById(`btn${id}`)
       const tarjeta = document.getElementById(`${id}`)
       tarjeta.className = 'card'
      
      
       btn.addEventListener('click',() => {
         tarjeta.className = 'dispel'
         setTimeout(onClose, 1200)
       })
    }

    time()

    return (
      <div className="cardinit" id={id}>
        
        <div id="closeIcon" className="row">
            <button id={`btn${id}`} >X</button>
        </div>
        <div className="card-body">
          <Link to={`/ciudad/${id}`}>
          <h5 className="card-title">{name}</h5>
          </Link>
          <div className="row">
            <div>
              <p>Min</p>
              <p>{(min-273.15).toFixed(2)}°</p>
            </div>
            <div>
              <p>Max</p>
              <p>{(max-273.15).toFixed(2)}°</p>
            </div>
            <div className='imageweather'>
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
