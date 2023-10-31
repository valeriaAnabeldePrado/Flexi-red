import React from "react";
import style from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer2}>
        <p>
          © Construido con orgullo y cafeína por Anabel de Prado y Mauro Lobo.
          Todos los derechos quedan reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
