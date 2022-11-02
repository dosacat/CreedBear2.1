import "./FormInput.css"


// React component for input with label of email
const FormInput = (props) => {
    return (
        <div className="formInput">
            
            <label for="email">Email:</label>
            <input id="email" onChange={e=>props.setUserLogin(e.target.value)} />
            
        </div>
    )
}

export default FormInput;