import React, { useState } from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import {Link} from 'react-router-dom';
import '../css/styles.css'
import barra from '../images/menu.png'


function Nav({onSearch}) {

  const [state, setstate] = useState('')

  function mostrar(){         
      const menu_items = document.querySelector('#items') 
      if(document.querySelector('#items')){
          menu_items.classList.toggle('menu_items')
          menu_items.classList.toggle('show')
          setstate(menu_items.className)
      }   
  }

  function ocultar(){
    if(state === 'show'){
        mostrar()
    }
  }
  

  return (
          <div className='contenedor'>
          <nav className='menu'>
            <span className='btn_menu' onClick={mostrar}>
              <img src={barra} alt='menu'/>
            </span>
              <ul id="items" className='menu_items'>
                <li>
                  <Link to="/">
                    <span onClick={ocultar}>
                      Weather App
                    </span>
                  </Link>
                </li>
                <li>  
                  <Link to="/About">
                      <span onClick={ocultar}>About</span>
                  </Link>
                </li>  
              </ul>   
                <SearchBar
                  onSearch={onSearch}
                />
          </nav>
          </div> 
  );
};

export default Nav;
