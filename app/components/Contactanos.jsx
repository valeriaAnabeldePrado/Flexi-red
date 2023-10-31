"use client";
import React, { useRef } from "react";
import style from "./contactanos.module.scss";
import Form from "./Form";
import Cardsita from "./Cardsita";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { IconContext } from "react-icons";

const cardis = [
  {
    icono: <BsTelephone />,
    info: 321321321,
  },
  {
    tipo: "enlace",
    icono: <AiOutlineMail />,
    info: "algo@mail.com",
    enlace: "https://developer.mozilla.org/es/docs/Web/HTML/Element/button",
  },
  {
    enlace: "",
    icono: <FiMapPin />,
    info: "la ubicacion",
  },
];

const Contactanos = () => {
  const parentRef = useRef();
  return (
    <div id="contacto" className={style.container}>
      <article className={style.arti1}>
        <div className={style.arti2}>
          <section className={style.sectiontext}>
            <h2>Contactate con nosotros</h2>
            <p>
              Completa el formulario para que un asesor te pueda contactar y
              ayudarte a resolver tus dudas o problemas
            </p>
            <p>
              Tambien podes contactarte a traves de nuestros canales, redes
              sociales o direcciones.
            </p>
          </section>
          <Cardsita
            cursor="pointer"
            tipo="enlace"
            enlace="https://api.whatsapp.com/send?phone=289000000000"
            icono={<BsWhatsapp />}
            info="3512828282"
            color="#ec661b"
            box="10px 8px 8px rgba(0, 0, 0, 0.4)"
            border="none"
          />
        </div>
        <div className={style.arti2}>
          <Form />
        </div>
      </article>
      <div>
        <article className={style.contCards} ref={parentRef}>
          {cardis.map((el, index) => (
            <Cardsita
              key={index}
              drag={true}
              icono={el.icono}
              info={el.info}
              parentRef={parentRef}
              tipo={el.tipo}
              enlace={el.enlace}
            ></Cardsita>
          ))}
        </article>
      </div>
    </div>
  );
};

export default Contactanos;
