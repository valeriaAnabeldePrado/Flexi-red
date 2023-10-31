"use client";
import style from "./cambiar.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
export default function MyButton({ text, onEviarData }) {
  const [cambiaColorfondo, setCambiaColorfondo] = useState(style.button);
  const handleClick = (e) => {
    if (
      e.target.value === "Zonas de Cobertura" ||
      e.target.value === "Preguntas frecuentes"
    ) {
      onEviarData(true);
      setCambiaColorfondo(style.estiloBoton);
    } else if (e.target.value === "Salir") {
      onEviarData(false);
      setCambiaColorfondo(style.button);
    }
  };

  return (
    <motion.button
      value={text}
      onClick={handleClick}
      initial={{ x: 400 }}
      animate={{ x: 0 }}
      whileHover={{
        scale: 1.2,
      }}
      whileTap={{ scale: 0.6 }}
      className={`${cambiaColorfondo}`}
    >
      {text}
    </motion.button>
  );
}
