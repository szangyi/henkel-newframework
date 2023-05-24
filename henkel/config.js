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

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. The Big Recap Quiz
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  // {
  //   build: true,
  //   scorm: "1.2",

  //   version: "1.0.0",
  //   lang: "en",
  //   brand: "v3-loctite",
  //   title: "The Big Recap Quiz",

  //   no: 1,
  //   course: "OEM Seams as a System",
  //   module: "The Big Recap Quiz",
  //   source: "course-6.3-oem-seams-as-a-system/module-001-the-big-recap-quiz",

  //   navigation: true,
  //   sidebar: true,
  //   css: 2,
  // },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2. Test Pages
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: true,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "v3-loctite",
    title: "Test pages",

    no: 2,
    course: "OEM Seams as a System",
    module: "Test pages",
    source: "course-6.3-oem-seams-as-a-system/module-002-test-pages",

    navigation: true,
    sidebar: true,
    css: 2,
  },


  //  ==========================================================
  //
  //				6.1 Introduction to Collision Repair
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. Collision Repair from A to Z -en
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: true,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "teroson-collision",
    title: "Collision Repair from A to Z",

    no: 1,
    course: "Introduction to Collision Repair",
    module: "Collision Repair from A to Z",
    source: "course-6.1-introduction-to-collision-repair/module-001-collision-repair-from-a-to-z",

    navigation: true,
    sidebar: true,
    css: 2,
  },


];
