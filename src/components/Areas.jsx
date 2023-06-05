import React from "react";
import { Link } from "react-router-dom";
import "../Css/Areas.css";
const areas = [
  {
    id: 1,
    title: "Construcción",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam quos iure minus corporis animi corrupti",
    image: "/src/images/construccion.jpg",
  },
  {
    id: 2,
    title: "Teleinformática",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam quos iure minus corporis animi corrupti",
    image: "/src/images/informatica.jpg",
  },
  {
    id: 3,
    title: "Automatización",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam quos iure minus corporis animi corrupti",
    image: "/src/images/automatizacion.jpg",
  },
  {
    id: 4,
    title: "Confecciones",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam quos iure minus corporis animi corrupti",
    image: "/src/images/confecciones.jpg",
  },
  {
    id: 5,
    title: "Soldadura",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam quos iure minus corporis animi corrupti",
    image: "/src/images/soldadura.jpg",
  },
  {
    id: 6,
    title: "Electricidad",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam quos iure minus corporis animi corrupti",
    image: "/src/images/electricidad.jpg",
  },
  {
    id: 7,
    title: "Fabricación Mecánica",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam quos iure minus corporis animi corrupti",
    image: "/src/images/mecanica.jpg",
  },
  {
    id: 8,
    title: "Automotriz",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam quos iure minus corporis animi corrupti",
    image: "/src/images/automotriz.jpg",
  },
];
export const Areas = () => {
  return (
    <>

    <div className="imagen-fondo-areas">

      <nav>
        <div className="navegacion-areas">
          <Link to="/">Inicio</Link>

          <Link to="/bienestar">Bienestar</Link>

          <Link to="/biblioteca">Biblioteca</Link>

          <Link to="/directivas">Directivas</Link>

          <Link to="/areas">Áreas</Link>
        </div>
      </nav>

      <div className="contenido-areas">
        <div className="imagen-cabecero-areas">
          <img src="/src/images/logo-verde.png" alt="logo-verde-areas" />
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
        {areas.map(({ id, title, description, image }) => {
          return (
            <div key={id} className="area">
              <img src={image} alt="imagen-area" className="imagen-area" />
              <p className="titulo-area">{title}</p>
              {/* <p className="descripcion-area">{description}</p> */}
              <a href="#" className="enlace-areas">
                Ver más
              </a>
            </div>
          );
        })}
      </div>
    </div>

    <footer>
      <h4>HOLA SOY EL PIE DE PÁGINA</h4>
    </footer>


    </>
  );
};
