import {React, useEffect, useState} from "react";
import { Link} from "react-router-dom";
import "../Css/Areas.css";
import { ErrorPage } from "../components/ErrorRuta";

// Este es el arreglo de datos ficticio que contiene todas las áreas disponibles, su propiedad link es la que uso para redirigir a la ruta deseada, por medio de Link de react-router-dom
const areas = [
  {
    id: 1,
    title: "Construcción",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam quos iure minus corporis animi corrupti",
    image: "/src/images/construccion.jpg",
    link : "/areas/construccion"
  },
  {
    id: 2,
    title: "Teleinformática",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam quos iure minus corporis animi corrupti",
    image: "/src/images/informatica.jpg",
    link : "/areas/teleinformatica"
  },
  {
    id: 3,
    title: "Automatización",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam quos iure minus corporis animi corrupti",
    image: "/src/images/automatizacion.jpg",
    link : "/areas/automatizacion"
  },
  {
    id: 4,
    title: "Confecciones",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam quos iure minus corporis animi corrupti",
    image: "/src/images/confecciones.jpg",
    link : "/areas/confecciones"
  },
  {
    id: 5,
    title: "Soldadura",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam quos iure minus corporis animi corrupti",
    image: "/src/images/soldadura.jpg",
    link : "/areas/soldadura"
  },
  {
    id: 6,
    title: "Electricidad",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam quos iure minus corporis animi corrupti",
    image: "/src/images/electricidad.jpg",
    link : "/areas/electricidad"
  },
  {
    id: 7,
    title: "Fabricación Mecánica",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam quos iure minus corporis animi corrupti",
    image: "/src/images/mecanica.jpg",
    link : "/areas/fabricacionmecanica"
  },
  {
    id: 8,
    title: "Automotriz",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam quos iure minus corporis animi corrupti",
    image: "/src/images/automotriz.jpg",
    link : "/areas"
  },
];
export const Areas = () => {
  // creamos el arreglo de datos vacío y el modificador del arreglo haciendo uso del hook useState(), un hook es una función predeterminada de react
  const [dataAreas, setDataAreas] = useState([]);


  // En este bloque consumimos la api y hacemos que se renderice automáticamente cuando cambie la información dentro de dataAreas
  // useEffect(() => {
  //   const getData = async () => {
  //     const url = ``;   AQUÍ SE DEBE PONER LA URL DE LA API CON EL ENDPOINT DE AREAS ej: www.info-sena.com/areas/
  //     const resp = await fetch(url);
  //     const data = await resp.json();
  //     return setDataAreas(data);
  //   };
  //   getData();
  // }, [dataAreas]);

  return (
    <>

    <div className="imagen-fondo-areas">


{/* Esta es la barra de navegación, que la reutilizamos en varios componentes */}
      <nav>
        <div className="navegacion-areas">
          <Link to="/">Inicio</Link>

          <Link to="/bienestar">Bienestar</Link>

          <Link to="/biblioteca">Biblioteca</Link>

          <Link to="/areas">Áreas</Link>
        </div>
      </nav>

      <div className="contenido-areas">
        <div className="imagen-cabecero-areas">
          <img src="/src/images/logo-verde.png" alt="logo-verde-areas"/>
        </div>
        <div className="cabecero-derecha">
          <h1>Áreas de Formación</h1>
          <h4>
            Centro de diseño e innovación <br />
            tecnológico industrial
          </h4>
        </div>
      </div>

      <div id="contenedor-padre">
        {/* Recorremos el arreglo de areas sacado de la api y renderizamos sus propiedades */}
        {areas.map(({ id, title, image, link }) => {
          return (
            <div key={id} className="area">
              <img src={image} alt="imagen-area" className="imagen-area" />
              <p className="titulo-area">{title}</p>
              <Link to={`${link}`} className="enlace-areas">
                Ver más
              </Link>
            </div>
          );
        })}
      </div>
      
    </div>

        

    </>
  );
};
