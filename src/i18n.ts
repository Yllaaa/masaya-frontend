import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About",
        ourMenu: "Our Menu",
        reserve: "Reserve",
      },
      footer: {
        info: "Info",
        gallery: "Gallery",
        reviews: "Reviews",
        findUs: "Find Us",
        contactUs: "Contact Us",
      },
      // done
      homeHeader: {
        title: "Experience Culinary Excellence in the Heart of the City",
        bigTitle:
          "Masaya, a unique dining experience in Brcelona, combines traditional flavors with modern elements for a memorable dining experience with signature dishes and a cozy ambiance.",
        reserveNow: "Reserve Now",
        topRated: "Top Rated",
        onGoogle: "On Google",
      },
      // done
      aboutHeader: {
        title: "ABOUT MASAYA",
        bigTitle:
          "where the authentic taste of Lebanon meets the vibrant heart of Barcelona.",
        paragraph:
          "Masaya offers a culinary experience showcasing Lebanese traditions and flavors, featuring signature mezze platters and grilled dishes, showcasing the warmth of Lebanese hospitality in an elegant, modern setting.",
      },

      // done
      about: {
        title: "About us",
        bigTitle: "Experience Lebanese Tradition in Barcelona",
        paragraph:
          "Masaya is more than just a restaurant; it is the meeting place of Lebanese history and Barcelona's dynamic spirit. We bring the real flavors of Lebanon to your plate, providing a gourmet experience that combines tradition and innovation. Inspired by traditional recipes and made with fresh, local ingredients, our menu captures the spirit of Lebanese cuisine in every bite.",
      },
      // done
      explore: {
        title: "TASTE OF LEBANESE CUSINE.",
        bigTitle: "Explore Our Flavorful Menu",
        paragraph:
          "At Masaya, we pride ourselves on providing an exceptional dining experience infused with the rich flavors of Lebanese cuisine. But don't just take our word for it—here’s what our guests have to say:",
      },
      // done
      findUs: {
        title: "FIND US",
        bigTitle: "Authentic Lebanese Flavors,Steps from Casa Batlló",
        paragraph:
          "Located just a 3-minute walk from the iconic Casa Batlló in Barcelona, Masaya brings the flavors of Lebanon to life in the heart of the city. Rooted in authentic Lebanese culinary traditions, ",
      },
      // done
      testimonial: {
        title: "WHAT THEY SAY",
        bigTitle: "Our Testimonial",
        paragraph:
          "At Masaya, we pride ourselves on providing an exceptional dining experience infused with the rich flavors of Lebanese cuisine. But don't just take our word for it—here’s what our guests have to say:",
      },
      // done
      gallery: {
        title: "GALLERY",
        bigTitle: "The Essence of Lebanese Cuisine",
        paragraph:
          "Step into a world where vibrant flavors meet exquisite artistry. Our gallery showcases the heart and soul of Masaya Lebanese Restaurant, featuring beautifully crafted dishes.",
      },
      // done
      signature: {
        title: "OUR SIGNATURE",
        bigTitle: "Falafel",
        paragraph:
          " At Masaya, our falafel is a true celebration of Lebanese tradition, offering a crispy, golden bite packed with vibrant flavors. Made from a blend of chickpeas, fresh herbs, and a secret mix of spices, our falafel is always freshly prepared and served with authentic sides like tahini, pickles, and pita bread. Whether you're a seasoned falafel lover or trying it for the first time, each bite brings you closer to the essence of Lebanon, right here in Barcelona. Perfect as a light snack or part of a hearty mezze, Masaya’s falafel is the ultimate taste of the Middle East!",
      },
      // done
      menuHeader: {
        title: "OUR MENU",
        bigTitle:
          "Discover the rich, flavorful essence of Lebanese cuisine, curated with passion and tradition.",
        paragraph:
          "Masaya invites you to savor the true essence of Lebanon with signature mezze platters and succulent grilled dishes, all crafted to deliver a rich culinary journey.",
      },
      // done
      menuFilter: {
        all: "All",
        salad: "Salad",
        mezah: "Mezah",
        arayes: "Arayes",
        fette: "Fette",
        Sopas: "Sopas",
        Pescados: "Pescados",
        carne: "Carne",
        Combinados: "Combinados",
        appetizer: "Appetizer",
        desserts: "Desserts",
      },
      menuItem: {
        tabule: "Parsley, tomato, onion, wheat semolina, olive oil and lemon",
        fattouch:
          "Lettuce, tomato, onion, pepper, cucumber, parsley, radishes, mint, fried bread, olive oil and lemon",
        salatitLaban: "Yogurt, cucumber with garlic, dried mint and olive oil",
        salatitGeban:
          "Feta cheese, lettuce, tomato, radish, pepper, cucumber, and mint",
        salatitCuscus:
          "Cuscus, tomato, onion, pepper, cucumber, parsley, mint, black olives, olive oil and lemon",
        salataArabye: "Fresh vegetables, lemon, garlic and mint",
        salatitFalafel:
          "Lettuce, tomato, radish, pomegranate, parsley, mint, falafel and cream of sesame",
        mutable: "Cream of roasted eggplants with sesame sauce",
        mohamara:
          "Roasted red pepper cream with nuts, bread crumbs and pomegranate juice",
        hummus: "Chickpea cream with sesame sauce",
        hummusBeiruti:
          "Chickpeas, tomato, parsley, cumin, garlic, cream sesame",
        hummusDeRemolacha: "Chickpea cream with beetroot and sesame sauce",
        labne: "Soft and light yogurt cream with dried mint with olive oil",
        musakaja: "Steamed eggplant with chickpeas, pepper, onion and tomato",
        foul: "Black beans with chickpeas with oil and lemon",
        quesoShanklish: "Treated cheese accompanied with chopped vegetables",
        falafel: "Vegetable fried croquettes with vegetables and sesame sauce",
        kebbeDeCalabaza:
          "Croquettes of wheat semolina with pumpkin stuffed with vegetables",
        warakInab:
          "Grape leaves stuffed with rice and vegetables cooked with oil and lemon",
        rollitosDeQueso: "Puff pastry rolls with fresh cheese",
        empanadillasDeQueso: "Patties stuffed with cheese",
        empanadillasDeEspinacas: "Empanadas stuffed with spinach",
        patataHarra: "Potatoes. coriander. garlic. hot pepper and olive oil",
        huevosShakshouka:
          "Eggs. onion. garlic. natural tomato. salt. pepper and olive oil",
        platoDeArroz: "Rice dish",
        arayesDeQueso: "Pita bread stuffed with cheese and grilled thyme",
        arayesDeCarne:
          "Pita bread stuffed with minced meat with tomato, onion and spices grilled",
        arayesDeCarneYQueso:
          "Pita bread stuffed with minced meat with tomato, cheese, onion and spices grilled",
        arayesSujokConQueso:
          "Pita bread stuffed with minced meat spicy, cheese and spices grilled",
        fatte:
          "Chickpeas with croutons, sesame sauce, yogurt with fried nuts and eggplant",
        fatteBilahme:
          "Chickpeas with croutons, minced meat, fried nuts with sesame sauce, yogurt and dried mint",
        fatteDajaj:
          "Chickpeas with croutons, chicken, fried nuts with sesame sauce, yogurt and dried mint",
        fatteGambari:
          "Chickpeas with croutons, prawn, fried nuts with sesame sauce, yogurt and dried mint",
        sopaDeLentejas: "Beans soup",
        sopaDePollo: "Chicken soup",
        sopaDeVerduras: "Vegetable soup",
        sopaDePescado: "Fish soup",
        gambasPlancha: "Grilled prawns",
        samakeHarra: "Fish with spicy sauce accompanied by rice",
        samakeBethini: "Fish with sesame sauce accompanied by rice",
        shawarmaDeCarne: "Beef & lamb shawarma",
        shawarmaDePollo: "Chicken shawarma",
        costillasDeCordero: "Lamb ribs",
        xixTawuk: "Grilled chicken breast cubes",
        musajan: "Chicken with special spices, onion, and almonds",
        sujok: "Spicy beef with garlic, lemon & tomato",
        kafta: "Chopped beef with onion, parsley, and spices",
        kaftaBethini: "Beef with sesame cream sauce",
        kaftaJach: "Beef with parsley, spices, onion, and tomato sauce",
        kebbeBilaban: "Semolina croquettes stuffed with meat and yogurt cream",
        shawarmaPolloFalafel:
          "Shawarma chicken with falafel and 2 creams of choice",
        shawarmaCarneFalafel:
          "Shawarma beef with falafel and 2 creams of choice",
        kaftaFalafel: "Kafta with falafel and 2 creams of choice",
        xixTawukFalafel:
          "Marinated grilled chicken with falafel and 2 creams of choice",
        arayesDeCarneFalafel:
          "Grilled meat-stuffed pita with falafel and 2 creams of choice",
        sujokFalafel: "Spicy Sujok with falafel and 2 creams of choice",
        musajanFalafel: "Musajan with falafel and 2 creams of choice",
        kebbeDeCarne: "Meat Kebbe with falafel and 2 creams of choice",
        superCarne: "Shawarma, XIX Tawuk, Arayes de Carne, Kafta",
        superVegetal:
          "Falafel, Warak Inab, Hummus, Mohamara, Kebbe de Calabaza, Arayes de Queso, Labne",

        falafelAppetizer:
          "Vegetable fried croquettes with vegetables and sesame sauce",
        warakInabAppetizer:
          "Grape leaves stuffed with rice and vegetables cooked with oil and lemon",
        arayesDeCarneAppetizer:
          "Pita bread stuffed with minced meat with tomato, onion and spices grilled",
        empanadillasAppetizer: "Empanadas stuffed",
        labneAppetizer:
          "Soft and light yogurt cream with dried mint with olive oil",
        kebbeAppetizer:
          "Croquettes of wheat semolina stuffed with roasted veal with onion and pine nuts",
        tabuleAppetizer:
          "Parsley, tomato, onion, wheat semolina, olive oil and lemon",
        halewetElGeben:
          "Cheese paste stuffed with special cream with pistachios",
        baklawa: "Puff pastry with honey filled with nuts",
        knefeQueso:
          "Cake made with cream or cheese with sugar syrup (served hot)",
        namoura: "Semolina dessert scented with orange blossom and almonds",
        kashtaliye: "Homemade cream with pistachios and sugar syrup",
        macedoniaConNataCasera:
          "Natural fruit salad with homemade cream, nuts and honey",
        osmaliye: "Layers of special cream, angel hair and pistachio",
      },
      reservation: {
        title: "RESERVATION",
        bigTitle:
          "Reserve Your Table Today And Indulge In The Flavors Of Lebanon, Right In The Heart Of Barcelona",
        paragraph:
          "Masaya offers a culinary experience showcasing Lebanese traditions and flavors, featuring signature mezze platters and grilled dishes, showcasing the warmth of Lebanese hospitality in an elegant, modern setting.",
        name: "Your Name",
        phone: "Phone Number",
        date: "Select Date",
        time: "Select Time",
        guest: "Guests",
        book: "BOOK YOUR TABLE AT MASAYA",
        bookP: "Enjoy authentic Lebanese cuisine at your convenience",
      },
    },
  },
  es: {
    translation: {
      navbar: {
        home: "Inicio",
        about: "Nosotros",
        ourMenu: "Nuestro Menú",
        reserve: "Reservar",
      },
      footer: {
        info: "Información",
        gallery: "Galería",
        reviews: "Opiniones",
        findUs: "Encuéntranos",
        contactUs: "Contáctanos",
      },
      homeHeader: {
        title: "Experiencia Culinaria de Excelencia en el Corazón de la Ciudad",
        bigTitle:
          "Masaya, una experiencia gastronómica única en Barcelona, combina sabores tradicionales con elementos modernos para una experiencia memorable con platos emblemáticos y un ambiente acogedor.",
        reserveNow: "Reserva Ahora",
        topRated: "Alta Calificación",
        onGoogle: "En Google",
      },
      aboutHeader: {
        title: "SOBRE MASAYA",
        bigTitle:
          "donde el auténtico sabor del Líbano se encuentra con el vibrante corazón de Barcelona.",
        paragraph:
          "Masaya ofrece una experiencia culinaria que muestra las tradiciones y sabores libaneses, con platillos de mezze y parrillas emblemáticas, destacando la calidez de la hospitalidad libanesa en un entorno elegante y moderno.",
      },
      about: {
        title: "Sobre Nosotros",
        bigTitle: "Experimenta la Tradición Libanesa en Barcelona",
        paragraph:
          "Masaya es más que un restaurante; es el punto de encuentro de la historia libanesa y el dinámico espíritu de Barcelona. Traemos los verdaderos sabores del Líbano a tu plato, brindando una experiencia gourmet que combina tradición e innovación. Inspirado en recetas tradicionales y hecho con ingredientes frescos y locales, nuestro menú captura el espíritu de la cocina libanesa en cada bocado.",
      },
      explore: {
        title: "SABOR DE LA COCINA LIBANESA.",
        bigTitle: "Explora Nuestro Sabroso Menú",
        paragraph:
          "En Masaya, nos enorgullecemos de ofrecer una experiencia gastronómica excepcional impregnada de los ricos sabores de la cocina libanesa. Pero no te fíes solo de nuestra palabra, esto es lo que dicen nuestros invitados:",
      },
      findUs: {
        title: "ENCUÉNTRANOS",
        bigTitle: "Sabores Auténticos del Líbano, a Pocos Pasos de Casa Batlló",
        paragraph:
          "Ubicado a solo 3 minutos a pie de la icónica Casa Batlló en Barcelona, Masaya da vida a los sabores del Líbano en el corazón de la ciudad. Con raíces en las tradiciones culinarias auténticas del Líbano,",
      },
      testimonial: {
        title: "LO QUE DICEN",
        bigTitle: "Nuestros Testimonios",
        paragraph:
          "En Masaya, nos enorgullecemos de ofrecer una experiencia gastronómica excepcional impregnada de los ricos sabores de la cocina libanesa. Pero no te fíes solo de nuestra palabra, esto es lo que dicen nuestros invitados:",
      },
      gallery: {
        title: "GALERÍA",
        bigTitle: "La Esencia de la Cocina Libanesa",
        paragraph:
          "Sumérgete en un mundo donde los sabores vibrantes se encuentran con el arte exquisito. Nuestra galería muestra el corazón y el alma del restaurante libanés Masaya, con platos bellamente elaborados.",
      },
      signature: {
        title: "NUESTRO PLATO EMBLEMÁTICO",
        bigTitle: "Falafel",
        paragraph:
          "En Masaya, nuestro falafel es una verdadera celebración de la tradición libanesa, ofreciendo un bocado crujiente y dorado lleno de sabores vibrantes. Hecho con una mezcla de garbanzos, hierbas frescas y una mezcla secreta de especias, nuestro falafel siempre se prepara fresco y se sirve con guarniciones auténticas como tahini, pepinillos y pan de pita. Ya seas un amante del falafel o lo pruebes por primera vez, cada bocado te acerca a la esencia del Líbano, aquí mismo en Barcelona. Perfecto como un tentempié ligero o como parte de un abundante mezze, el falafel de Masaya es el sabor definitivo de Oriente Medio.",
      },
      menuHeader: {
        title: "NUESTRO MENÚ",
        bigTitle:
          "Descubre la rica y sabrosa esencia de la cocina libanesa, curada con pasión y tradición.",
        paragraph:
          "Masaya te invita a saborear la verdadera esencia del Líbano con platillos emblemáticos de mezze y parrilladas suculentas, todas diseñadas para brindar un rico viaje culinario.",
      },
      menuFilter: {
        all: "Todos",
        salad: "Ensalada",
        mezah: "Mezah",
        arayes: "Arayes",
        fette: "Fette",
        Sopas: "Sopas",
        Pescados: "Pescados",
        carne: "Carne",
        Combinados: "Combinados",
        appetizer: "Entrante",
        desserts: "Postres",
      },
      menuItem: {
        tabule:
          "Perejil, tomate, cebolla, sémola de trigo, aceite de oliva y limón",
        fattouch:
          "Lechuga, tomate, cebolla, pimiento, pepino, perejil, rábanos, menta, pan frito, aceite de oliva y limón",
        salatitLaban: "Yogur, pepino con ajo, menta seca y aceite de oliva",
        salatitGeban:
          "Queso feta, lechuga, tomate, rábano, pimiento, pepino y menta",
        salatitCuscus:
          "Cuscús, tomate, cebolla, pimiento, pepino, perejil, menta, aceitunas negras, aceite de oliva y limón",
        salataArabye: "Verduras frescas, limón, ajo y menta",
        salatitFalafel:
          "Lechuga, tomate, rábano, granada, perejil, menta, falafel y crema de sésamo",
        mutable: "Crema de berenjenas asadas con salsa de sésamo",
        mohamara:
          "Crema de pimiento rojo asado con nueces, pan rallado y jugo de granada",
        hummus: "Crema de garbanzos con salsa de sésamo",
        hummusBeiruti:
          "Garbanzos, tomate, perejil, comino, ajo y crema de sésamo",
        hummusDeRemolacha: "Crema de garbanzos con remolacha y salsa de sésamo",
        labne: "Crema de yogur suave y ligera con menta seca y aceite de oliva",
        musakaja:
          "Berenjena al vapor con garbanzos, pimiento, cebolla y tomate",
        foul: "Habas negras con garbanzos, aceite y limón",
        quesoShanklish: "Queso curado acompañado de verduras picadas",
        falafel: "Croquetas fritas de verduras con sésamo",
        kebbeDeCalabaza:
          "Croquetas de sémola de trigo con calabaza rellenas de verduras",
        warakInab:
          "Hojas de parra rellenas de arroz y verduras cocidas con aceite y limón",
        rollitosDeQueso: "Rollos de hojaldre con queso fresco",
        empanadillasDeQueso: "Empanadillas rellenas de queso",
        empanadillasDeEspinacas: "Empanadas rellenas de espinacas",
        patataHarra:
          "Patatas, cilantro, ajo, pimiento picante y aceite de oliva",
        huevosShakshouka:
          "Huevos, cebolla, ajo, tomate natural, sal, pimienta y aceite de oliva",
        platoDeArroz: "Plato de arroz",
        arayesDeQueso: "Pan de pita relleno de queso y tomillo a la parrilla",
        arayesDeCarne:
          "Pan de pita relleno de carne picada con tomate, cebolla y especias a la parrilla",
        arayesDeCarneYQueso:
          "Pan de pita relleno de carne picada con tomate, queso, cebolla y especias a la parrilla",
        arayesSujokConQueso:
          "Pan de pita relleno de carne picante, queso y especias a la parrilla",
        fatte:
          "Garbanzos con picatostes, salsa de sésamo, yogur con frutos secos fritos y berenjena",
        fatteBilahme:
          "Garbanzos con picatostes, carne picada, frutos secos fritos, salsa de sésamo, yogur y menta seca",
        fatteDajaj:
          "Garbanzos con picatostes, pollo, frutos secos fritos, salsa de sésamo, yogur y menta seca",
        fatteGambari:
          "Garbanzos con picatostes, gambas, frutos secos fritos, salsa de sésamo, yogur y menta seca",
        sopaDeLentejas: "Sopa de lentejas",
        sopaDePollo: "Sopa de pollo",
        sopaDeVerduras: "Sopa de verduras",
        sopaDePescado: "Sopa de pescado",
        gambasPlancha: "Gambas a la plancha",
        samakeHarra: "Pescado con salsa picante acompañado de arroz",
        samakeBethini: "Pescado con salsa de sésamo acompañado de arroz",
        shawarmaDeCarne: "Shawarma de ternera y cordero",
        shawarmaDePollo: "Shawarma de pollo",
        costillasDeCordero: "Costillas de cordero",
        xixTawuk: "Cubos de pechuga de pollo a la parrilla",
        musajan: "Pollo con especias especiales, cebolla y almendras",
        sujok: "Ternera picante con ajo, limón y tomate",
        kafta: "Ternera picada con cebolla, perejil y especias",
        kaftaBethini: "Ternera con salsa de crema de sésamo",
        kaftaJach: "Ternera con perejil, especias, cebolla y salsa de tomate",
        kebbeBilaban:
          "Croquetas de sémola rellenas de carne con crema de yogur",
        shawarmaPolloFalafel:
          "Shawarma de pollo con falafel y 2 cremas a elección",
        shawarmaCarneFalafel:
          "Shawarma de ternera con falafel y 2 cremas a elección",
        kaftaFalafel: "Kafta con falafel y 2 cremas a elección",
        xixTawukFalafel:
          "Pollo marinado a la parrilla con falafel y 2 cremas a elección",
        arayesDeCarneFalafel:
          "Pan de pita relleno de carne a la parrilla con falafel y 2 cremas a elección",
        sujokFalafel: "Sujok picante con falafel y 2 cremas a elección",
        musajanFalafel: "Musajan con falafel y 2 cremas a elección",
        kebbeDeCarne: "Kebbe de carne con falafel y 2 cremas a elección",
        superCarne: "Shawarma, XIX Tawuk, Arayes de Carne, Kafta",
        superVegetal:
          "Falafel, Warak Inab, Hummus, Mohamara, Kebbe de Calabaza, Arayes de Queso, Labne",

        falafelAppetizer: "Croquetas fritas de verduras con sésamo",
        warakInabAppetizer:
          "Hojas de parra rellenas de arroz y verduras cocidas con aceite y limón",
        arayesDeCarneAppetizer:
          "Pan de pita relleno de carne picada con tomate, cebolla y especias a la parrilla",
        empanadillasAppetizer: "Empanadillas rellenas",
        labneAppetizer:
          "Crema de yogur suave y ligera con menta seca y aceite de oliva",
        kebbeAppetizer:
          "Croquetas de sémola de trigo rellenas de ternera asada con cebolla y piñones",
        tabuleAppetizer:
          "Perejil, tomate, cebolla, sémola de trigo, aceite de oliva y limón",
        halewetElGeben:
          "Pasta de queso rellena de crema especial con pistachos",
        baklawa: "Hojaldre con miel relleno de frutos secos",
        knefeQueso:
          "Pastel hecho con crema o queso con almíbar de azúcar (servido caliente)",
        namoura: "Postre de sémola perfumado con flor de azahar y almendras",
        kashtaliye: "Nata casera con pistachos y almíbar de azúcar",
        macedoniaConNataCasera:
          "Ensalada de frutas naturales con nata casera, frutos secos y miel",
        osmaliye: "Capas de crema especial, cabello de ángel y pistacho",
      },
      reservation: {
        title: "RESERVA",
        bigTitle:
          "Reserva Tu Mesa Hoy Y Disfruta De Los Sabores Del Líbano, Justo En El Corazón De Barcelona",
        paragraph:
          "Masaya ofrece una experiencia culinaria que destaca las tradiciones y sabores libaneses, con platillos emblemáticos de mezze y parrillas, mostrando la calidez de la hospitalidad libanesa en un entorno elegante y moderno.",
        name: "Tu Nombre",
        phone: "Número de Teléfono",
        date: "Selecciona la Fecha",
        time: "Selecciona la Hora",
        guest: "Invitados",
        book: "RESERVA TU MESA EN MASAYA",
        bookP: "Disfruta de la auténtica cocina libanesa a tu conveniencia",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
