import React from "react";
import style from "./blurcard.module.scss";
import dataCopy from "./info-COPY-TEXTOS/info.json";
import LogoSVG from "./LogoSVG";

const info = dataCopy.secciones[5].contenido;
const BlurCard = () => {
  return (
    <div className={style.container}>
      <article className={style.box}>{info}</article>
      <LogoSVG />
    </div>
  );
};

export default BlurCard;
