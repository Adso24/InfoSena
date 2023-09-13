import React from 'react';
import { TodoList } from '../components/TodoList';
import { TodoInformation} from '../components/TodoInformation';
import '/src/Css/Tecnico.css';


// Este es el componente de Tecnico, que recibe por medio de props el programa filtrado y que se usa para renderizar la información del programa en específico
export const Tecnico = ({ programa }) => {
  return (
    <div className="programa-tecnico-container">
      <div className="contenedor-imagenFondo">
        <div className="imagenFondo" style={{ backgroundImage: `url(${programa.imagenFondo})`}}/>
        <div className="triangulo-inclinado">
          {/* Aquí usamos otros dos subcomponentes para renderizar la información de los programas técnicos */}
          <TodoList>
            <TodoInformation
              tituloPrograma={programa.tituloPrograma}
              descripcionPrograma={programa.descripcionPrograma}
              duracion={programa.duracion}
              jornada={programa.jornada}
            />
          </TodoList>
        </div>
      </div>
      <div className="triangulo-inclinado-2" />
      <div className="esquina-inferior-derecha" />{/* Esquina verde */}
      <div className="esquina-inferior-derecha-transparencia" />{/* Esquina transparente */}
    </div>
  );
}


