import React from "react";

import { motion } from "framer-motion";
import style from "./contactanos.module.scss";
import { IconContext } from "react-icons";

const Cardsita = ({ ...props }) => {
  const { icono, info, color, box, border, cursor, tipo, enlace } = props;

  const activarEnlace = (e) => {
    const parent = e.currentTarget;
    if (parent.title) {
      let url = enlace;
      window.open(url);
    } else return;
  };
  return (
    <div className={style.cont}>
      <motion.button
        title={tipo}
        onClick={activarEnlace}
        style={{
          backgroundColor: color,
          boxShadow: box,
          border: border,
          cursor: cursor,
        }}
        className={style.cardi}
      >
        <IconContext.Provider value={{ size: 50 }}>
          <span>{icono}</span>
        </IconContext.Provider>
        <h5 className={style.cardFont}>{info}</h5>
      </motion.button>
    </div>
  );
};

export default Cardsita;
