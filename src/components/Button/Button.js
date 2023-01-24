import React from "react";

const Button = ({ btnName, className, ...rest }) => {
  return (
    <div>
      <button type="submit" className={`btn ${className}`} {...rest}>
        {btnName}
      </button>
    </div>
  );
};

export default Button;
