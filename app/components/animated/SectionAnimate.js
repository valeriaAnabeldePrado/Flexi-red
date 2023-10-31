"use client";
import { useRef } from "react";
import style from "../beneficios.module.scss";
import { motion, useInView } from "framer-motion";

export default function SectionAnimate() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: " -200px", once: true });

  return (
    <div ref={ref} className={style.boxContent}>
      <motion.section animate={{ x: isInView ? 0 : -1000 }}>
        <div className={style.boxBenef}>
          <h2 className={style.clientextb}>Sos cliente de flexired?</h2>
          <h2 className={style.clientext}>Conoce nuestros beneficios</h2>
        </div>
      </motion.section>
    </div>
  );
}
