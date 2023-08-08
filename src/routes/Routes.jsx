import { createBrowserRouter } from "react-router-dom";
import { Areas } from "../components/Areas";
import { Inicio } from "../components/Inicio";
import { Programas } from "../components/Programas";
import { ErrorPage } from "../components/ErrorRuta";
import {Bienestar} from '../components/Bienestar';
import {Area} from '../components/Area';
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
    path: "/areas/:nombreArea",
    element: <Area />,
  },
  // {
  //   path: "/areas/:nombreArea/nombrePrograma",
  //   element: <Programa />,
  // }
  // {
  //   path: "/areas/construccion",
  //   element: <Construccion />,
  // },
]);
