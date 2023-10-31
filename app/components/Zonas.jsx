"use client";
import React, { useState } from "react";
import ZonasCobertura from "./ZonasCobertura";
import MyButton from "./MyButton";
import { AnimatePresence, motion } from "framer-motion";

const Zonas = () => {
  const [isOpen, setIsOpen] = useState(false);

  const manejarDatos = (data) => {
    setIsOpen(data);
  };
  return (
    <div>
      <MyButton text="Zonas de Cobertura" onEviarData={manejarDatos} />
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              <ZonasCobertura />
              <MyButton onEviarData={manejarDatos} text="Salir" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Zonas;
