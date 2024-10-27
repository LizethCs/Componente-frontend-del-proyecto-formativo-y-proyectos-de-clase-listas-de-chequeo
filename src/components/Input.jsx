//importar los estilos
import "../styles/styles.css";

// Declaración del componente Input como función, recibiendo props de tipo, placeholder, id y texto.
export const Input = ({ type, placeholder, id, text }) => {
  /**
   * Componente Input
   *
   * Este componente renderiza un Input para ser reutilizado varias veces en un formulario, así como el label que lo acompaña
   *
   * @param {JSX.Element | string} type tipo de input
   * @param {JSX.Element | string} placeholder texto que contendrá el input (placeholder)
   * @param {JSX.Element | string} id id del input y hmtlFor y id del label
   * @param {JSX.Element | string} text Texto que mostrará el label
   * @returns {JSX.Element} El elemento Input
   */
  // Uso de fragmentos para evitar divs innecesarios.
  return (
    <>
      <label htmlFor={id} id={`${id}-label`}>
        {text}{" "}
        {/**Etiqueta label asociada al input mediante el atributo htmlFor, con id único y texto descriptivo.*/}
        <input
          type={type}
          id={id}
          required
          placeholder={placeholder}
          className="input-height input"
        />
      </label>
    </>
  );
};
