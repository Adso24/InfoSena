import "../Css/Programa.css";
import { useParams } from "react-router-dom";
import {useState} from 'react';
import { Tecnologo } from "../components/Tecnologo";
import { Tecnico } from "../components/Tecnico";
// ESTE ES EL ARREGLO DE DATOS FICTICIO, QUE SIMULA EL QUE SE SACA DEL JSON
const programas = [
  {
    tipo: "tecnologo",
    programas: [
      {
        tipoPrograma: "TECNÓLOGO",
        tituloPrograma: "ARQUITECTURA",
        tituloFiltrado: "arquitectura",
        tipoFiltrado: "tecnologo",
        area: "construccion",
        descripcionPrograma:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde saepe quod eum rerum cumque necessitatibus, magni debitis accusantium minima odio? Obcaecati, aperiam ipsum. Sed labore quis dignissimos corporis fuga explicabo nemo dolor, dolores harum praesentium perferendis aspernatur minus placeat autem?",
        imagenes: [
          {
            srcImagen1: "/src/images/Arquitectura1.jpg",
          },
          {
            srcImagen2: "/src/images/Arquitectura2.jpg",
          },
        ],
      },
      {
        tipoPrograma: "TECNÓLOGO",
        tituloPrograma: "DISEÑO ARQUITECTONICO",
        tituloFiltrado: "diseñoarquitectonico",
        tipoFiltrado: "tecnologo",
        area: "construccion",
        descripcionPrograma:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde saepe quod eum rerum cumque necessitatibus, magni debitis accusantium minima odio? Obcaecati, aperiam ipsum. Sed labore quis dignissimos corporis fuga explicabo nemo dolor, dolores harum praesentium perferendis aspernatur minus placeat autem?",
        imagenes: [
          {
            srcImagen1: "/src/images/Arquitectura1.jpg",
          },
          {
            srcImagen2: "/src/images/Arquitectura2.jpg",
          },
        ],
      },
    ],
  },
  {
    tipo: "tecnico",
    programas: [
      {
        tipoPrograma: "TÉCNICO",
        tituloPrograma: "Técnico en LABORATORIO DE SUELOS",
        tituloFiltrado: "laboratoriodesuelos",
        tipoFiltrado: "tecnico",
        area: "construccion",
        descripcionPrograma:
          "El profesional técnico en Laboratorio de Suelos, Concreto y Asfalto tiene la capacidad de determinar las propiedades de suelos, concreto, asfalto y materiales complementarios de construcción en laboratorio y campo.",
        duracion: "12 Meses",
        jornada: "Diurna y nocturna",
        imagenFondo: "/src/images/tecnico_laboratorio_de_suelos.jpg",
      },
      {
        tipoPrograma: "TÉCNICO",
        tituloPrograma: "Técnico en AUTOMATIZACIÓN DE CNC",
        tituloFiltrado: "automatizacioncnc",
        tipoFiltrado: "tecnico",
        area: "automatizacion",
        descripcionPrograma:
          "El profesional técnico en Automatización CNC, Concreto y Asfalto tiene la capacidad de determinar las propiedades de suelos, concreto, asfalto y materiales complementarios de construcción en laboratorio y campo.",
        duracion: "14 Meses",
        jornada: "Diurna y nocturna",
        imagenFondo: "/src/images/tecnico_laboratorio_de_suelos.jpg",
      },
    ],
  },
  {
    tipo: "operario",
    programas: [
      {
        tipoPrograma: "OPERARIO",
        tituloPrograma: "PROGRAMA DE OPERARIO",
        tituloFiltrado: "sierraselectricas",
        tipoFiltrado: "operario",
        area: "construccion",
        descripcionPrograma:
          "El programa de operario en sierras eléctricas, tiene la capacidad de determinar las propiedades de suelos, concreto, asfalto y materiales complementarios de construcción en laboratorio y campo.",
        duracion: "8 Meses",
        jornada: "Diurna y nocturna",
        imagenFondo: "/src/images/operario.jpg",
      },
    ],
  },
  {
    tipo: "especializacion",
    programas: [
      {
        tipoPrograma: "ESPECIALIZACIÓN",
        tituloPrograma: "ESPECIALIZACIÓN EN CEMENTO",
        tituloFiltrado: "cemento",
        tipoFiltrado: "especializacion",
        area: "construccion",
        descripcionPrograma:
          "El programa de especialización en cemento, tiene la capacidad de determinar las propiedades de suelos, concreto, asfalto y materiales complementarios de construcción en laboratorio y campo.",
        imagenes: [
          {
            srcImagen1: "/src/images/Arquitectura1.jpg",
          },
          {
            srcImagen2: "/src/images/Arquitectura2.jpg",
          },
        ],
        duracion: "4 Meses",
        jornada: "Diurna y nocturna",
        imagenFondo: "/src/images/operario.jpg",
      },
    ],
  },
];

// ESTE ES EL COMPONENTE QUE EVALÚA SI EL PROGRAMA QUE SE PUSO EN LA URL ES UN TÉCNICO, UN TÉCNOLOGO, OPERARIO O ESPECIALIZACIÓN, LA PLANTILLA USADA PARA TÉCNICO Y TECNÓLOGO ES LA MISMA PARA OPERARIOS Y ESPECIALIZACIÓN
export const Programa = () => {
  // por medio de desestructuración, extraemos el nombre del programa específico de la url 
  const { nombrePrograma } = useParams();


  // aquí creo el arreglo programas, y el setProgramas se usa para modificar la información dentro del arreglo, y con el useState lo inicializamos como un arreglo vacío hasta que se consuma la api con el getData()
  const [variosProgramas, setVariosProgramas] = useState([]);


// este bloque comentado es el que se va a usar para consumir la api
  
//   useEffect(() => {
//     const getData = async () => {
//       const url = ``;    AQUÍ SE DEBE PONER LA URL DE LA API CON EL ENDPOINT DE PROGRAMA ej: www.info-sena.com/areas/construccion/<:nombrePrograma>
//       const resp = await fetch(url);
//       const programas = await resp.json();
//       return setVariosProgramas(programas);
//     };
//     getData();
//   }, [variosProgramas]);
// debajo de getData() tenemos una coma y un arreglo con variosProgramas adentro, esta es la dependencia que cuando cambie, hará que se vuelva a renderizar de manera automática los componentes


  // aquí estamos filtrando el programa que coincida con el de la url para utilizarlo y renderizarlo
  const programaUrl = programas.reduce((result, tipoPrograma) => {
    if (!result) {
      return tipoPrograma.programas.find(
        (programa) => programa.tituloFiltrado === nombrePrograma
      );
    }
    return result;
  }, null);

  if (!programaUrl) {
    return <div>Programa no encontrado</div>;
  }

  // si se encuentra un resultado en la variable anterior, entonces lo mostraremos dependiendo del tipo de programa, y lo pasamos por props (propiedades)
  switch (programaUrl.tipoFiltrado) {
    case "tecnico":
      return <Tecnico programa={programaUrl} />;
    case "tecnologo":
      return <Tecnologo programa={programaUrl} />;
    case "operario":
      return <Tecnico programa={programaUrl} />;
    case "especializacion":
      return <Tecnologo programa={programaUrl} />;
    default:
      return <div>Tipo de programa no soportado</div>;
  }
};
