// Importar archivo CSS de estilos
import "../styles/styles.css"

/**
 * Componente Card
 * 
 * Este componente renderiza una tarjeta con contenido personalizado, para ser reutilizada con texto, etc.
 * 
 * @param {JSX.Element | string} children Contenido de la tarjeta
 * @returns {JSX.Element} La tarjeta con el contenido especificado
 */
export const Card = ({children}) => {
    return(
        <div className="round card">
            <p className="text">
                {children}
            </p>
        </div>
    )
}