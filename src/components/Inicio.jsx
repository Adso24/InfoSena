import React from 'react'
import {Link} from 'react-router-dom';
import '../Css/Inicio.css'
export const Inicio = () => {
  return (
    <>

            <div className="capa"></div>
                <nav>
                    <div className="navegacion">
                            <Link to="/">Inicio</Link>
                            <Link to="/bienestar">Bienestar</Link>
                            <Link to="/biblioteca">Biblioteca</Link>
                            <Link to="/directivas">Directivas</Link>
                            <Link to="/areas">Áreas</Link>
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
