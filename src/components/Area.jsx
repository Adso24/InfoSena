import { useParams, Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import "/src/Css/Area.css";
// ESTE ES EL ARREGLO FICTICIO DE DATOS QUE CONTIENE LAS ÁREAS, CADA ÁREA CONTIENE UNAS PROPIEDADES Y UNA EN ESPECÍFICO QUE ES tipos, que es una lista que indica el tipo de programa y los programas que tiene dentro de esa categoría, la propiedad programa es la que se renderiza en las columnas de la interfaz de área y la propiedad ruta es la que uso para redireccionar al darle click, al programa deseado
const programas = [
  {
    id: 1,
    title: "Construcción",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos similique nam, quaerat laborum odit pariatur. Deleniti facilis quaerat consectetur eius perferendis? Architecto eum fugit nemo facilis minus? Porro, voluptas delectus.",
    image: "/src/images/construccion.jpg",
    link: "/areas/construccion",
    param: "construccion",
    tipos: [
      {
        tipoPrograma: "Técnicos",
        programas: [
          {
            id: 1,
            programa: "laboratorio de suelos",
            ruta: "/areas/construccion/laboratoriodesuelos",
          },
          {
            id: 2,
            programa: "programa 1",
            ruta: "/areas/construccion/programa1",
          },
          {
            id: 3,
            programa: "programa 1",
            ruta: "/areas/construccion/programa1",
          },
          {
            id: 4,
            programa: "programa 1",
            ruta: "/areas/construccion/programa1",
          },
        ],
      },
      {
        tipoPrograma: "Tecnólogos",
        programas: [
          {
            id: 1,
            programa: "Arquitectura",
            ruta: "/areas/construccion/arquitectura",
           
          },
          {
            id: 2,
            programa: "Diseño arquitectónico",
            ruta: "/areas/construccion/diseñoarquitectonico",
          },
        ],
      },
      {
        tipoPrograma: "Operarios",
        programas: [
          {
            id: 1,
            programa: "Sierras eléctricas",
            ruta: "/areas/construccion/sierraselectricas",
          },
          {
            id: 2,
            programa: "programa 2",
            ruta: "/areas/construccion/programa2",
          },
          {
            id: 3,
            programa: "programa 2",
            ruta: "/areas/construccion/programa2",
          },
        ],
      },
      {
        tipoPrograma: "Especializaciones",
        programas: [
          {
            id: 1,
            programa: "Especialización en cemento",
            ruta: "/areas/construccion/cemento",
          },
          {
            id: 2,
            programa: "programa 2",
            ruta: "/areas/construccion/programa2",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Teleinformática",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos similique nam, quaerat laborum odit pariatur. Deleniti facilis quaerat consectetur eius perferendis? Architecto eum fugit nemo facilis minus? Porro, voluptas delectus.",
    image: "/src/images/informatica.jpg",
    link: "/areas/teleinformatica",
    param: "teleinformatica",
    tipos: [
      {
        tipoPrograma: "Técnicos",
        programas: [
          {
            id: 1,
            programa: "programa 1",
            ruta: "/areas/construccion/programa1",
          },
          {
            id: 2,
            programa: "programa 1",
            ruta: "/areas/construccion/programa1",
          },
          {
            id: 3,
            programa: "programa 1",
            ruta: "/areas/construccion/programa1",
          },
          {
            id: 4,
            programa: "programa 1",
            ruta: "/areas/construccion/programa1",
          },
        ],
      },
      {
        tipoPrograma: "Tecnólogos",
        programas: [
          {
            id: 1,
            programa: "programa 2",
            ruta: "/areas/construccion/programa2",
          },
          {
            id: 2,
            programa: "programa 2",
            ruta: "/areas/construccion/programa2",
          },
        ],
      },
      {
        tipoPrograma: "Operarios",
        programas: [
          {
            id: 1,
            programa: "programa 2",
            ruta: "/areas/construccion/programa2",
          },
          {
            id: 2,
            programa: "programa 2",
            ruta: "/areas/construccion/programa2",
          },
          {
            id: 3,
            programa: "programa 2",
            ruta: "/areas/construccion/programa2",
          },
        ],
      },
      {
        tipoPrograma: "Especializaciones",
        programas: [
          {
            id: 1,
            programa: "programa 2",
            ruta: "/areas/construccion/programa2",
          },
          {
            id: 2,
            programa: "programa 2",
            ruta: "/areas/construccion/programa2",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Automatizacion",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos similique nam, quaerat laborum odit pariatur. Deleniti facilis quaerat consectetur eius perferendis? Architecto eum fugit nemo facilis minus? Porro, voluptas delectus.",
    image: "/src/images/automatizacion.jpg",
    link: "/areas/automatizacion",
    param: "automatizacion",
    tipos: [
      {
        tipoPrograma: "Técnicos",
        programas: [
          {
            id: 1,
            programa: "Automatización CNC",
            ruta: "/areas/automatizacion/automatizacioncnc",
          },
          {
            id: 2,
            programa: "programa 1",
            ruta: "/areas/construccion/programa1",
          },
          {
            id: 3,
            programa: "programa 1",
            ruta: "/areas/construccion/programa1",
          },
          {
            id: 4,
            programa: "programa 1",
            ruta: "/areas/construccion/programa1",
          },
        ],
      },
      {
        tipoPrograma: "Tecnólogos",
        programas: [
          {
            id: 1,
            programa: "programa 2",
            ruta: "/areas/construccion/programa2",
          },
          {
            id: 2,
            programa: "programa 2",
            ruta: "/areas/construccion/programa2",
          },
        ],
      },
      {
        tipoPrograma: "Operarios",
        programas: [
          {
            id: 1,
            programa: "programa 2",
            ruta: "/areas/construccion/programa2",
          },
          {
            id: 2,
            programa: "programa 2",
            ruta: "/areas/construccion/programa2",
          },
          {
            id: 3,
            programa: "programa 2",
            ruta: "/areas/construccion/programa2",
          },
        ],
      },
      {
        tipoPrograma: "Especializaciones",
        programas: [
          {
            id: 1,
            programa: "programa 2",
            ruta: "/areas/construccion/programa2",
          },
          {
            id: 2,
            programa: "programa 2",
            ruta: "/areas/construccion/programa2",
          },
        ],
      },
    ],
  },
];

export const Area = () => {
  // Extraemos el nombre del área de la url ej: www.info-sena.com/areas/<:nombreArea>
  const { nombreArea } = useParams();

  
  // aquí creo el arreglo programas, y el setProgramas se usa para modificar la información dentro del arreglo, y con el useState lo inicializamos como un arreglo vacío hasta que se consuma la api con el getData()
  // const [areas, setAreas] = useState([]);


// este bloque comentado es el que se va a usar para consumir la api
  
//   useEffect(() => {
//     const getData = async () => {
//       const url = ``;    AQUÍ SE DEBE PONER LA URL DE LA API CON EL ENDPOINT DE AREA ej: www.info-sena.com/areas/<:nombreArea>
//       const resp = await fetch(url);
//       const areasJson = await resp.json();
//       return setAreas(areasJson);
//     };
//     getData();
//   }, [areas]);
// debajo de getData() tenemos una coma y un arreglo con areas adentro, esta es la dependencia que cuando cambie, hará que se vuelva a renderizar de manera automática los componentes

  // Filtramos el área del arreglo de datos extraído de la api y lo usamos para renderizar la información
  const area = programas.find((programa) => programa.param === nombreArea);

  if (!area) {
    return <div>Área no encontrada</div>;
  }

  return (
    <>
      <div className="contenedor-padre">
        <div className="contenedor-padre-elementos">
          <div className="contenido-izquierda">
            <div className="contenedor-header-area">
              <Link to={"/areas"}>
                <span className="material-symbols-outlined flecha-volver-atras">arrow_back</span>
              </Link>
              <h1 className="titulo-area-individual">{area.title}</h1>
              <p className="descripcion-area">{area.description}</p>
            </div>
            <hr />

            <div className="contenedor-programas">
              {/* Aquí recorremos el area filtrada del arreglo de datos sacado de la api y lo renderizamos por medio de sus propiedades ej: tipo.tipoPrograma, programa.ruta*/}
              {area.tipos.map((tipo) => (
                <div key={tipo.tipoPrograma}>
                  <h2>{tipo.tipoPrograma}</h2>
                  <ul>
                    {tipo.programas.map((programa) => (
                      <li key={programa.id}>
                        {/* Los elementos Link son sacados de la dependencia react-router-dom, que permite agregar rutas en React */}
                        <Link to={programa.ruta}>-{programa.programa}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="contenido-derecha">
            <div className="tarjeta-imagen">
              <img
                src="/src/images/construccion.jpg"
                alt="imagen-area-individual"
                width="50%"
                height="auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

