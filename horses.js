/* ═══════════════════════════════════════════════════════
   horses.js — Fuente única de datos para index, catálogo y ficha
   Editar aquí para que el cambio se refleje en las tres páginas
   ═══════════════════════════════════════════════════════ */

const horses = [
    {
        id: 1,
        name: "Tanto",
        breed: "Pura Raza Española (PRE)",
        breedShort: "P.R.E.",
        raza: "pre",
        age: 6,
        nacimiento: "2020",
        height: "1.63 m",
        talla: "1.63 m",
        altura_cat: "medium",

        /* Códigos para filtros (catalogo.html) */
        disciplina: "doma",
        nivel: "intermedio",
        genero: "semental",
        perfil: "profesional",

        /* Etiquetas de display (caballo.html, catalogo cards) */
        disciplinaLabel: "Doma Clásica",
        nivelLabel: "Nivel 4",
        generoLabel: "Semental",
        perfilLabel: "Profesional",

        capa: "Torda",
        piro: "Positivo",
        image: "caballos/SANTO/tanto.jpeg",

        /* Pedigree (solo Tanto tiene datos completos) */
        padre: "Livino de Martet",
        madre: "Fer Bonita",
        criador: "Finca Lo Tacon",
        titular: "Finca Lo Tacon",
        microchip: "100100007241310000129010",

        desc: {
            es: "Tanto es un semental Pura Raza Española de capa torda nacido en 2020, con Nivel 4 de Doma Clásica confirmado. Entero. Placas radiológicas correctas. Piroplasmosis positiva, condición habitual y controlable en caballos de la zona mediterránea, sin impedimento para su actividad deportiva con el protocolo veterinario adecuado. San Pedro del Pinatar, Murcia.",
            en: "Tanto is a grey PRE stallion born in 2020, with confirmed Level 4 Classical Dressage. Entire. Correct radiological plates. Positive piroplasmosis, a common and manageable condition in Mediterranean horses with no impact on sporting activity under the appropriate veterinary protocol. San Pedro del Pinatar, Murcia."
        },
        tag: {
            es: "Nivel 4 · Doma",
            en: "Level 4 · Dressage"
        }
    },
    {
        id: 2,
        name: "Tevora",
        breed: "Pura Raza Española (PRE)",
        breedShort: "P.R.E.",
        raza: "pre",
        age: 5,
        nacimiento: "2021",
        height: "1.59 m",
        talla: "1.59 m",
        altura_cat: "medium",

        disciplina: "doma",
        nivel: "basico",
        genero: "yegua",
        perfil: "amateur",

        disciplinaLabel: "Doma Clásica",
        nivelLabel: "Nivel 2",
        generoLabel: "Yegua",
        perfilLabel: "Amateur",

        capa: "Torda",
        piro: "Negativo",
        image: "caballos/EVORA/tevora.jpeg",

        desc: {
            es: "Tevora es una yegua Pura Raza Española de capa torda nacida en 2021, con Nivel 2 de Doma Clásica confirmado. Ejemplar joven con gran potencial de desarrollo, temperamento dócil y movimientos naturales propios de la raza. Placas radiológicas en perfecto estado. Piroplasmosis negativa. La opción ideal para un jinete amateur que quiera progresar en la doma clásica. San Pedro del Pinatar, Murcia.",
            en: "Tevora is a grey PRE mare born in 2021, with confirmed Level 2 Classical Dressage. A young horse with great development potential, a gentle temperament and natural movements typical of the breed. Perfect radiological plates. Negative piroplasmosis. The ideal choice for an amateur rider looking to progress in classical dressage. San Pedro del Pinatar, Murcia."
        },
        tag: {
            es: "Nivel 2 · Doma",
            en: "Level 2 · Dressage"
        }
    },
    {
        id: 3,
        name: "Timeño",
        breed: "Pura Raza Española (PRE)",
        breedShort: "P.R.E.",
        raza: "pre",
        age: 8,
        nacimiento: "2018",
        height: "1.74 m",
        talla: "1.74 m",
        altura_cat: "xlarge",

        disciplina: "doma",
        nivel: "avanzado",
        genero: "semental",
        perfil: "profesional",

        disciplinaLabel: "Doma Clásica",
        nivelLabel: "Nivel 4 · Passage",
        generoLabel: "Semental",
        perfilLabel: "Profesional",

        capa: "Castaña",
        piro: "Negativo",
        image: "caballos/Limeno/timeño.jpeg",

        desc: {
            es: "Timeño es un semental Pura Raza Española de capa castaña nacido en 2018. Su talla excepcional de 1.74 m lo convierte en uno de los ejemplares más imponentes del catálogo. Con Nivel 4 y Passage confirmados. Entero. Placas radiológicas correctas. Piroplasmosis negativa. San Pedro del Pinatar, Murcia.",
            en: "Timeño is a chestnut PRE stallion born in 2018. His exceptional height of 1.74 m makes him one of the most impressive horses in the catalogue. Confirmed Level 4 with Passage. Entire. Correct radiological plates. Negative piroplasmosis. San Pedro del Pinatar, Murcia."
        },
        tag: {
            es: "Nivel 4 · Passage",
            en: "Level 4 · Passage"
        }
    },
    {
        id: 4,
        name: "Talconero",
        breed: "Pura Raza Española (PRE)",
        breedShort: "P.R.E.",
        raza: "pre",
        age: 11,
        nacimiento: "2015",
        height: "1.67 m",
        talla: "1.67 m",
        altura_cat: "large",

        disciplina: "doma",
        nivel: "gran-prix",
        genero: "castrado",
        perfil: "profesional",

        disciplinaLabel: "Doma Clásica",
        nivelLabel: "San Jorge · Piaffe · Passage",
        generoLabel: "Castrado",
        perfilLabel: "Profesional",

        capa: "Castaña",
        piro: "Negativo",
        image: "caballos/Talconero/talconero.jpeg",

        desc: {
            es: "Talconero es un macho Pura Raza Española castrado de capa castaña nacido en 2015. El ejemplar más experimentado del catálogo: Nivel San Jorge completo con Piaffe y Passage confirmados. Equilibrado y de fácil manejo. Placas radiológicas correctas. Piroplasmosis negativa. San Pedro del Pinatar, Murcia.",
            en: "Talconero is a chestnut PRE gelding born in 2015. The most experienced horse in the catalogue: full Grand Prix level with confirmed Piaffe and Passage. Balanced and easy to handle. Correct radiological plates. Negative piroplasmosis. San Pedro del Pinatar, Murcia."
        },
        tag: {
            es: "San Jorge · Piaffe · Passage",
            en: "Grand Prix · Piaffe · Passage"
        }
    },
    {
        id: 5,
        name: "Tumero",
        breed: "Pura Raza Española (PRE)",
        breedShort: "P.R.E.",
        raza: "pre",
        age: 7,
        nacimiento: "2019",
        height: "1.66 m",
        talla: "1.66 m",
        altura_cat: "large",

        disciplina: "doma",
        nivel: "gran-prix",
        genero: "semental",
        perfil: "profesional",

        disciplinaLabel: "Doma Clásica",
        nivelLabel: "San Jorge · Nivel 7",
        generoLabel: "Semental",
        perfilLabel: "Profesional",

        capa: "Torda",
        piro: "Negativo",
        image: "caballos/UMERO/tumero.jpeg",

        desc: {
            es: "Tumero es un semental Pura Raza Española de capa torda nacido en 2019. Con tan solo 7 años ha alcanzado el Nivel 7 de Doma Clásica y el nivel San Jorge. Entero. Gran motor y presencia en la pista. Placas radiológicas en perfecto estado. Piroplasmosis negativa. San Pedro del Pinatar, Murcia.",
            en: "Tumero is a grey PRE stallion born in 2019. At just 7 years old he has reached Level 7 of Classical Dressage and Grand Prix level. Entire. Great engine and ring presence. Perfect radiological plates. Negative piroplasmosis. San Pedro del Pinatar, Murcia."
        },
        tag: {
            es: "San Jorge · Nivel 7",
            en: "Grand Prix · Level 7"
        }
    },
    {
        id: 6,
        name: "Sweet",
        breed: "Pony",
        breedShort: "Pony",
        raza: "pre",
        age: 13,
        nacimiento: "2013",
        height: "1.48 m",
        talla: "1.48 m",
        altura_cat: "small",

        disciplina: "doma",
        nivel: "intermedio",
        genero: "yegua",
        perfil: "amateur",

        disciplinaLabel: "Doma Clásica",
        nivelLabel: "Nivel II-III",
        generoLabel: "Yegua",
        perfilLabel: "Amateur",

        capa: "Castaña",
        piro: "Consultar",
        image: "caballos/Sweet/sweet.JPG",

        desc: {
            es: "Sweet es una yegua Pony de capa castaña nacida en 2013, con Nivel II-III de Doma Clásica confirmado. 13 años de edad, talla 1.48 m. San Pedro del Pinatar, Murcia.",
            en: "Sweet is a chestnut Pony mare born in 2013, with confirmed Level II-III Classical Dressage. 13 years old, 1.48 m height. San Pedro del Pinatar, Murcia."
        },
        tag: {
            es: "Nivel II-III · Doma",
            en: "Level II-III · Dressage"
        }
    },
    {
        id: 7,
        name: "Festina",
        breed: "Pura Raza Española (PRE)",
        breedShort: "P.R.E.",
        raza: "pre",
        age: 0,
        nacimiento: "—",
        height: "Consultar",
        talla: "—",
        altura_cat: "medium",

        disciplina: "doma",
        nivel: "intermedio",
        genero: "yegua",
        perfil: "amateur",

        disciplinaLabel: "Doma Clásica",
        nivelLabel: "Consultar",
        generoLabel: "Yegua",
        perfilLabel: "Amateur",

        capa: "—",
        piro: "—",
        image: "caballos/FESTINA/_Piebald horse_ Sticker for Sale by Grypis.jpg",

        desc: {
            es: "Información próximamente disponible. Contacte con nosotros para conocer los detalles de esta yegua PRE. San Pedro del Pinatar, Murcia.",
            en: "Full details coming soon. Contact us to learn more about this PRE mare. San Pedro del Pinatar, Murcia."
        },
        tag: {
            es: "PRE",
            en: "PRE"
        }
    }
];
