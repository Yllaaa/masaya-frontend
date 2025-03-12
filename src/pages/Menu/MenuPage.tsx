// done

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo } from "react";
import MenuFilter from "../../components/filter/MenuFilter";
import MenuGrid from "../../components/menuGrid/MenuGrid";
import menuImg from "../../assets/menu/menu1.jpg";
import styles from "./menuPage.module.css";
import Testimonial from "../Home/testimonial/Testimonial";
import MenuHeader from "./menuHeader/MenuHeader";
import { useTranslation } from "react-i18next";
const MenuPage: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState(t("menuFilter.all"));
  const cards = [
    {
      id: 1,
      name: "TABULE",
      type: t("menuFilter.salad"),
      price: 10.5,
      description: t("menuItem.tabule"),
      image: menuImg,
    },
    {
      id: 2,
      name: "FATTOUCH",
      type: t("menuFilter.salad"),
      price: 10.5,
      description: t("menuItem.fattouch"),
      image: menuImg,
    },
    {
      id: 3,
      name: "SALATIT LABAN",
      type: t("menuFilter.salad"),
      price: 10.5,
      description: t("menuItem.salatitLaban"),
      image: menuImg,
    },
    {
      id: 4,
      name: "SALATIT GEBEN",
      type: t("menuFilter.salad"),
      price: 10.5,
      description: t("menuItem.salatitGeben"),
      image: menuImg,
    },
    {
      id: 5,
      name: "SALATIT CUSCUS",
      type: t("menuFilter.salad"),
      price: 10.5,
      description: t("menuItem.salatitCuscus"),
      image: menuImg,
    },
    {
      id: 6,
      name: "SALATA ARABYE",
      type: t("menuFilter.salad"),
      price: 10.5,
      description: t("menuItem.salataArabye"),
      image: menuImg,
    },
    {
      id: 7,
      name: "SALATIT FALAFEL",
      type: t("menuFilter.salad"),
      price: 10.5,
      description: t("menuItem.salatitFalafel"),

      image: menuImg,
    },
    {
      id: 8,
      name: "MUTABAL",
      type: t("menuFilter.mezah"),
      price: 8.95,
      description: t("menuItem.mutabal"),
      image: menuImg,
    },
    {
      id: 9,
      name: "MOHAMARA",
      type: t("menuFilter.mezah"),
      price: 8.95,
      description: t("menuItem.mohamara"),

      image: menuImg,
    },
    {
      id: 10,
      name: "HUMMUS",
      type: t("menuFilter.mezah"),
      price: 7.5,
      description: t("menuItem.hummus"),
      image: menuImg,
    },
    {
      id: 11,
      name: "HUMMUS BEIRUTÍ",
      type: t("menuFilter.mezah"),
      price: 8.25,
      description: t("menuItem.hummusBeiruti"),
      image: menuImg,
    },
    {
      id: 12,
      name: "HUMMUS DE REMOLACHA",
      type: t("menuFilter.mezah"),
      price: 8.25,
      description: t("menuItem.hummusDeRemolacha"),
      image: menuImg,
    },
    {
      id: 13,
      name: "LABNE",
      type: t("menuFilter.mezah"),
      price: 7.95,
      description: t("menuItem.labne"),
      image: menuImg,
    },
    {
      id: 14,
      name: "MUSAKAJA",
      price: 9.95,
      description: t("menuItem.musakaja"),
      type: t("menuFilter.mezah"),
      image: menuImg,
    },
    {
      id: 15,
      name: "FOUL",
      price: 11.0,
      description: t("menuItem.foul"),
      type: t("menuFilter.mezah"),
      image: menuImg,
    },
    {
      id: 16,
      name: "QUESO SHANKLISH",
      price: 9.5,
      description: t("menuItem.quesoShanklish"),
      type: t("menuFilter.mezah"),
      image: menuImg,
    },
    {
      id: 17,
      name: "FALAFEL",
      price: 9.95,
      description: t("menuItem.falafel"),

      type: t("menuFilter.mezah"),
      image: menuImg,
    },
    {
      id: 18,
      name: "KEBBE DE CALABAZA",
      price: 10.0,
      description: t("menuItem.kebbeDeCalabaza"),

      type: t("menuFilter.mezah"),
      image: menuImg,
    },
    {
      id: 19,
      name: "WARAK INAB",
      price: 8.5,
      description: t("menuItem.warakInab"),

      type: t("menuFilter.mezah"),
      image: menuImg,
    },
    {
      id: 20,
      name: "ROLLITOS DE QUESO",
      price: 9.0,
      description: t("menuItem.rollitosDeQueso"),
      type: t("menuFilter.mezah"),
      image: menuImg,
    },
    {
      id: 21,
      name: "EMPANADILLAS DE QUESO",
      price: 10.0,
      description: t("menuItem.empanadillasDeQueso"),
      type: t("menuFilter.mezah"),
      image: menuImg,
    },
    {
      id: 22,
      name: "EMPANADILLAS DE ESPINACAS",
      price: 10.0,
      description: t("menuItem.empanadillasDeEspinacas"),
      type: t("menuFilter.mezah"),
      image: menuImg,
    },
    {
      id: 23,
      name: "PATATA HARRA (PICANTE)",
      price: 9.0,
      description: t("menuItem.patataHarra"),
      type: t("menuFilter.mezah"),
      image: menuImg,
    },
    {
      id: 24,
      name: "HUEVOS SHAKSHOUKA",
      price: 9.25,
      description: t("menuItem.huevosShakshouka"),

      type: t("menuFilter.mezah"),
      image: menuImg,
    },
    {
      id: 25,
      name: "PLATO DE ARROZ",
      price: 5.5,
      description: t("menuItem.platoDeArroz"),
      type: t("menuFilter.mezah"),
      image: menuImg,
    },
    {
      id: 26,
      name: "ARAYES DE QUESO",
      price: 9,
      type: t("menuFilter.arayes"),
      description: t("menuItem.arayesDeQueso"),
      image: menuImg,
    },
    {
      id: 27,
      name: "ARAYES DE CARNE",
      price: 10.5,
      type: t("menuFilter.arayes"),
      description: t("menuItem.arayesDeCarne"),

      image: menuImg,
    },
    {
      id: 28,
      name: "ARAYES DE CARNE Y QUESO",
      price: 11.25,
      type: t("menuFilter.arayes"),
      description: t("menuItem.arayesDeCarneYQueso"),

      image: menuImg,
    },
    {
      id: 29,
      name: "ARAYES SUJOK CON QUESO (PICANTE)",
      price: 11.25,
      type: t("menuFilter.arayes"),
      description: t("menuItem.arayesSujokConQueso"),

      image: menuImg,
    },
    {
      id: 30,
      name: "Fatte",
      price: 12.25,
      description: t("menuItem.fatte"),

      type: t("menuFilter.fette"),
      image: menuImg,
    },
    {
      id: 31,
      name: "Fatte Bilahme",
      price: 14.25,
      description: t("menuItem.fatteBilahme"),

      type: t("menuFilter.fette"),
      image: menuImg,
    },
    {
      id: 32,
      name: "Fatte Dajaj",
      price: 14.25,
      description: t("menuItem.fatteDajaj"),

      type: t("menuFilter.fette"),
      image: menuImg,
    },
    {
      id: 33,
      name: "Fatte Gambari",
      price: 15.25,
      description: t("menuItem.fatteGambari"),

      type: t("menuFilter.fette"),
      image: menuImg,
    },
    {
      id: 34,
      name: "Sopa de Lentejas",
      price: 9.5,
      description: t("menuItem.sopaDeLentejas"),
      type: t("menuFilter.Sopas"),
      image: menuImg,
    },
    {
      id: 35,
      name: "Sopa de Pollo",
      price: 9.5,
      description: t("menuItem.sopaDePollo"),
      type: t("menuFilter.Sopas"),
      image: menuImg,
    },
    {
      id: 36,
      name: "Sopa de Verduras",
      price: 9.5,
      description: t("menuItem.sopaDeVerduras"),
      type: t("menuFilter.Sopas"),
      image: menuImg,
    },
    {
      id: 37,
      name: "Sopa de Pescado",
      price: 11.25,
      description: t("menuItem.sopaDePescado"),
      type: t("menuFilter.Sopas"),
      image: menuImg,
    },
    {
      id: 38,
      name: "Gambas a la Plancha",
      price: 18.5,
      description: t("menuItem.gambasPlancha"),
      type: t("menuFilter.Pescados"),
      image: menuImg,
    },
    {
      id: 39,
      name: "Samake Harra / Pescado Picante",
      price: 18.5,
      description: t("menuItem.samakeHarra"),
      type: "Pescados",
      image: menuImg,
    },
    {
      id: 40,
      name: "Samake Bethini",
      price: 18.5,
      description: t("menuItem.samakeBethini"),
      type: "Pescados",
      image: menuImg,
    },
    {
      id: 41,
      name: "Shawarma de Carne",
      price: 14.95,
      description: t("menuItem.shawarmaDeCarne"),
      type: t("menuFilter.carne"),
      image: menuImg,
    },
    {
      id: 42,
      name: "Shawarma de Pollo",
      price: 14.95,
      description: t("menuItem.shawarmaDePollo"),
      type: t("menuFilter.carne"),
      image: menuImg,
    },
    {
      id: 43,
      name: "Costillas de Cordero",
      price: 19.5,
      description: t("menuItem.costillasDeCordero"),
      type: t("menuFilter.carne"),
      image: menuImg,
    },
    {
      id: 44,
      name: "XIX Tawuk",
      price: 14.95,
      description: t("menuItem.xixTawuk"),
      type: t("menuFilter.carne"),
      image: menuImg,
    },
    {
      id: 45,
      name: "Musajan",
      price: 14.95,
      description: t("menuItem.musajan"),
      type: t("menuFilter.carne"),
      image: menuImg,
    },
    {
      id: 46,
      name: "Sujok (Picante)",
      price: 14.95,
      description: t("menuItem.sujok"),
      type: t("menuFilter.carne"),
      image: menuImg,
    },
    {
      id: 47,
      name: "Kafta",
      price: 14.95,
      description: t("menuItem.kafta"),
      type: t("menuFilter.carne"),
      image: menuImg,
    },
    {
      id: 48,
      name: "Kafta Bethini",
      price: 16.5,
      description: t("menuItem.kaftaBethini"),
      type: t("menuFilter.carne"),
      image: menuImg,
    },
    {
      id: 49,
      name: "Kafta Jach Jach",
      price: 16.5,
      description: t("menuItem.kaftaJach"),
      type: t("menuFilter.carne"),
      image: menuImg,
    },
    {
      id: 50,
      name: "Kebbe Bilaban",
      price: 16.5,
      description: t("menuItem.kebbeBilaban"),
      type: t("menuFilter.carne"),
      image: menuImg,
    },
    {
      id: 51,
      name: "Shawarma Pollo Falafel",
      price: 16.95,
      description: t("menuItem.shawarmaPolloFalafel"),
      type: t("menuFilter.combinados"),
      image: menuImg,
    },
    {
      id: 52,
      name: "Shawarma Carne Falafel",
      price: 16.95,
      description: t("menuItem.shawarmaCarneFalafel"),
      type: t("menuFilter.combinados"),
      image: menuImg,
    },
    {
      id: 53,
      name: "Kafta Falafel",
      price: 16.95,
      description: t("menuItem.kaftaFalafel"),
      type: t("menuFilter.combinados"),
      image: menuImg,
    },
    {
      id: 54,
      name: "XIX Tawuk Falafel",
      price: 16.95,
      description: t("menuItem.xixTawukFalafel"),
      type: t("menuFilter.combinados"),
      image: menuImg,
    },
    {
      id: 55,
      name: "Arayes de Carne Falafel",
      price: 16.95,
      description: t("menuItem.arayesDeCarneFalafel"),
      type: t("menuFilter.combinados"),
      image: menuImg,
    },
    {
      id: 56,
      name: "Sujok (Picante) Falafel",
      price: 16.95,
      description: t("menuItem.sujokFalafel"),
      type: t("menuFilter.combinados"),
      image: menuImg,
    },
    {
      id: 57,
      name: "Musajan Falafel",
      price: 16.95,
      description: t("menuItem.musajanFalafel"),
      type: t("menuFilter.combinados"),
      image: menuImg,
    },
    {
      id: 58,
      name: "Kebbe de Carne Falafel",
      price: 16.95,
      description: t("menuItem.kebbeDeCarne"),
      type: t("menuFilter.combinados"),
      image: menuImg,
    },
    {
      id: 59,
      name: "Super Carne",
      price: 24.95,
      description: t("menuItem.superCarne"),
      type: t("menuFilter.combinados"),
      image: menuImg,
    },
    {
      id: 60,
      name: "Super Vegetal",
      price: 21.95,
      description: t("menuItem.superVegetal"),
      type: t("menuFilter.combinados"),
      image: menuImg,
    },

    {
      id: 61,
      name: "Hummus",
      price: 42,
      description: "Chickpea cream with sesame sauce",
      type: "Menu Degustación",
      image: menuImg,
    },
    {
      id: 62,
      name: "Mutabal",
      price: 42,
      description: "Cream of roasted eggplants with sesame sauce",
      type: "Menu Degustación",
      image: menuImg,
    },
    {
      id: 63,
      name: "Falafel",
      price: 42,
      description: t("menuItem.falafelAppetizer"),

      type: t("menuFilter.appetizer"),
      image: menuImg,
    },
    {
      id: 64,
      name: "Warak Inab",
      price: 42,
      description: t("menuItem.warakInabAppetizer"),

      type: t("menuFilter.appetizer"),
      image: menuImg,
    },
    {
      id: 65,
      name: "Arayes de Carne",
      price: 42,
      description: t("menuItem.arayesDeCarneAppetizer"),

      type: t("menuFilter.appetizer"),
      image: menuImg,
    },
    {
      id: 66,
      name: "Empanadillas",
      price: 42,
      description: t("menuItem.empanadillasAppetizer"),
      type: t("menuFilter.appetizer"),
      image: menuImg,
    },
    {
      id: 67,
      name: "Labne",
      price: 42,
      description: t("menuItem.labneAppetizer"),
      type: t("menuFilter.appetizer"),
      image: menuImg,
    },
    {
      id: 68,
      name: "Kebbe",
      price: 42,
      description: t("menuItem.kebbeAppetizer"),

      type: t("menuFilter.appetizer"),
      image: menuImg,
    },
    {
      id: 69,
      name: "Tabule",
      price: 42,
      description: t("menuItem.tabuleAppetizer"),

      type: t("menuFilter.appetizer"),
      image: menuImg,
    },
    {
      id: 70,
      name: "Halewet El Geben",
      price: 7.0,
      description: t("menuItem.halewetElGeben"),
      type: t("menuFilter.desserts"),
      image: menuImg,
    },
    {
      id: 71,
      name: "Baklawa",
      price: 2.25,
      description: t("menuItem.baklawa"),
      type: t("menuFilter.desserts"),
      image: menuImg,
    },
    {
      id: 72,
      name: "Knefe Queso o Nata Casera",
      price: 7.5,
      description: t("menuItem.knefeQueso"),
      type: t("menuFilter.desserts"),
      image: menuImg,
    },
    {
      id: 73,
      name: "Namoura",
      price: 4.5,
      description: t("menuItem.namoura"),
      type: t("menuFilter.desserts"),
      image: menuImg,
    },
    {
      id: 74,
      name: "Kashtaliye",
      price: 5.5,
      description: t("menuItem.kashtaliye"),
      type: t("menuFilter.desserts"),
      image: menuImg,
    },
    {
      id: 75,
      name: "Macedonia con Nata Casera",
      price: 6.75,
      description: t("menuItem.macedoniaConNataCasera"),
      type: t("menuFilter.desserts"),
      image: menuImg,
    },
    {
      id: 76,
      name: "Osmaliye",
      price: 7.0,
      description: t("menuItem.osmaliye"),
      type: t("menuFilter.desserts"),
      image: menuImg,
    },
    {
      id: 77,
      name: t("menuItem.reserveDuCouventKSARA"),
      price: 23.5,
      description: t("menuItem.reserveDuCouventKSARA"),
      type: t("menuFilter.beverages"),
      image: menuImg,
    },
    {
      id: 78,
      name: t("menuItem.carignanOldVineKSARA"),
      price: 31.75,
      description: t("menuItem.carignanOldVineKSARA"),
      type: t("menuFilter.beverages"),
      image: menuImg,
    },
    {
      id: 79,
      name: t("menuItem.reserveDuCouventKSARA2"),
      price: 23.5,
      description: t("menuItem.reserveDuCouventKSARA2"),
      type: t("menuFilter.beverages"),
      image: menuImg,
    },
    {
      id: 80,
      name: t("menuItem.merwahKSARA"),
      price: 29.5,
      description: t("menuItem.merwahKSARA"),
      type: t("menuFilter.beverages"),
      image: menuImg,
    },
    {
      id: 81,
      name: "Sunset KSARA",
      price: 27.5,
      description: t("menuItem.sunsetKSARA"),
      type: t("menuFilter.beverages"),
      image: menuImg,
    },
    {
      id: 82,
      name: "Arak",
      price: 4.5,
      description: t("menuItem.arak"),
      type: t("menuFilter.beverages"),
      image: menuImg,
    },
    {
      id: 83,
      name: "Beirut",
      price: 3.9,
      description: t("menuItem.beirut"),
      type: t("menuFilter.beverages"),
      image: menuImg,
    },
    {
      id: 84,
      name: "Té con menta",
      price: 3.0,
      description: t("menuItem.teConMenta"),
      type: t("menuFilter.beverages"),
      image: menuImg,
    },
    {
      id: 85,
      name: "Café Libanés con cardamomo",
      price: 3.0,
      description: t("menuItem.caféLibanésConCardamomo"),
      type: t("menuFilter.beverages"),
      image: menuImg,
    },
    {
      id: 86,
      name: "Laban Ayran",
      price: 5.0,
      description: t("menuItem.labanAyran") ,
      type: t("menuFilter.beverages"),
      image: menuImg,
    },
    {
      id: 87,
      name: "Limonada",
      price: 5.0,
      description: t("menuItem.limonada"),
      type: t("menuFilter.beverages"),
      image: menuImg,
    },
    {
      id: 88,
      name: "Zumo de naranja natural",
      price: 5.0,
      description: t("menuItem.zumoDeNaranjaNatural"),
      type: t("menuFilter.beverages"),
      image: menuImg,
    },
  ];

  const filteredCards = useMemo(() => {
    return filter === t("menuFilter.all")
      ? cards
      : cards.filter((item) => item.type === filter);
  }, [filter, cards]);

  return (
    <>
      <section>
        <div className={styles.menuhero}>
          <div style={{ paddingTop: "10rem" }}>
            {/* done */}
            <MenuHeader />
          </div>
        </div>
        <div data-aos="fade-up" className={styles.menuSection}>
          {/* done */}
          <MenuFilter onFilterChange={setFilter} currentFilter={filter} />
          <MenuGrid cards={filteredCards} currentFilter={filter} />
        </div>

        <div data-aos="fade-up" className={styles.menuSection}>
          {/* done */}
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default MenuPage;
