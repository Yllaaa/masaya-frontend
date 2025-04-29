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
import tabule from "../../assets/masaya without bg/tabule.png";
import fattouch from "../../assets/Masaya (1)/Masaya/Salads/fatush.png";
import gebna from "../../assets/Masaya (1)/Masaya/Salads/SALATIT GEBEN.png";
import cuscus from "../../assets/masaya without bg/cuscus.png";
import fatachicken from "../../assets/Masaya (1)/Masaya/Fatte/FATTE.png";
import arabya from "../../assets/masaya without bg/arabya.png";
import salataFalafel from "../../assets/masaya without bg/salataFalafel.png";
import mutabal from "../../assets/masaya without bg/mutabal.png";
import mohamara from "../../assets/masaya without bg/mohamara.png";
import humus from "../../assets/Masaya (1)/Masaya/Appetizers/hummus.png";
import labna from "../../assets/Masaya (1)/Masaya/Salads/Salatit Laban.png";
import foul from "../../assets/masaya without bg/foul.png";
import falafel1 from "../../assets/masaya without bg/falafel1.png";
import kobeibasafra from "../../assets/masaya without bg/kobeibasafra.png";
import roll from "../../assets/masaya without bg/roll.png";
import kobeibasaframafroum from "../../assets/masaya without bg/kobeibasaframafroum.png";
import saframa2fool from "../../assets/masaya without bg/saframa2fool.png";
import patataspicantes from "../../assets/masaya without bg/patataspicantes.png";
import m7amara from "../../assets/masaya without bg/m7amara (2).png";
import sujok from "../../assets/Masaya (1)/Masaya/CARNE/SUJOK (PICANTE) .png";
import fetta from "../../assets/masaya without bg/fetta.png";
import fettaDjaj from "../../assets/masaya without bg/fettaDjaj.png";
import fettagambari from "../../assets/masaya without bg/fettagambari.png";
import albondigas from "../../assets/masaya without bg/albondigas.png";
import gambasalajillo from "../../assets/masaya without bg/gambasalajillo.png";
import langostinos from "../../assets/masaya without bg/langostinos.png";
import mejillones from "../../assets/masaya without bg/mejillones.png";
import platesShawermaFalafel from "../../assets/masaya without bg/platesShawermaFalafel.png";
import cordero1 from "../../assets/masaya without bg/cordero1.png";
import mix from "../../assets/masaya without bg/mix.png";
import musajan from "../../assets/Masaya (1)/Masaya/COMBINED/MUSAJAN  FALAFEL - 2 CREMAS A ELEJIR.png";
import kaftajashjash from "../../assets/masaya without bg/kaftajashjash.png";
import kebbedecalabaza from "../../assets/masaya without bg/kebbedecalabaza.png";
import platesDjajFalafel from "../../assets/masaya without bg/platesDjajFalafel.png";
import platesKuftaFalafel from "../../assets/masaya without bg/platesKuftaFalafel.png";
import caca from "../../assets/masaya without bg/caca.png";
import aaaa from "../../assets/masaya without bg/aaaa.png";
import platesKobeibaFalafel from "../../assets/masaya without bg/platesKobeibaFalafel.png";
import helwGeban from "../../assets/masaya without bg/helwGeban.png";
import helwGeban22 from "../../assets/masaya without bg/helwGeban22.png";
import kkk from "../../assets/masaya without bg/kkk.png";
import namoura from "../../assets/masaya without bg/namoura.png";
import mixHelw from "../../assets/masaya without bg/mixHelw.png";

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
      image: tabule,
    },
    {
      id: 2,
      name: "FATTOUCH",
      type: t("menuFilter.salad"),
      price: 10.5,
      description: t("menuItem.fattouch"),
      image: fattouch,
    },
    {
      id: 3,
      name: "SALATIT LABAN",
      type: t("menuFilter.salad"),
      price: 10.5,
      description: t("menuItem.salatitLaban"),
      image: labna,
    },
    {
      id: 4,
      name: "SALATIT GEBEN",
      type: t("menuFilter.salad"),
      price: 10.5,
      description: t("menuItem.salatitGeben"),
      image: gebna,
    },
    {
      id: 5,
      name: "SALATIT CUSCUS",
      type: t("menuFilter.salad"),
      price: 10.5,
      description: t("menuItem.salatitCuscus"),
      image: cuscus,
    },
    {
      id: 6,
      name: "SALATA ARABYE",
      type: t("menuFilter.salad"),
      price: 10.5,
      description: t("menuItem.salataArabye"),
      image: arabya,
    },
    {
      id: 7,
      name: "SALATIT FALAFEL",
      type: t("menuFilter.salad"),
      price: 10.5,
      description: t("menuItem.salatitFalafel"),

      image: salataFalafel,
    },
    {
      id: 8,
      name: "MUTABAL",
      type: t("menuFilter.mezah"),
      price: 8.95,
      description: t("menuItem.mutabal"),
      image: mutabal,
    },
    {
      id: 9,
      name: "MOHAMARA",
      type: t("menuFilter.mezah"),
      price: 8.95,
      description: t("menuItem.mohamara"),

      image: mohamara,
    },
    {
      id: 10,
      name: "HUMMUS",
      type: t("menuFilter.mezah"),
      price: 7.5,
      description: t("menuItem.hummus"),
      image: humus,
    },
    {
      id: 11,
      name: "HUMMUS BEIRUTÍ",
      type: t("menuFilter.mezah"),
      price: 8.25,
      description: t("menuItem.hummusBeiruti"),
      image: gebna,
    },
    {
      id: 12,
      name: "HUMMUS DE REMOLACHA",
      type: t("menuFilter.mezah"),
      price: 8.25,
      description: t("menuItem.hummusDeRemolacha"),
      image: humus,
    },
    {
      id: 13,
      name: "LABNE",
      type: t("menuFilter.mezah"),
      price: 7.95,
      description: t("menuItem.labne"),
      image: labna,
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
      image: foul,
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
      image: falafel1,
    },
    {
      id: 18,
      name: "KEBBE DE CALABAZA",
      price: 10.0,
      description: t("menuItem.kebbeDeCalabaza"),

      type: t("menuFilter.mezah"),
      image: kobeibasafra,
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
      image: roll,
    },
    {
      id: 21,
      name: "EMPANADILLAS DE QUESO",
      price: 10.0,
      description: t("menuItem.empanadillasDeQueso"),
      type: t("menuFilter.mezah"),
      image: kobeibasaframafroum,
    },
    {
      id: 22,
      name: "EMPANADILLAS DE ESPINACAS",
      price: 10.0,
      description: t("menuItem.empanadillasDeEspinacas"),
      type: t("menuFilter.mezah"),
      image: saframa2fool,
    },
    {
      id: 23,
      name: "PATATA HARRA (PICANTE)",
      price: 9.0,
      description: t("menuItem.patataHarra"),
      type: t("menuFilter.mezah"),
      image: patataspicantes,
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
      image: gebna,
    },
    {
      id: 26,
      name: "ARAYES DE QUESO",
      price: 9,
      type: t("menuFilter.arayes"),
      description: t("menuItem.arayesDeQueso"),
      image: m7amara,
    },
    {
      id: 27,
      name: "ARAYES DE CARNE",
      price: 10.5,
      type: t("menuFilter.arayes"),
      description: t("menuItem.arayesDeCarne"),

      image: m7amara,
    },
    {
      id: 28,
      name: "ARAYES DE CARNE Y QUESO",
      price: 11.25,
      type: t("menuFilter.arayes"),
      description: t("menuItem.arayesDeCarneYQueso"),

      image: m7amara,
    },
    {
      id: 29,
      name: "ARAYES SUJOK CON QUESO (PICANTE)",
      price: 11.25,
      type: t("menuFilter.arayes"),
      description: t("menuItem.arayesSujokConQueso"),

      image: sujok,
    },
    {
      id: 30,
      name: "Fatte",
      price: 12.25,
      description: t("menuItem.fatte"),

      type: t("menuFilter.fette"),
      image: fatachicken,
    },
    {
      id: 31,
      name: "Fatte Bilahme",
      price: 14.25,
      description: t("menuItem.fatteBilahme"),

      type: t("menuFilter.fette"),
      image: fetta,
    },
    {
      id: 32,
      name: "Fatte Dajaj",
      price: 14.25,
      description: t("menuItem.fatteDajaj"),

      type: t("menuFilter.fette"),
      image: fatachicken,
    },
    {
      id: 33,
      name: "Fatte Gambari",
      price: 15.25,
      description: t("menuItem.fatteGambari"),

      type: t("menuFilter.fette"),
      image: fettagambari,
    },
    {
      id: 34,
      name: "Sopa de Lentejas",
      price: 9.5,
      description: t("menuItem.sopaDeLentejas"),
      type: t("menuFilter.Sopas"),
      image: fattouch,
    },
    {
      id: 35,
      name: "Sopa de Pollo",
      price: 9.5,
      description: t("menuItem.sopaDePollo"),
      type: t("menuFilter.Sopas"),
      image: albondigas,
    },
    {
      id: 36,
      name: "Sopa de Verduras",
      price: 9.5,
      description: t("menuItem.sopaDeVerduras"),
      type: t("menuFilter.Sopas"),
      image: fattouch,
    },
    {
      id: 37,
      name: "Sopa de Pescado",
      price: 11.25,
      description: t("menuItem.sopaDePescado"),
      type: t("menuFilter.Sopas"),
      image: gambasalajillo,
    },
    {
      id: 38,
      name: "Gambas a la Plancha",
      price: 18.5,
      description: t("menuItem.gambasPlancha"),
      type: t("menuFilter.Pescados"),
      image: langostinos,
    },
    {
      id: 39,
      name: "Samake Harra / Pescado Picante",
      price: 18.5,
      description: t("menuItem.samakeHarra"),
      type: "Pescados",
      image: langostinos,
    },
    {
      id: 40,
      name: "Samake Bethini",
      price: 18.5,
      description: t("menuItem.samakeBethini"),
      type: "Pescados",
      image: mejillones,
    },
    {
      id: 41,
      name: "Shawarma de Carne",
      price: 14.95,
      description: t("menuItem.shawarmaDeCarne"),
      type: t("menuFilter.carne"),
      image: platesShawermaFalafel,
    },
    {
      id: 42,
      name: "Shawarma de Pollo",
      price: 14.95,
      description: t("menuItem.shawarmaDePollo"),
      type: t("menuFilter.carne"),
      image: mix,
    },
    {
      id: 43,
      name: "Costillas de Cordero",
      price: 19.5,
      description: t("menuItem.costillasDeCordero"),
      type: t("menuFilter.carne"),
      image: cordero1,
    },
    {
      id: 44,
      name: "XIX Tawuk",
      price: 14.95,
      description: t("menuItem.xixTawuk"),
      type: t("menuFilter.carne"),
      image: fettaDjaj,
    },
    {
      id: 45,
      name: "Musajan",
      price: 14.95,
      description: t("menuItem.musajan"),
      type: t("menuFilter.carne"),
      image: musajan,
    },
    {
      id: 46,
      name: "Sujok (Picante)",
      price: 14.95,
      description: t("menuItem.sujok"),
      type: t("menuFilter.carne"),
      image: sujok,
    },
    {
      id: 47,
      name: "Kafta",
      price: 14.95,
      description: t("menuItem.kafta"),
      type: t("menuFilter.carne"),
      image: kaftajashjash,
    },
    {
      id: 48,
      name: "Kafta Bethini",
      price: 16.5,
      description: t("menuItem.kaftaBethini"),
      type: t("menuFilter.carne"),
      image: kaftajashjash,
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
      image: kebbedecalabaza,
    },
    {
      id: 51,
      name: "Shawarma Pollo Falafel",
      price: 16.95,
      description: t("menuItem.shawarmaPolloFalafel"),
      type: t("menuFilter.combinados"),
      image: platesDjajFalafel,
    },
    {
      id: 52,
      name: "Shawarma Carne Falafel",
      price: 16.95,
      description: t("menuItem.shawarmaCarneFalafel"),
      type: t("menuFilter.combinados"),
      image: platesShawermaFalafel,
    },
    {
      id: 53,
      name: "Kafta Falafel",
      price: 16.95,
      description: t("menuItem.kaftaFalafel"),
      type: t("menuFilter.combinados"),
      image: platesKuftaFalafel,
    },
    {
      id: 54,
      name: "XIX Tawuk Falafel",
      price: 16.95,
      description: t("menuItem.xixTawukFalafel"),
      type: t("menuFilter.combinados"),
      image: aaaa,
    },
    {
      id: 55,
      name: "Arayes de Carne Falafel",
      price: 16.95,
      description: t("menuItem.arayesDeCarneFalafel"),
      type: t("menuFilter.combinados"),
      image: caca,
    },
    {
      id: 56,
      name: "Sujok (Picante) Falafel",
      price: 16.95,
      description: t("menuItem.sujokFalafel"),
      type: t("menuFilter.combinados"),
      image: mix,
    },
    {
      id: 57,
      name: "Musajan Falafel",
      price: 16.95,
      description: t("menuItem.musajanFalafel"),
      type: t("menuFilter.combinados"),
      image: musajan,
    },
    {
      id: 58,
      name: "Kebbe de Carne Falafel",
      price: 16.95,
      description: t("menuItem.kebbeDeCarne"),
      type: t("menuFilter.combinados"),
      image: platesKobeibaFalafel,
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
      image: humus,
    },
    {
      id: 62,
      name: "Mutabal",
      price: 42,
      description: "Cream of roasted eggplants with sesame sauce",
      type: "Menu Degustación",
      image: mutabal,
    },
    {
      id: 63,
      name: "Falafel",
      price: 42,
      description: t("menuItem.falafelAppetizer"),

      type: t("menuFilter.appetizer"),
      image: falafel1,
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
      image: caca,
    },
    {
      id: 66,
      name: "Empanadillas",
      price: 42,
      description: t("menuItem.empanadillasAppetizer"),
      type: t("menuFilter.appetizer"),
      image: saframa2fool,
    },
    {
      id: 67,
      name: "Labne",
      price: 42,
      description: t("menuItem.labneAppetizer"),
      type: t("menuFilter.appetizer"),
      image: labna,
    },
    {
      id: 68,
      name: "Kebbe",
      price: 42,
      description: t("menuItem.kebbeAppetizer"),

      type: t("menuFilter.appetizer"),
      image: platesKobeibaFalafel,
    },
    {
      id: 69,
      name: "Tabule",
      price: 42,
      description: t("menuItem.tabuleAppetizer"),

      type: t("menuFilter.appetizer"),
      image: tabule,
    },
    {
      id: 70,
      name: "Halewet El Geben",
      price: 7.0,
      description: t("menuItem.halewetElGeben"),
      type: t("menuFilter.desserts"),
      image: helwGeban,
    },
    {
      id: 71,
      name: "Baklawa",
      price: 2.25,
      description: t("menuItem.baklawa"),
      type: t("menuFilter.desserts"),
      image: helwGeban22,
    },
    {
      id: 72,
      name: "Knefe Queso o Nata Casera",
      price: 7.5,
      description: t("menuItem.knefeQueso"),
      type: t("menuFilter.desserts"),
      image: kkk,
    },
    {
      id: 73,
      name: "Namoura",
      price: 4.5,
      description: t("menuItem.namoura"),
      type: t("menuFilter.desserts"),
      image: namoura,
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
      image: mixHelw,
    },
    {
      id: 76,
      name: "Osmaliye",
      price: 7.0,
      description: t("menuItem.osmaliye"),
      type: t("menuFilter.desserts"),
      image: mixHelw,
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
      description: t("menuItem.labanAyran"),
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
