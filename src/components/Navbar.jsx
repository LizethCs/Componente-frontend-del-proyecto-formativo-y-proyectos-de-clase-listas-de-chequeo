//Importación de los estilos
import "../styles/styles.css"

//Importación de datos de navegación desde un archivo JSON.
import navlinks from "../utils/navlinks.json"
//Importación de hooks de React (useState, useEffect, useRef) y useMediaQuery de react-responsive.
import { useState, useEffect, useRef } from "react"
import { useMediaQuery } from "react-responsive"

//Declaración de función setLinks para renderizar enlaces de navegación.
const setLinks = ({ href, text }) => (
  <li className="nav-item" key={href}>
    <a className="nav-link medium" href={href}>
      {text}
    </a>
  </li>
)

/**
 * Componente Navbar
 * 
 * Este componente renderiza una barra de navegación
 * 
 *  
 * @returns {JSX.Element} La barra de navegación
 */
export const Navbar = () => {
  //Uso de useMediaQuery para detectar si el ancho de pantalla es menor a 721px
  const isMaxWidth = useMediaQuery({ query: "(max-width: 721px)" })
  //Creación de referencia para un elemento DOM utilizando useRef.
  const elementRef = useRef(null)
  //Declaración de estado isVisible para controlar visibilidad del menú de navegación
  const [isVisible, setIsVisible] = useState(false)

  //Uso de useEffect para actualizar estilo de navegación según ancho de pantalla
  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.style.display = isMaxWidth ? "block" : "flex"
    }
  }, [isMaxWidth])

  //Definición de función handleClick para alternar la visibilidad del menú navegación
  const handleClick = () => setIsVisible(!isVisible)
  
  return (
    <>
      <header>
        <nav>
          <a id="home" href="#">
            <img
              src="https://res.cloudinary.com/dx9mnazdx/image/upload/v1721400503/image-010_lhu14t-removebg-preview_kt7e2c.png"
              alt="logo del hotel"
              id="logo"
              className="nav-link"
            />
          </a>
         {/*Creación de contenedor para enlaces de navegación con referencia y estilo condicional.
            Si los links del menu son visibles (display: block) se cambia a none.
            el botón con la función handle click maneja este evento cuando se hace click en el botón
            */}
          <div
            ref={elementRef}
            id="links"
            style={{ display: isMaxWidth && isVisible ? "none" : "block" }}
        
          >
            {navlinks.map(setLinks)}
          </div>
          <button className="menu-btn" type="button" onClick={handleClick}>
            <img
              src="https://res.cloudinary.com/dx9mnazdx/image/upload/v1721404811/hamburger_c3mvp3.png"
              alt="toggle-navbar-button"
            />
          </button>
        </nav>
      </header>
    </>
  )
}
