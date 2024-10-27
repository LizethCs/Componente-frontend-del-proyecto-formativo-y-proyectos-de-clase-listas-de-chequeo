export const Input = ({type,placeholder,id,text}) => {
    return (
       <>
      <label htmlFor={id} id={`${id}-label`}>{text}
      <input
        type={type}
        id={id}
        required
        placeholder={placeholder}
        className="input-height input"
      />
    </label>
    </>
    )
}
