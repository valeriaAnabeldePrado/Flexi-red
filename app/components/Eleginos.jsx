import React from "react";
import style from "./eleginos.module.scss";
import dataCopy from "./info-COPY-TEXTOS/info.json";

const info = dataCopy.secciones[3].eleginos;
const Eleginos = () => {
  return (
    <div className={style.container}>
      <main className={style.containerMain}>
        <h2 className={style.subtitulo}>
          ¿Por qué elegir nuestro servicio de internet?
        </h2>
        <div id="ofertas" className={style.cardsContainer}>
          {info.map(({ h2, contenido, id }) => (
            <article className={style.cards} key={id}>
              <h2 className={style.fontSub}>{h2}</h2>
              <h3 className={style.fontSub}>{contenido}</h3>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Eleginos;
