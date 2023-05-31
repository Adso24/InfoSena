import {createBrowserRouter} from "react-router-dom";
import {Areas} from '../components/Areas';
import {Inicio} from '../components/Inicio';
import { Programas } from "../components/Programas";
import {ErrorPage} from '../components/ErrorRuta';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Inicio/>,
      errorElement : <ErrorPage/>
    },
    {
        path : "/areas",
        element : <Areas />
    },
    {
      path : "/programas",
      element : <Programas />
  }
  ]);