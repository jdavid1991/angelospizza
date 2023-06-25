import React from 'react';
import data from "./data";
import { Link } from 'react-router-dom';
import '../css/productos1.css'

const Productos1 = () => {

  const productos = data.map(productos => {
    return (
        <div key={productos.id}>
          
          <div>
          <h3><Link to={`/productos/${productos.id}`}>{productos.name}</Link></h3>
          <img className='car-image' src={productos.url} alt='si'></img>
          </div>
  
        </div>
    )

  })

  return (
    <>
    <div>
    <img className='img__pizza' src="https://blog.pedidosya.cl/static/cdcd63c1397b1b0a12cec95462cabbc4/f34aa/pizzapepperoni.webp" alt="" srcset="" />
    </div>

    <h1 style={{textAlign:'center'}}>! SIEMPRE PREPARAMOS NUESTROS PRODUCTOS CON <br /> LOS MEJORES INGREDIENTES !</h1>

    <div className="conte-prin">
    
    <div className="contendor-hamburguesa">
      <div className='img__hamb'>
      <img className='img__hamb1' src="https://media.istockphoto.com/id/1249806525/es/vector/ilustraci%C3%B3n-realista-de-elementos-voladores-de-hamburguesas-hamburguesa-de-comida-r%C3%A1pida.jpg?s=170667a&w=0&k=20&c=i8jU722R_HpvF0XWIdB5b2928AIAGzdFJYvFa9rySi8=" alt="" srcset="" />
      </div>

      <div className='ingredientes' >
      <h2>100% Ingredientes frescos</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores possimus itaque vel. Qui eligendi in fugit, nam deleniti reiciendis ratione aliquam quas impedit? Dolore dignissimos illum magni expedita soluta?</p>
      <ul className='lista'>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores possimus itaque vel.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores possimus itaque vel.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores possimus itaque vel.</li>
      </ul>
      <button className='Order'>Ordenar Ahora</button>
      </div>

    </div>
    
    </div>
       
    <h1>Menu</h1>
    <div id='conte'>
      <div id='ListadoCarros'>
      {productos}    
      </div>
    </div>
    
   
   </>
  )
}

export default Productos1;