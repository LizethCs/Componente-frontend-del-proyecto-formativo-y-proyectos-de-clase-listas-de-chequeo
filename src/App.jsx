import "./styles/styles.css"
import { Home } from "./views/Home"
import { Reservar } from "./views/Reservar"
import { BrowserRouter, Route, Routesñ } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="reservar" element={<Reservar />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App