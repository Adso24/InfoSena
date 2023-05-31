import { useRouteError } from "react-router-dom";
import '../Css/Error.css'
export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div className="contenedor">
        <div id="error-page">
          <h1>Vaya!</h1>
          <p>Lo sentimos, no se ha encontrado la ruta especificada.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    );
  }