import React from "react";
import DivAnimateB from "./animated/DivAnimateB";
import style from "./descubre.module.scss";
import MyButton2 from "./MyButton2";
import dataCopy from "./info-COPY-TEXTOS/info.json";

const descripcion = dataCopy.secciones[2].contenido;
const tituloUno = dataCopy.secciones[2].infoInternaEmpresa[0].informacion;
const tituloDos = dataCopy.secciones[2].infoInternaEmpresa[1].informacion;
const precioUno = dataCopy.secciones[2].infoInternaEmpresa[0].precio;
const precioDos = dataCopy.secciones[2].infoInternaEmpresa[1].precio;
const descripcionUno =
  dataCopy.secciones[2].infoInternaEmpresa[0].descripcionUno;
const descripcionDos =
  dataCopy.secciones[2].infoInternaEmpresa[1].descripcionDos;

const Descubre = () => {
  return (
    <>
      <div className={style.container}>
        <h2 className={style.funteH2}>
          Descubre los mejores servicios para tu empresa
        </h2>
        <main className={style.main}>
          <article className={style.box}>
            <DivAnimateB>
              <div className={style.boxes}>
                <h3>{tituloUno}</h3>
                <h4>{precioUno}</h4>
                <p style={{ padding: "1rem", textAlign: "center" }}>
                  {descripcionUno}
                </p>
                <MyButton2 text="COTIZAR" />
              </div>
            </DivAnimateB>
          </article>
          <article className={style.box}>
            <DivAnimateB>
              <div className={style.box2}>
                <p>{descripcion}</p>
              </div>
            </DivAnimateB>
            <div className={style.box2}>
              <DivAnimateB>
                <div className={style.boxes}>
                  <h3>{tituloDos}</h3>
                  <h4>{precioDos}</h4>
                  <p style={{ padding: "1rem", textAlign: "center" }}>
                    {descripcionDos}
                  </p>
                  <MyButton2 text="COTIZAR" />
                </div>
              </DivAnimateB>
            </div>
          </article>
        </main>
      </div>
    </>
  );
};

export default Descubre;
