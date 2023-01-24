import React from "react";

const FormInput = ({ label, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        {label}
      </label>
      <input className="form-control" {...rest} />
    </div>
  );
};

export default FormInput;
