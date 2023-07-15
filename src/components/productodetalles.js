import React from 'react';
import data from "./data";
import '../css/productoitem.css';
import { useNavigate, useParams} from 'react-router-dom';
import Profile from './navbar';
import Footer from './footer';

const ProductosDetalle = (event) => {

  const navigate = useNavigate()

  const back = () =>{
  navigate('/')
}


  const {productId} = useParams();
  const esteProducto = data.find(prod => prod.id === productId);
  

  if(!esteProducto){
    return (
        <div>
          <h1>NO HAY PRODUCTOS CON ESE ID.</h1>
        </div>
      )
  }
  return (
    <>
    < Profile />
    
    <div id='contenedor' >
        <div id='detalles' > 
        <h1>{esteProducto.name}</h1>
        <img src={esteProducto.url} width="200px" height="200px" alt='detail'/>
        <h3>Price: {esteProducto.precio}</h3>
        <p>Detalle: {esteProducto.descripcion}</p>
        </div>
        
        <div className='btback'>
          <button onClick={back}>Atras</button>
        </div>
        <div className="footer">
     < Footer />
    </div>
    </div>
    </>
  )
  
}

export default ProductosDetalle;