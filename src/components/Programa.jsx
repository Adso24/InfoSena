import '../Css/Programa.css';
import {useParams} from 'react-router-dom';
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
            descripcion: "Descripción del programa técnico 1...",
            imagenes: ["/src/images/tecnico1-img1.jpg", "/src/images/tecnico1-img2.jpg"],
          },
          {
            id: 2,
            programa: "programa 1",
            ruta: "/areas/construccion/programa1",
            descripcion: "Descripción del programa técnico 1...",
            imagenes: ["/src/images/tecnico1-img1.jpg", "/src/images/tecnico1-img2.jpg"],
          },
          {
            id: 3,
            programa: "programa 1",
            ruta: "/areas/construccion/programa1",
            descripcion: "Descripción del programa técnico 1...",
            imagenes: ["/src/images/tecnico1-img1.jpg", "/src/images/tecnico1-img2.jpg"],
          },
          {
            id: 4,
            programa: "programa 1",
            ruta: "/areas/construccion/programa1",
            descripcion: "Descripción del programa técnico 1...",
            imagenes: ["/src/images/tecnico1-img1.jpg", "/src/images/tecnico1-img2.jpg"],
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
            descripcion: "Descripción del programa de arquitectura...",
            imagenes: ["/src/images/arquitectura-img1.jpg", "/src/images/arquitectura-img2.jpg"],
          },
          {
            id: 2,
            programa: "programa 2",
            ruta: "/areas/construccion/programa2",
            descripcion: "Descripción del programa de arquitectura...",
            imagenes: ["/src/images/arquitectura-img1.jpg", "/src/images/arquitectura-img2.jpg"],
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
export const Programa = () => {
  const { nombrePrograma } = useParams();
  const programa = programas.find((programa) => programa.tipos.tipoPrograma === nombrePrograma);
  

  if (!nombrePrograma) {
    return <div>Área no encontrada</div>;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img class="verde" src={verde} /> */}
        <h1 className="text-sm-end">TECNÓLOGO</h1>
        <h2>DIBUJO ARQUITECTONICO</h2>
        <div className="centrado">Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit, sed diam nonummy nibh euismod lncidunt ut
          laoreet dolore magna aliquam erat volutpat. Ut wisi
          enim ad minim veniam, quis nostrud exerci taóon
          ullamcorper suscipit lobors nisl ut aliquip ex ea
          commodo consequat. Duis autem vel eum iriure
          dolor in hendrerit in vulputate velit esse molese</div>
        
        <button type="button" className="btn btn-outline-dark"><a href="https://oferta.senasofiaplus.edu.co/sofia-oferta/">INSCRIBIRSE</a></button>
        <div className='imagenes'>
          {/* <img class="Azul" src={azul} /> */}
          <img className="Imagen1" src='/src/images/Arquitectura1.jpg' />
          <img className="Imagen2" src='/src/images/Arquitectura2.jpg' />


        </div>

      </header>
    </div>
  );
}
