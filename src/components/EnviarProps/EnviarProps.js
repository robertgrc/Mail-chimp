import React from "react";
import EnviarPropsHijo from "../EnviarPropsHijo/EnviarPropsHijo";

const EnviarProps = () => {
  const saludar = () => {
    alert("hola a todos");
  };
  return (
    <div>
      <EnviarPropsHijo titulo={"PremierLeague"} saludarHijo={saludar} />
    </div>
  );
};

export default EnviarProps;
