import { createBrowserRouter } from "react-router-dom";
import { Areas } from "../components/Areas";
import { Inicio } from "../components/Inicio";
import { ErrorPage } from "../components/ErrorRuta";
import {Bienestar} from '../components/Bienestar';
import {Area} from '../components/Area';
import {Programa} from '../components/Programa';
import {Tecnico} from '../components/Tecnico';
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
    path : "/bienestar",
    element : <Bienestar/>
  },
  {
    path: "/areas/:nombreArea",
    element: <Area />,
  },
  {
    path : "/areas/:nombreArea/:nombrePrograma",
    element : <Programa/>
  },

 
]);
