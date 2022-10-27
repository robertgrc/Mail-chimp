import React from "react";

const EnviarPropsHijo = ({ titulo, saludarHijo }) => {
  return (
    <div>
      <h1>{titulo}</h1>
      <button onClick={saludarHijo}>Saludar</button>
    </div>
  );
};

export default EnviarPropsHijo;
