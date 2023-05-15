var exports = exports || {};

//  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//	Config
//
//	The build config will read the module config.js at the root
//	of each course module (source) then produce a course module
//	in the build folder.
//
//	Build folders will be deleted before re-created
//	SCORM and player files will be created automatically

//
//	To execute type  'node run'  in the command line (at root)
//
//
//  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

//
//	ISO/Lang values are cases sensitive - country must be upper case
//
//	http://www.lingoes.net/en/translator/langcode.htm
//

exports.playerTranslations = {
  en: {
    CLOSE: "Close",
  },
  de: {
    CLOSE: "Schließen",
  },
  "de-AT": {
    CLOSE: "Schließen",
  },
  nl: {
    CLOSE: "Sluiten",
  },
  fr: {
    CLOSE: "Fermer",
  },
  it: {
    CLOSE: "Chiudi",
  },
  pl: {
    CLOSE: "Zamknij",
  },
  es: {
    CLOSE: "Cerrar",
  },
  "es-MX": {
    CLOSE: "Cerrar",
  },
  tr: {
    CLOSE: "Kapat",
  },
  pt: {
    CLOSE: "Fechar",
  },
  "pt-BR": {
    CLOSE: "Fechar",
  },
  ru: {
    CLOSE: "Закрывать",
  },
  th: {
    CLOSE: "ปิด",
  },
  "us-DIST": {
    CLOSE: "Close",
  },
};

exports.config = [

  //  ==========================================================
  //
  //				6.3 OEM Seams as a System
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. The Big Recap Quiz
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: true,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "teroson-collision",
    title: "The Big Recap Quiz",

    no: 1,
    course: "OEM Seams as a System",
    module: "The Big Recap Quiz",
    source: "course-6.3-oem-seams-as-a-system/module-001-the-big-recap-quiz",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2. Intro To Seam Sealing
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "teroson-collision",
    title: "Intro To Seam Sealing",

    no: 2,
    course: "OEM Seams as a System",
    module: "Intro To Seam Sealing",
    source: "course-6.3-oem-seams-as-a-system/module-002-intro-to-seam-sealing",

    navigation: true,
    sidebar: true,
    css: 2,
  },
];