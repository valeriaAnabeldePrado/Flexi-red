import React from "react";
import style from "./alcance.module.scss";
import Zonas from "./Zonas";
import PregFrec from "./PregFrec";

const Alcance = () => {
  return (
    <div className={style.container}>
      <article className={style.article}>
        <h2>Queres saber nuestro alcance?</h2>
        <Zonas />
      </article>
      <article className={style.article}>
        <h2>Tenes dudas sobre nuestros servicios?</h2>
        <PregFrec />
      </article>
    </div>
  );
};

export default Alcance;
