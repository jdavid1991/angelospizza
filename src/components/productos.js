import React, { useEffect, useState } from 'react';
import '../css/productos.css'
import Footer from './footer';
import { Link } from 'react-router-dom';


function Productos() {

  const ListadoProductos = [
    {
      id: "1",
      name: "Hamburguesa Sencilla",
      p: "Extra queso jámon y piña",
      cost: "$6,50",
      url:
        "https://homeburgers.com/uploads/product/054bb48d12d44687b47c00b41ab31097/hs5.jpg",
      release_year: "Hamburguesa"
    },
    {
      id: "2",
      name: "Pizza Carne",
      p: "Extra queso, doble peperoni",
      cost: "$6,50",
      url:
        "https://tofuu.getjusto.com/orioneat-prod-resized/gjPJC7hhyL5modera-1200-1200.webp",
      release_year: "Pizza"
    },
    {
      id: "3",
      name: "Perro Sencillo",
      p: "Extra queso doble crema",
      cost: "$6,50",
      url:
        "https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2019/04/05085017/RFB-2603-4-perroscalientes.jpg",
      release_year: "Perro"
    },
    {
      id: "4",
      name: "Pizza Hawaina",
      p: "Extra queso jámon y piña",
      cost: "$6,50",
      url:
        "https://napolicartagena.com/wp-content/uploads/2022/01/La-Pizza-Hawaiana-de-Canada.jpg",
      release_year: "Pizza"
    },
    {
      id: "5",
      name: "Hamburguesa Doble carne",
      p: "Queso con borde de salsa chanel",
      cost: "$6,50",
      url: "https://cdn.pixabay.com/photo/2022/08/31/10/17/burger-7422970_1280.jpg",
      release_year: "Hamburguesa"
    },
    {
      id: "6",
      name: "Pizza Pollo-Champiñon",
      p: "Bordes con delicioso queso",
      cost: "$6,50",
      url: "https://images.hola.com/imagenes/cocina/recetas/20200123158802/receta-pizza-pollo-barbacoa/0-772-922/pizza-pollo-adobe-m.jpg",
      release_year: "Pizza"
    },
    {
      id: "7",
      name: "Perro Americano",
      p: "Deliciosa Salchica Ranchera",
      cost: "$6,50",
      url:
        "https://media.istockphoto.com/id/538999394/es/foto/perrito-caliente-con-todas-las-fijaciones.jpg?s=1024x1024&w=is&k=20&c=sq46zNCx_iIuL0iDdASd8EO3hL52gWeK1OE44wuvPAs=",
      release_year: "Perro"
    },
    {
      id: "8",
      name: "Perro Hawaiano",
      p: "Extra queso jámon y piña",
      cost: "$6,50",
      url:
        "https://i0.wp.com/www.elantojo.co/wp-content/uploads/2023/06/ElAntojo_Snoopy-hawaiano.jpeg?fit=1920%2C1279&ssl=1",
      release_year: "Perro"
    }
  ];

  const [ListadoFiltrado, setListadoFiltrado] = useState(ListadoProductos);  

  const [MarcaSeleccionada, setMarcaSeleccionada] = useState("");

  const [AnioSeleccionado,setAnioSeleccionado] = useState();

  const FiltradoxMarca = (DataFiltrado) => {
      if(!MarcaSeleccionada){
        return DataFiltrado;
      }
      
      const FiltradoAutos = DataFiltrado.filter(
        (car) => car.name.split(" ").indexOf(MarcaSeleccionada) !== -1
      );

      return FiltradoAutos;
  };

  const FiltradoxAnio = (DataFiltrado) => {
    if(!AnioSeleccionado){
      return DataFiltrado;
    }

    const FiltradoAutos = DataFiltrado.filter(
      (car) => car.release_year === AnioSeleccionado
    );

    return FiltradoAutos;
  };

  const handleCambioMarca = (event) => {
    setMarcaSeleccionada(event.target.value);
  };

  const handleCambioAnio = (event) => {
    
    const inputAnio = String(event.target.id);

    if(inputAnio === AnioSeleccionado){
      setAnioSeleccionado("");
    }else{
      setAnioSeleccionado(inputAnio);
    }
  };

  useEffect (() => {
    var DataFiltrado = FiltradoxMarca(ListadoProductos);
    DataFiltrado = FiltradoxAnio(DataFiltrado);
    setListadoFiltrado(DataFiltrado);
  },[MarcaSeleccionada,AnioSeleccionado]);


  return (
    <>
    <div className='App'>
      <div className='filtradomarca'>
        <div> Filtra por producto: </div>
        <select
          id='inputMarca'
          value={MarcaSeleccionada}
          onChange={handleCambioMarca}
          style={{width:'104px'}}
        >
          <option value=""> Todos </option>
          <option value="Hamburguesa">Hamburguesa</option>
          <option value="Perro">Perro</option>
          <option value="Pizza">Pizza</option>
        </select>
      </div>

      <div id="opcionesAnio" onClick={handleCambioAnio}>
        <div
          className={AnioSeleccionado === "Pizza" ? "opcionActivo" : "opcionFiltrado" }
          id="Pizza"
        > 
        Pizza 
        </div>
        <div
          className={AnioSeleccionado === "Hamburguesa" ? "opcionActivo" : "opcionFiltrado" }
          id="Hamburguesa"
        > 
        Hamburguesa
        </div>
        <div
          className={AnioSeleccionado === "Perro" ? "opcionActivo" : "opcionFiltrado" }
          id="Perro"
        > 
        Perro Caliente
        </div>
      </div>

      <div id="listadoCarros">
        {ListadoFiltrado.map( prod => (
          <div className='car-item' key={prod.id}>
            <img className='car-image'src={prod.url} alt='img'/>
            <div className='car-name'><Link to={`/productos/${prod.id}`}>{prod.name}</Link>
            <p className='pdetalle'>{prod.p}</p>
            <p className='cost'>{prod.cost}</p>
            </div>
            
          </div>
          
        ))}
        
      </div>
      
    </div>
    
    <div>
  
    </div>
    < Footer />
    </>
    
    );
   
}

export default Productos;