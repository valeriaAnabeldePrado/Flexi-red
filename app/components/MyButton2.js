"use client";
import style from "./cambiar.module.scss";
import { motion } from "framer-motion";
export default function MyButton2({ text, estilo }) {
  return (
    <motion.button
      initial={{ x: 400 }}
      animate={{ x: 0 }}
      whileHover={{
        scale: 1.2,
      }}
      whileTap={{ scale: 0.6 }}
      className={style.button2}
    >
      {text}
    </motion.button>
  );
}
