import { useParams, Link } from "react-router-dom";
import "/src/Css/Area.css";
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
];

export const Area = () => {
  const { nombreArea } = useParams();
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
                <span className="material-symbols-outlined">arrow_back</span>
              </Link>
              <h1 className="titulo-area-individual">{area.title}</h1>
              <p className="descripcion-area">{area.description}</p>
            </div>
            <hr />

            <div className="contenedor-programas">
              {area.tipos.map((tipo) => (
                <div key={tipo.tipoPrograma}>
                  <h2>{tipo.tipoPrograma}</h2>
                  <ul>
                    {tipo.programas.map((programa) => (
                      <li key={programa.id}>
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

