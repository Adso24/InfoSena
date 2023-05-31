import React from 'react'
import {Link} from 'react-router-dom';
import '../Css/Inicio.css'
export const Inicio = () => {
  return (
    <>

            <div className="capa"></div>
                <nav>
                    <div className="navegacion">
                        <a>
                            <Link to="/">Inicio</Link>
                        </a>
                        <a>
                            <Link to="/bienestar">Bienestar</Link>
                        </a>    
                        <a>
                            <Link to="/biblioteca">Biblioteca</Link>
                        </a>
                        <a>
                            <Link to="/directivas">Directivas</Link>
                        </a>
                        <a>
                            <Link to="/areas">Áreas</Link>
                        </a>
                    </div>
                </nav>
            <main>
                <div className="contenedor">
                    <div className="contenido">
                        <div className="imagen">
                            <img src="/src/images/logo-blanco.png" alt="" />
                        </div>
                        <h1>CDITI</h1>
                        <h4>Centro de diseño e innovación <br />tecnológico industrial</h4>
                        <a>Recorrido virtual</a>
                    </div>
                </div>
            </main>
            <video autoPlay loop muted style={{ width: "100%", height: "100vh" }}>
            <source src="/src/videos/cditi.mp4" type="video/mp4" />
            </video>
           
            

      </>
  )
}
