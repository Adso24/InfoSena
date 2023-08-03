import { createBrowserRouter } from "react-router-dom";
import { Areas } from "../components/Areas";
import { Inicio } from "../components/Inicio";
import { Programas } from "../components/Programas";
import { ErrorPage } from "../components/ErrorRuta";
import {Construccion} from "../components/Construccion"
import {Bienestar} from '../components/Bienestar';
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/areas",
    element: <Areas />,
  },
  {
    path: "/programas",
    element: <Programas />,
  },
  {
    path : "/bienestar",
    element : <Bienestar/>
  },
  {
    path: "/areas/construccion",
    element: <Construccion />,
  },
]);
