import React from 'react';
import './App.css';
import './components/HomePage/homepage.component'
import { HomePage } from './components/HomePage/homepage.component';
import {DirectoryMenu} from './components/directory-menu/directory-menu.component'

function App() {

  const listable = [
    {id: 17,
    product: 'Hats'},
    {id: 6,
      product: "Shoes"
    },
    
    {
      id: 17,
      product: "Mens"
    }
  ]; 

  return (

  <div>
    <HomePage listables={listable}/>  
    
    </div>
  );
}

export default App;
