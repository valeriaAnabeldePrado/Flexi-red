"use client";
import { Navbar, Link } from "@nextui-org/react";
import Image from "next/image";
import img from "../icon.png";
import styles from "./navegacion.module.scss";

const paginas = [
  {
    id: 1,
    name: "Home",
    path: "/#",
  },
  {
    id: 2,
    name: "Beneficios",
    path: "/#beneficios",
  },
  {
    id: 3,
    name: "Servicios",
    path: "/#servicios",
  },
  {
    id: 4,
    name: "Ofertas",
    path: "/#ofertas",
  },
  {
    id: 5,
    name: "Contacto",
    path: "/#contacto",
  },
];

function ColorSchemesExample() {
  return (
    <Navbar
      isBordered
      variant="sticky"
      maxWidth="fluid"
      className={styles.navCont}
    >
      <Navbar.Toggle showIn="xs" className={styles.btnNav} />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      ></Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="warning"
        hideIn="xs"
        variant="highlight-rounded"
      >
        {paginas.map((ruta) => (
          <Navbar.Link
            key={ruta.id}
            href={ruta.path}
            to={ruta.path}
            className={styles.navFont}
          >
            {ruta.name}
          </Navbar.Link>
        ))}
      </Navbar.Content>

      <Image src={img} width={45} height={30} alt="imagen" />
      <Navbar.Collapse>
        {paginas.map((item, index) => (
          <Navbar.CollapseItem
            key={item.id}
            activeColor="warning"
            isActive={index === 0}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={item.path}
            >
              {item.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ColorSchemesExample;
