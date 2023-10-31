import Cambiate from "./components/Cambiate";
import Descubre from "./components/Descubre";
import NuestrosServicios from "./components/NuestosServicios";
import styles from "./page.module.css";
import Beneficios from "./components/Beneficios";
import Eleginos from "./components/Eleginos";
import Alcance from "./components/Alcance";
import BlurCard from "./components/BlurCard";
import Contactanos from "./components/Contactanos";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className={styles.container}>
      <Cambiate />
      <Beneficios />
      <section style={{ backgroundColor: "#273069" }}>
        <NuestrosServicios />
        <Descubre />
        <Eleginos />
      </section>
      <section style={{ backgroundColor: "#ec661b" }}>
        <Alcance />
      </section>
      <BlurCard />
      <Contactanos />
      <Footer />
    </main>
  );
}
