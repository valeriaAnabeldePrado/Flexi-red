"use client";
import React, { useState } from "react";
import MyButton from "./MyButton";
import Preguntas from "./Preguntas";
import { motion, AnimatePresence } from "framer-motion";

const PregFrec = () => {
  const [isOpen, setIsOpen] = useState(false);
  const manejarDatos = (data) => {
    setIsOpen(data);
  };
  return (
    <div>
      <MyButton text="Preguntas frecuentes" onEviarData={manejarDatos} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Preguntas />
            <MyButton onEviarData={manejarDatos} text="Salir" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PregFrec;
