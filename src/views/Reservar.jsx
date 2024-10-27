import { Input } from "../components/Input"
import { Link } from 'react-router-dom';

export const Reservar = () => {
  return (
    <>
      <h1 className="title">Haz tu reserva</h1>
      <form action="" id="form">
        <fieldset>
          <Input
            type="text"
            id="name"
            text="Nombre"
            placeholder="Ingrese su nombre(s)"
          />
          <Input 
          type="text"
          id="lastname"
          text="Apellidos"
          placeholder="Ingrese sus apellidos"
          />
          <Input 
          type="email"
          id="email"
          text="Email"
          placeholder="Ingrese su email"
          />
          <Input 
          type="text"
          id="address"
          text="Dirección"
          placeholder="Dirección"
          />
          <Input 
          type="number"
          id="number"
          text="Número"
          placeholder="Número de contacto"
          />
        <label htmlFor="dropdown" id=""
          >Tipo de identificación
          <select name="dropdown" id="dropdown">
            <option value="" className="input">Seleccione el documento</option>
            <option value="CC" className="input">CC</option>
            <option value="CE" className="input">CE</option>
            <option value="PEP" className="input">PEP</option>
            <option value="PPT" className="input">PPT</option>
          </select>
          </label>
          <Input 
          type="number"
          id="ID"
          text="Documento"
          placeholder="Número de documento"
          />
          <Input 
          type="number"
          id="num-person"
          text="Número de personas"
          placeholder="# de personas en la reserva"
          />
          <Input
          type="date"
          id="init-date"
          text="Fecha inicio"
          placeholder="Fecha inicio de la reserva"
          />
          <Input
          type="date"
          id="end-date"
          text="Fecha fin"
          placeholder="Fecha fin de la reserva"
          />
          <label className="sub-label">¿Qué servicios desea?</label>
          <label className="check-label"
          ><input
            type="checkbox"
            name="otro"
            value="otro"
            id="piscina"
            className="inline"
          />
          Piscina
          </label>
          <label className="check-label"
          ><input
            type="checkbox"
            name="restaurante"
            value="restaurante"
            id="restaurante"
            className="inline"
          />
          Restaurante</label>
          <button id="submit">Reservar</button>
        </fieldset>
      </form>
      <button id="back">
      <Link to="/home">←</Link>
      </button>
    </>
  )
}
