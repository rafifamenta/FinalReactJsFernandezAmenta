import React, { useState, useCallback } from "react";
import './formcheckout.css';


export default function FormCheckout(props) {

  const InputForm = useCallback((props) => {
    return (
      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>{props.label}</label>
        <input
          value={props.value}
          name={props.name}
          type="text"
          onChange={props.onChange}
        />
      </div>
    );
  }, [])

  const fields = {
    Nombre: "",
    Email: "",
    Teléfono: "",
  }
  const [userData, setUserData] = useState(fields);

  let fieldsForm = Object.keys(fields);

  function onInputChange(evt) {
    let value = evt.target.value;
    let inputName = evt.target.name;

    let newState = { ...userData };
    newState[inputName] = value;
    setUserData(newState);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    console.log(`¡Gracias por tu compra!`);
  }

  function formIsInvalid() {
    return !(
      userData.name !== "" &&
      userData.phone !== "" &&
      userData.email !== ""
    );
  }

  return (
    <div className="form_container" >
      <form onSubmit={onSubmit}>
        <h3 className="title">Ingresa tus datos para finalizar la compra</h3>
        {fieldsForm.map((field, index) => {
          return <InputForm
            key={index}
            value={userData[field]}
            name={field}
            onChange={onInputChange}
            label={field}
          />
        }
        )}
        <div className="form_buttons">
          <button className="form_btn" onClick={() => props.onCheckout(userData)} disabled={formIsInvalid()} type="submit">Crear orden</button>

          <button className="form_btn" onClick={() => setUserData({ name: "", email: "", phone: "" })}>
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
}



