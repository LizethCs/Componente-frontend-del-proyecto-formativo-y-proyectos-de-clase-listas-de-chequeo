// Importar estilos CSS
import "./styles/styles.css"

// Importar componentes Home y Reservar desde la carpeta views
import { Home } from "./views/Home"
import { Reservar } from "./views/Reservar"

// Importar componentes necesarios desde la biblioteca react-router-dom
import { BrowserRouter, Route, Routes } from 'react-router-dom';


/**
 * Componente principal App
 * 
 * Este componente configura el enrutamiento del lado del cliente para la aplicación.
 * 
 * @returns {JSX.Element} El elemento JSX que representa el componente App.
 */
function App() {
  return (
    // Envolver la aplicación con BrowserRouter para habilitar el enrutamiento del lado del cliente
    <BrowserRouter>
       {/*
        El componente Routes agrupa rutas relacionadas.
        Es un componente requerido para react-router-dom v6.
      */}
    <Routes>
        {/*
          Definir una ruta para el componente Home.
          Ruta: /home
        */}
        <Route path="/home" element={<Home/>} />
        {/*
          Definir una ruta para el componente Reservar.
          Ruta: /reservar
        */}
        <Route path="reservar" element={<Reservar />} />
    </Routes>
    </BrowserRouter>
  )
}

// Exportar el componente App como exportación predeterminada
export default App