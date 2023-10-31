import DivAnimate from "./animated/DivAnimate";
import SectionAnimate from "./animated/SectionAnimate";
import style from "./beneficios.module.scss";
import infoCopy from "./info-COPY-TEXTOS/info.json";

infoCopy.secciones[0].beneficios[0];
const beneficio = infoCopy.secciones[0].beneficios;

export default function Beneficios() {
  return (
    <div className={style.container} id="beneficios">
      <SectionAnimate />
      {beneficio.map(({ id, name, contenido }) => (
        <section key={id} className={style.boxContent}>
          <DivAnimate>
            <h5>{name}</h5>
            <p>{contenido}</p>
          </DivAnimate>
        </section>
      ))}
    </div>
  );
}
