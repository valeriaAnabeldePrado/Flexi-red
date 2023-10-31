import MyButton from "./MyButton";
import MyButton2 from "./MyButton2";
import dataCopy from "./info-COPY-TEXTOS/info.json";
import style from "./nuestrosServicios.module.scss";

const descripcion = dataCopy.secciones[1].contenido;
const datosInternos = dataCopy.secciones[1].infoInternaPersona;
const newBoxes = datosInternos.map((data, index) => {
  let buttonComponent;
  if (index === 1) {
    buttonComponent = <MyButton2 text="PIDE AHORA" />;
  } else {
    buttonComponent = <MyButton text="PIDE AHORA" />;
  }

  return {
    id: index + 1,
    info: data.informacion,
    precio: data.precio,
    descripcion:
      data.descripcionUno || data.descripcionDos || data.descripcionTres,
    buton: buttonComponent,
    styless: style.card,
  };
});

export default function NuestrosServicios() {
  return (
    <div className={style.container} id="servicios">
      <section className={style.h2}>
        <h2>
          Nuestros servicios de Internet por Fibra Óptica adaptados a tus
          necesidades
        </h2>
      </section>
      <section className={style.h2}>
        <h4>{descripcion}</h4>
      </section>
      <section className={style.downBox}>
        {newBoxes.map(({ id, info, buton, styless, precio, descripcion }) => (
          <div className={style.child} key={id}>
            <div className={styless || style.boxes}>
              <h3 className={style.font}>{info}</h3>
              <h4>{precio}</h4>
              <p style={{ padding: "1rem", textAlign: "center" }}>
                {descripcion}
              </p>
              {buton}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
