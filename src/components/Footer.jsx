// Importar archivo CSS de estilos
import "../styles/styles.css"

 // Declaración del componente Footer como función
 /** 
 * Componente Footer
 * 
 * Este componente renderiza un pie de página
 * 
 * @returns {JSX.Element} El compenente de ie de página
 */
export const Footer = () => {
  //Inicio del retorno del componente
  return(
  //Uso de fragmentos para evitar divs innecesarios ya que un elemento jsx debe tener un padre en común
   <>
    <footer className="flex">
      <p className="contact" id="contacto">
        Contactanos:
      </p>
      <p></p>
      <p className="contact">email.adress@contact.com</p>
      <p className="contact">+61 000 003 008</p>
    </footer>
  
  </>)
}

  // Cierre del elemento footer
    // Cierre de los fragmentos,cierre de la función
