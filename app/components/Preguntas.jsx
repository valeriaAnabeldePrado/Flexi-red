import React from "react";
import { motion } from "framer-motion";
import dataCopy from "./info-COPY-TEXTOS/info.json";
const info = dataCopy.secciones[4].preguntasF;

const Preguntas = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 2, ease: "easeOut" }}
      style={{
        position: "relative",
        padding: "1.5rem 0 0 0",
      }}
    >
      {info.map((pregunt, index) => (
        <div key={index}>
          <h2>{pregunt.pregunta}</h2>
          <h5>{pregunt.respuesta}</h5>
        </div>
      ))}
    </motion.div>
  );
};

export default Preguntas;
