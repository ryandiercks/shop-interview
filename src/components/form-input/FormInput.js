import React from "react";

import "./FormInput.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input
      type="text"
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />

    {label ? (
      <label
        htmlFor=""
        className={`
    ${otherProps.value.length ? "shrink" : ""} form-input-label
    `}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
