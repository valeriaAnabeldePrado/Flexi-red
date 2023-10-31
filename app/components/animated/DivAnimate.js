"use client";
import { useRef } from "react";
import style from "../beneficios.module.scss";
import { motion, useInView } from "framer-motion";
export default function DivAnimate({ children, higg }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: " -100px", once: true });

  return (
    <div ref={ref}>
      <motion.div
        animate={{ y: isInView ? 0 : 500, opacity: isInView ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, delay: 0.5 }}
        className={style.box}
      >
        {children}
      </motion.div>
    </div>
  );
}
