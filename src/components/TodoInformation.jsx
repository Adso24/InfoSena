import '/src/Css/TodoInformation.css';

// Componente que recibe props del componente Tecnico y las renderiza, se modifican los estilos directamente en el elemento por problema de compatibilidad
function TodoInformation(props) {
    return (
      <ul className='texto-tecnicos'>
        <h1 style={{color : 'white', fontSize : '40px', textAlign : 'left', marginBottom : '80px'}}>{props.tituloPrograma}</h1>
        <p style={{fontSize : '20px', textAlign : 'left', marginBottom : '50px'}}>{props.descripcionPrograma}</p>
        <p style={{fontSize : '20px', textAlign : 'left', marginBottom : '50px'}}>Duración: {props.duracion}</p>
        <p style={{fontSize : '20px', textAlign : 'left'}}>Jornada: {props.jornada}</p>
      </ul> 
    );
  }

  // Exportamos el componente
  export { TodoInformation };