import React from "react";
import "./style.css";

const InputField = (props) => {
  return (
    <div className="input-container">
      <label>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.error && props.isTouched ? (
        <p className="form-error">{props.error}</p>
      ) : null}
    </div>
  );
};

export default InputField;
