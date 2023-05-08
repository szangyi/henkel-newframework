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
  //					1.1 Threadlocking
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1.1 Threadlocking EN
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Basic Introduction to Threadlocking",

    no: 1,
    course: "Threadlocking",
    module: "Basic Introduction",
    source: "course-1.1-threadlocking/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Why Use LOCTITE® Threadlockers",

    no: 2,
    course: "Threadlocking",
    module: "Why Use LOCTITE Threadlockers",
    source: "course-1.1-threadlocking/module-002-why-use-loctite-threadlockers",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "How to Apply LOCTITE® Threadlocker",

    no: 3,
    course: "Threadlocking",
    module: "How to Apply LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-003-how-to-apply-loctite-threadlocker",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "How to Select the Right LOCTITE® Threadlocker",

    no: 4,
    course: "Threadlocking",
    module: "How to Select the Right LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-004-how-to-select-the-right-loctite-threadlocker",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Mythbusters",

    no: 5,
    course: "Threadlocking",
    module: "Mythbusters",
    source: "course-1.1-threadlocking/module-005-mythbusters",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Welcome to Reality",

    no: 6,
    course: "Threadlocking",
    module: "Welcome to Reality",
    source: "course-1.1-threadlocking/module-006-welcome-to-reality",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Do the Math",

    no: 7,
    course: "Threadlocking",
    module: "Do the Math",
    source: "course-1.1-threadlocking/module-007-do-the-math",

    navigation: true,
    sidebar: false,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1.1 Threadlocking NL
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "nl",
    brand: "loctite",
    title: "Basic Introduction to Threadlocking",

    no: 1,
    course: "Threadlocking",
    module: "Basic Introduction",
    source: "course-1.1-threadlocking/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "nl",
    brand: "loctite",
    title: "Why Use LOCTITE® Threadlockers",

    no: 2,
    course: "Threadlocking",
    module: "Why Use LOCTITE Threadlockers",
    source: "course-1.1-threadlocking/module-002-why-use-loctite-threadlockers",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "nl",
    brand: "loctite",
    title: "How to Apply LOCTITE® Threadlocker",

    no: 3,
    course: "Threadlocking",
    module: "How to Apply LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-003-how-to-apply-loctite-threadlocker",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "nl",
    brand: "loctite",
    title: "How to Select the Right LOCTITE® Threadlocker",

    no: 4,
    course: "Threadlocking",
    module: "How to Select the Right LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-004-how-to-select-the-right-loctite-threadlocker",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "nl",
    brand: "loctite",
    title: "Mythbusters",

    no: 5,
    course: "Threadlocking",
    module: "Mythbusters",
    source: "course-1.1-threadlocking/module-005-mythbusters",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "nl",
    brand: "loctite",
    title: "Welcome to Reality",

    no: 6,
    course: "Threadlocking",
    module: "Welcome to Reality",
    source: "course-1.1-threadlocking/module-006-welcome-to-reality",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "nl",
    brand: "loctite",
    title: "Do the Math",

    no: 7,
    course: "Threadlocking",
    module: "Do the Math",
    source: "course-1.1-threadlocking/module-007-do-the-math",

    navigation: true,
    sidebar: false,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1.1 Threadlocking DE
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "de",
    brand: "loctite",
    title: "Basic Introduction to Threadlocking",

    no: 1,
    course: "Threadlocking",
    module: "Basic Introduction",
    source: "course-1.1-threadlocking/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "de",
    brand: "loctite",
    title: "Why Use LOCTITE® Threadlockers",

    no: 2,
    course: "Threadlocking",
    module: "Why Use LOCTITE® Threadlockers",
    source: "course-1.1-threadlocking/module-002-why-use-loctite-threadlockers",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "de",
    brand: "loctite",
    title: "How to Apply LOCTITE® Threadlocker",

    no: 3,
    course: "Threadlocking",
    module: "How to Apply LOCTITE® Threadlocker",
    source:
      "course-1.1-threadlocking/module-003-how-to-apply-loctite-threadlocker",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "de",
    brand: "loctite",
    title: "How to Select the Right LOCTITE® Threadlocker",

    no: 4,
    course: "Threadlocking",
    module: "How to Select the Right LOCTITE® Threadlocker",
    source:
      "course-1.1-threadlocking/module-004-how-to-select-the-right-loctite-threadlocker",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "de",
    brand: "loctite",
    title: "Mythbusters",

    no: 5,
    course: "Threadlocking",
    module: "Mythbusters",
    source: "course-1.1-threadlocking/module-005-mythbusters",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "de",
    brand: "loctite",
    title: "Welcome to Reality",

    no: 6,
    course: "Threadlocking",
    module: "Welcome to Reality",
    source: "course-1.1-threadlocking/module-006-welcome-to-reality",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "de",
    brand: "loctite",
    title: "Do the Math",

    no: 7,
    course: "Threadlocking",
    module: "Do the Math",
    source: "course-1.1-threadlocking/module-007-do-the-math",

    navigation: true,
    sidebar: false,
  },

  /*<===
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1.1 Threadlocking DE-AT
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "de-AT",
    brand: "loctite",
    title: "Basic Introduction to Threadlocking",

    no: 1,
    course: "Threadlocking",
    module: "Basic Introduction",
    source: "course-1.1-threadlocking/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "de-AT",
    brand: "loctite",
    title: "Why Use LOCTITE® Threadlockers",

    no: 2,
    course: "Threadlocking",
    module: "Why Use LOCTITE Threadlockers",
    source: "course-1.1-threadlocking/module-002-why-use-loctite-threadlockers",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "de-AT",
    brand: "loctite",
    title: "How to Apply LOCTITE® Threadlocker",

    no: 3,
    course: "Threadlocking",
    module: "How to Apply LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-003-how-to-apply-loctite-threadlocker",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "de-AT",
    brand: "loctite",
    title: "How to Select the Right LOCTITE® Threadlocker",

    no: 4,
    course: "Threadlocking",
    module: "How to Select the Right LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-004-how-to-select-the-right-loctite-threadlocker",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "de-AT",
    brand: "loctite",
    title: "Mythbusters",

    no: 5,
    course: "Threadlocking",
    module: "Mythbusters",
    source: "course-1.1-threadlocking/module-005-mythbusters",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "de-AT",
    brand: "loctite",
    title: "Welcome to Reality",

    no: 6,
    course: "Threadlocking",
    module: "Welcome to Reality",
    source: "course-1.1-threadlocking/module-006-welcome-to-reality",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "de-AT",
    brand: "loctite",
    title: "Do the Math",

    no: 7,
    course: "Threadlocking",
    module: "Do the Math",
    source: "course-1.1-threadlocking/module-007-do-the-math",

    navigation: true,
    sidebar: false,
  },
<===  */

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1.1 Threadlocking PL
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pl",
    brand: "loctite",
    title: "Basic Introduction to Threadlocking",

    no: 1,
    course: "Threadlocking",
    module: "Basic Introduction",
    source: "course-1.1-threadlocking/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pl",
    brand: "loctite",
    title: "Why Use LOCTITE® Threadlockers",

    no: 2,
    course: "Threadlocking",
    module: "Why Use LOCTITE Threadlockers",
    source: "course-1.1-threadlocking/module-002-why-use-loctite-threadlockers",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pl",
    brand: "loctite",
    title: "How to Apply LOCTITE® Threadlocker",

    no: 3,
    course: "Threadlocking",
    module: "How to Apply LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-003-how-to-apply-loctite-threadlocker",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pl",
    brand: "loctite",
    title: "How to Select the Right LOCTITE® Threadlocker",

    no: 4,
    course: "Threadlocking",
    module: "How to Select the Right LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-004-how-to-select-the-right-loctite-threadlocker",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pl",
    brand: "loctite",
    title: "Mythbusters",

    no: 5,
    course: "Threadlocking",
    module: "Mythbusters",
    source: "course-1.1-threadlocking/module-005-mythbusters",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pl",
    brand: "loctite",
    title: "Welcome to Reality",

    no: 6,
    course: "Threadlocking",
    module: "Welcome to Reality",
    source: "course-1.1-threadlocking/module-006-welcome-to-reality",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pl",
    brand: "loctite",
    title: "Do the Math",

    no: 7,
    course: "Threadlocking",
    module: "Do the Math",
    source: "course-1.1-threadlocking/module-007-do-the-math",

    navigation: true,
    sidebar: false,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1.1 Threadlocking IT
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "it",
    brand: "loctite",
    title: "Basic Introduction to Threadlocking",

    no: 1,
    course: "Threadlocking",
    module: "Basic Introduction",
    source: "course-1.1-threadlocking/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "it",
    brand: "loctite",
    title: "Why Use LOCTITE® Threadlockers",

    no: 2,
    course: "Threadlocking",
    module: "Why Use LOCTITE Threadlockers",
    source: "course-1.1-threadlocking/module-002-why-use-loctite-threadlockers",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "it",
    brand: "loctite",
    title: "How to Apply LOCTITE® Threadlocker",

    no: 3,
    course: "Threadlocking",
    module: "How to Apply LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-003-how-to-apply-loctite-threadlocker",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "it",
    brand: "loctite",
    title: "How to Select the Right LOCTITE® Threadlocker",

    no: 4,
    course: "Threadlocking",
    module: "How to Select the Right LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-004-how-to-select-the-right-loctite-threadlocker",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "it",
    brand: "loctite",
    title: "Mythbusters",

    no: 5,
    course: "Threadlocking",
    module: "Mythbusters",
    source: "course-1.1-threadlocking/module-005-mythbusters",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "it",
    brand: "loctite",
    title: "Welcome to Reality",

    no: 6,
    course: "Threadlocking",
    module: "Welcome to Reality",
    source: "course-1.1-threadlocking/module-006-welcome-to-reality",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "it",
    brand: "loctite",
    title: "Do the Math",

    no: 7,
    course: "Threadlocking",
    module: "Do the Math",
    source: "course-1.1-threadlocking/module-007-do-the-math",

    navigation: true,
    sidebar: false,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1.1 Threadlocking ES
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es",
    brand: "loctite",
    title: "Basic Introduction to Threadlocking",

    no: 1,
    course: "Threadlocking",
    module: "Basic Introduction",
    source: "course-1.1-threadlocking/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es",
    brand: "loctite",
    title: "Why Use LOCTITE® Threadlockers",

    no: 2,
    course: "Threadlocking",
    module: "Why Use LOCTITE Threadlockers",
    source: "course-1.1-threadlocking/module-002-why-use-loctite-threadlockers",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es",
    brand: "loctite",
    title: "How to Apply LOCTITE® Threadlocker",

    no: 3,
    course: "Threadlocking",
    module: "How to Apply LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-003-how-to-apply-loctite-threadlocker",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es",
    brand: "loctite",
    title: "How to Select the Right LOCTITE® Threadlocker",

    no: 4,
    course: "Threadlocking",
    module: "How to Select the Right LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-004-how-to-select-the-right-loctite-threadlocker",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es",
    brand: "loctite",
    title: "Mythbusters",

    no: 5,
    course: "Threadlocking",
    module: "Mythbusters",
    source: "course-1.1-threadlocking/module-005-mythbusters",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es",
    brand: "loctite",
    title: "Welcome to Reality",

    no: 6,
    course: "Threadlocking",
    module: "Welcome to Reality",
    source: "course-1.1-threadlocking/module-006-welcome-to-reality",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es",
    brand: "loctite",
    title: "Do the Math",

    no: 7,
    course: "Threadlocking",
    module: "Do the Math",
    source: "course-1.1-threadlocking/module-007-do-the-math",

    navigation: true,
    sidebar: false,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1.1 Threadlocking ES-MX
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es-MX",
    brand: "loctite",
    title: "Basic Introduction to Threadlocking",

    no: 1,
    course: "Threadlocking",
    module: "Basic Introduction",
    source: "course-1.1-threadlocking/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es-MX",
    brand: "loctite",
    title: "Why Use LOCTITE® Threadlockers",

    no: 2,
    course: "Threadlocking",
    module: "Why Use LOCTITE Threadlockers",
    source: "course-1.1-threadlocking/module-002-why-use-loctite-threadlockers",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es-MX",
    brand: "loctite",
    title: "How to Apply LOCTITE® Threadlocker",

    no: 3,
    course: "Threadlocking",
    module: "How to Apply LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-003-how-to-apply-loctite-threadlocker",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es-MX",
    brand: "loctite",
    title: "How to Select the Right LOCTITE® Threadlocker",

    no: 4,
    course: "Threadlocking",
    module: "How to Select the Right LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-004-how-to-select-the-right-loctite-threadlocker",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es-MX",
    brand: "loctite",
    title: "Mythbusters",

    no: 5,
    course: "Threadlocking",
    module: "Mythbusters",
    source: "course-1.1-threadlocking/module-005-mythbusters",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es-MX",
    brand: "loctite",
    title: "Welcome to Reality",

    no: 6,
    course: "Threadlocking",
    module: "Welcome to Reality",
    source: "course-1.1-threadlocking/module-006-welcome-to-reality",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es-MX",
    brand: "loctite",
    title: "Do the Math",

    no: 7,
    course: "Threadlocking",
    module: "Do the Math",
    source: "course-1.1-threadlocking/module-007-do-the-math",

    navigation: true,
    sidebar: false,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1.1 Threadlocking TR
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "tr",
    brand: "loctite",
    title: "Basic Introduction to Threadlocking",

    no: 1,
    course: "Threadlocking",
    module: "Basic Introduction",
    source: "course-1.1-threadlocking/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "tr",
    brand: "loctite",
    title: "Why Use LOCTITE® Threadlockers",

    no: 2,
    course: "Threadlocking",
    module: "Why Use LOCTITE Threadlockers",
    source: "course-1.1-threadlocking/module-002-why-use-loctite-threadlockers",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "tr",
    brand: "loctite",
    title: "How to Apply LOCTITE® Threadlocker",

    no: 3,
    course: "Threadlocking",
    module: "How to Apply LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-003-how-to-apply-loctite-threadlocker",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "tr",
    brand: "loctite",
    title: "How to Select the Right LOCTITE® Threadlocker",

    no: 4,
    course: "Threadlocking",
    module: "How to Select the Right LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-004-how-to-select-the-right-loctite-threadlocker",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "tr",
    brand: "loctite",
    title: "Mythbusters",

    no: 5,
    course: "Threadlocking",
    module: "Mythbusters",
    source: "course-1.1-threadlocking/module-005-mythbusters",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "tr",
    brand: "loctite",
    title: "Welcome to Reality",

    no: 6,
    course: "Threadlocking",
    module: "Welcome to Reality",
    source: "course-1.1-threadlocking/module-006-welcome-to-reality",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "tr",
    brand: "loctite",
    title: "Do the Math",

    no: 7,
    course: "Threadlocking",
    module: "Do the Math",
    source: "course-1.1-threadlocking/module-007-do-the-math",

    navigation: true,
    sidebar: false,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1.1 Threadlocking FR
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "fr",
    brand: "loctite",
    title: "Basic Introduction to Threadlocking",

    no: 1,
    course: "Threadlocking",
    module: "Basic Introduction",
    source: "course-1.1-threadlocking/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "fr",
    brand: "loctite",
    title: "Why Use LOCTITE® Threadlockers",

    no: 2,
    course: "Threadlocking",
    module: "Why Use LOCTITE Threadlockers",
    source: "course-1.1-threadlocking/module-002-why-use-loctite-threadlockers",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "fr",
    brand: "loctite",
    title: "How to Apply LOCTITE® Threadlocker",

    no: 3,
    course: "Threadlocking",
    module: "How to Apply LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-003-how-to-apply-loctite-threadlocker",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "fr",
    brand: "loctite",
    title: "How to Select the Right LOCTITE® Threadlocker",

    no: 4,
    course: "Threadlocking",
    module: "How to Select the Right LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-004-how-to-select-the-right-loctite-threadlocker",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "fr",
    brand: "loctite",
    title: "Mythbusters",

    no: 5,
    course: "Threadlocking",
    module: "Mythbusters",
    source: "course-1.1-threadlocking/module-005-mythbusters",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "fr",
    brand: "loctite",
    title: "Welcome to Reality",

    no: 6,
    course: "Threadlocking",
    module: "Welcome to Reality",
    source: "course-1.1-threadlocking/module-006-welcome-to-reality",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "fr",
    brand: "loctite",
    title: "Do the Math",

    no: 7,
    course: "Threadlocking",
    module: "Do the Math",
    source: "course-1.1-threadlocking/module-007-do-the-math",

    navigation: true,
    sidebar: false,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1.1 Threadlocking PT
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt",
    brand: "loctite",
    title: "Basic Introduction to Threadlocking",

    no: 1,
    course: "Threadlocking",
    module: "Basic Introduction",
    source: "course-1.1-threadlocking/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt",
    brand: "loctite",
    title: "Why Use LOCTITE® Threadlockers",

    no: 2,
    course: "Threadlocking",
    module: "Why Use LOCTITE Threadlockers",
    source: "course-1.1-threadlocking/module-002-why-use-loctite-threadlockers",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt",
    brand: "loctite",
    title: "How to Apply LOCTITE® Threadlocker",

    no: 3,
    course: "Threadlocking",
    module: "How to Apply LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-003-how-to-apply-loctite-threadlocker",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt",
    brand: "loctite",
    title: "How to Select the Right LOCTITE® Threadlocker",

    no: 4,
    course: "Threadlocking",
    module: "How to Select the Right LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-004-how-to-select-the-right-loctite-threadlocker",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt",
    brand: "loctite",
    title: "Mythbusters",

    no: 5,
    course: "Threadlocking",
    module: "Mythbusters",
    source: "course-1.1-threadlocking/module-005-mythbusters",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt",
    brand: "loctite",
    title: "Welcome to Reality",

    no: 6,
    course: "Threadlocking",
    module: "Welcome to Reality",
    source: "course-1.1-threadlocking/module-006-welcome-to-reality",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt",
    brand: "loctite",
    title: "Do the Math",

    no: 7,
    course: "Threadlocking",
    module: "Do the Math",
    source: "course-1.1-threadlocking/module-007-do-the-math",

    navigation: true,
    sidebar: false,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1.1 Threadlocking PT-BR
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt-BR",
    brand: "loctite",
    title: "Basic Introduction to Threadlocking",

    no: 1,
    course: "Threadlocking",
    module: "Basic Introduction",
    source: "course-1.1-threadlocking/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt-BR",
    brand: "loctite",
    title: "Why Use LOCTITE® Threadlockers",

    no: 2,
    course: "Threadlocking",
    module: "Why Use LOCTITE Threadlockers",
    source: "course-1.1-threadlocking/module-002-why-use-loctite-threadlockers",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt-BR",
    brand: "loctite",
    title: "How to Apply LOCTITE® Threadlocker",

    no: 3,
    course: "Threadlocking",
    module: "How to Apply LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-003-how-to-apply-loctite-threadlocker",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt-BR",
    brand: "loctite",
    title: "How to Select the Right LOCTITE® Threadlocker",

    no: 4,
    course: "Threadlocking",
    module: "How to Select the Right LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-004-how-to-select-the-right-loctite-threadlocker",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt-BR",
    brand: "loctite",
    title: "Mythbusters",

    no: 5,
    course: "Threadlocking",
    module: "Mythbusters",
    source: "course-1.1-threadlocking/module-005-mythbusters",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt-BR",
    brand: "loctite",
    title: "Welcome to Reality",

    no: 6,
    course: "Threadlocking",
    module: "Welcome to Reality",
    source: "course-1.1-threadlocking/module-006-welcome-to-reality",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt-BR",
    brand: "loctite",
    title: "Do the Math",

    no: 7,
    course: "Threadlocking",
    module: "Do the Math",
    source: "course-1.1-threadlocking/module-007-do-the-math",

    navigation: true,
    sidebar: false,
  },

  /*<===
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1.1 Threadlocking RU
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "ru",
    brand: "loctite",
    title: "Basic Introduction to Threadlocking",

    no: 1,
    course: "Threadlocking",
    module: "Basic Introduction",
    source: "course-1.1-threadlocking/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "ru",
    brand: "loctite",
    title: "Why Use LOCTITE® Threadlockers",

    no: 2,
    course: "Threadlocking",
    module: "Why Use LOCTITE Threadlockers",
    source: "course-1.1-threadlocking/module-002-why-use-loctite-threadlockers",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "ru",
    brand: "loctite",
    title: "How to Apply LOCTITE® Threadlocker",

    no: 3,
    course: "Threadlocking",
    module: "How to Apply LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-003-how-to-apply-loctite-threadlocker",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "ru",
    brand: "loctite",
    title: "How to Select the Right LOCTITE® Threadlocker",

    no: 4,
    course: "Threadlocking",
    module: "How to Select the Right LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-004-how-to-select-the-right-loctite-threadlocker",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "ru",
    brand: "loctite",
    title: "Mythbusters",

    no: 5,
    course: "Threadlocking",
    module: "Mythbusters",
    source: "course-1.1-threadlocking/module-005-mythbusters",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "ru",
    brand: "loctite",
    title: "Welcome to Reality",

    no: 6,
    course: "Threadlocking",
    module: "Welcome to Reality",
    source: "course-1.1-threadlocking/module-006-welcome-to-reality",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "ru",
    brand: "loctite",
    title: "Do the Math",

    no: 7,
    course: "Threadlocking",
    module: "Do the Math",
    source: "course-1.1-threadlocking/module-007-do-the-math",

    navigation: true,
    sidebar: false,
  },

<=== */

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1.1 Threadlocking TH
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "th",
    brand: "loctite",
    title: "Basic Introduction to Threadlocking",

    no: 1,
    course: "Threadlocking",
    module: "Basic Introduction",
    source: "course-1.1-threadlocking/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "th",
    brand: "loctite",
    title: "Why Use LOCTITE® Threadlockers",

    no: 2,
    course: "Threadlocking",
    module: "Why Use LOCTITE Threadlockers",
    source: "course-1.1-threadlocking/module-002-why-use-loctite-threadlockers",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "th",
    brand: "loctite",
    title: "How to Apply LOCTITE® Threadlocker",

    no: 3,
    course: "Threadlocking",
    module: "How to Apply LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-003-how-to-apply-loctite-threadlocker",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "th",
    brand: "loctite",
    title: "How to Select the Right LOCTITE® Threadlocker",

    no: 4,
    course: "Threadlocking",
    module: "How to Select the Right LOCTITE Threadlocker",
    source:
      "course-1.1-threadlocking/module-004-how-to-select-the-right-loctite-threadlocker",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "th",
    brand: "loctite",
    title: "Mythbusters",

    no: 5,
    course: "Threadlocking",
    module: "Mythbusters",
    source: "course-1.1-threadlocking/module-005-mythbusters",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "th",
    brand: "loctite",
    title: "Welcome to Reality",

    no: 6,
    course: "Threadlocking",
    module: "Welcome to Reality",
    source: "course-1.1-threadlocking/module-006-welcome-to-reality",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "th",
    brand: "loctite",
    title: "Do the Math",

    no: 7,
    course: "Threadlocking",
    module: "Do the Math",
    source: "course-1.1-threadlocking/module-007-do-the-math",

    navigation: true,
    sidebar: false,
  },

  //  ==========================================================
  //
  //				2.1 Windscreen Replacement
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2.1 Windscreen Replacement EN
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "teroson",
    title: "Basic Introduction to Windscreen Replacement",

    no: 1,
    course: "Windscreen Replacement",
    module: "Basic Introduction",
    source: "course-2.1-windscreen-replacement/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "teroson",
    title: "Polyurethane Adhesives 101",

    no: 2,
    course: "Windscreen Replacement",
    module: "Polyurethane adhesives 101",
    source:
      "course-2.1-windscreen-replacement/module-002-polyurethane-adhesives-101",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "teroson",
    title: "Common Application Pitfalls",

    no: 3,
    course: "Windscreen Replacement",
    module: "Common Application Pitfalls",
    source:
      "course-2.1-windscreen-replacement/module-003-common-application-pitfalls",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "teroson",
    title: "How to Repair a Windscreen",

    no: 4,
    course: "Windscreen Replacement",
    module: "How to Repair a Windscreen",
    source:
      "course-2.1-windscreen-replacement/module-004-how-to-replace-a-windscreen",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "teroson",
    title: "Select the Right Adhesive",

    no: 5,
    course: "Windscreen Replacement",
    module: "Select the Right Adhesive",
    source:
      "course-2.1-windscreen-replacement/module-005-select-the-right-adhesive",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "teroson",
    title: "DGX Myths Busted",

    no: 6,
    course: "Windscreen Replacement",
    module: "Mythbusters",
    source: "course-2.1-windscreen-replacement/module-006-mythbusters",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "teroson",
    title: "Recycling Made Easy",

    no: 7,
    course: "Windscreen Replacement",
    module: "Recycling Made Easy",
    source: "course-2.1-windscreen-replacement/module-007-recycling-made-easy",

    navigation: true,
    sidebar: true,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2.1 Windscreen Replacement DE
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "de",
    brand: "teroson",
    title: "Basic Introduction to Windscreen Replacement",

    no: 1,
    course: "Windscreen Replacement",
    module: "Basic Introduction",
    source: "course-2.1-windscreen-replacement/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "de",
    brand: "teroson",
    title: "Polyurethane Adhesives 101",

    no: 2,
    course: "Windscreen Replacement",
    module: "Polyurethane Adhesives 101",
    source:
      "course-2.1-windscreen-replacement/module-002-polyurethane-adhesives-101",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "de",
    brand: "teroson",
    title: "Common Application Pitfalls",

    no: 3,
    course: "Windscreen Replacement",
    module: "Common Application Pitfalls",
    source:
      "course-2.1-windscreen-replacement/module-003-common-application-pitfalls",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "de",
    brand: "teroson",
    title: "How to Replace a Windscreen",

    no: 4,
    course: "Windscreen Replacement",
    module: "How to Replace a Windscreen",
    source:
      "course-2.1-windscreen-replacement/module-004-how-to-replace-a-windscreen",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "de",
    brand: "teroson",
    title: "Select the Right Adhesive",

    no: 5,
    course: "Windscreen Replacement",
    module: "Select the Right Adhesive",
    source:
      "course-2.1-windscreen-replacement/module-005-select-the-right-adhesive",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "de",
    brand: "teroson",
    title: "Mythbusters",

    no: 6,
    course: "Windscreen Replacement",
    module: "Mythbusters",
    source: "course-2.1-windscreen-replacement/module-006-mythbusters",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "de",
    brand: "teroson",
    title: "Recycling Made Easy",

    no: 7,
    course: "Windscreen Replacement",
    module: "Recycling Made Easy",
    source: "course-2.1-windscreen-replacement/module-007-recycling-made-easy",

    navigation: true,
    sidebar: true,
  },

  /*<===
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2.1 Windscreen Replacement DE-AT
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "de-AT",
    brand: "teroson",
    title: "Basic Introduction to Windscreen Replacement",

    no: 1,
    course: "Windscreen Replacement",
    module: "Basic Introduction",
    source: "course-2.1-windscreen-replacement/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "de-AT",
    brand: "teroson",
    title: "Polyurethane Adhesives 101",

    no: 2,
    course: "Windscreen Replacement",
    module: "Polyurethane Adhesives 101",
    source:
      "course-2.1-windscreen-replacement/module-002-polyurethane-adhesives-101",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "de-AT",
    brand: "teroson",
    title: "Common Application Pitfalls",

    no: 3,
    course: "Windscreen Replacement",
    module: "Common Application Pitfalls",
    source:
      "course-2.1-windscreen-replacement/module-003-common-application-pitfalls",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "de-AT",
    brand: "teroson",
    title: "How to Replace a Windscreen",

    no: 4,
    course: "Windscreen Replacement",
    module: "How to Replace a Windscreen",
    source:
      "course-2.1-windscreen-replacement/module-004-how-to-replace-a-windscreen",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "de-AT",
    brand: "teroson",
    title: "Select the Right Adhesive",

    no: 5,
    course: "Windscreen Replacement",
    module: "Select the Right Adhesive",
    source:
      "course-2.1-windscreen-replacement/module-005-select-the-right-adhesive",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "de-AT",
    brand: "teroson",
    title: "Mythbusters",

    no: 6,
    course: "Windscreen Replacement",
    module: "Mythbusters",
    source: "course-2.1-windscreen-replacement/module-006-mythbusters",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "de-AT",
    brand: "teroson",
    title: "Recycling Made Easy",

    no: 7,
    course: "Windscreen Replacement",
    module: "Recycling Made Easy",
    source: "course-2.1-windscreen-replacement/module-007-recycling-made-easy",

    navigation: true,
    sidebar: true,
  },
<===*/

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2.1 Windscreen Replacement NL
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "nl",
    brand: "teroson",
    title: "Basic Introduction to Windscreen Replacement",

    no: 1,
    course: "Windscreen Replacement",
    module: "Basic Introduction",
    source: "course-2.1-windscreen-replacement/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "nl",
    brand: "teroson",
    title: "Polyurethane Adhesives 101",

    no: 2,
    course: "Windscreen Replacement",
    module: "Polyurethane Adhesives 101",
    source:
      "course-2.1-windscreen-replacement/module-002-polyurethane-adhesives-101",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "nl",
    brand: "teroson",
    title: "Common Application Pitfalls",

    no: 3,
    course: "Windscreen Replacement",
    module: "Common Application Pitfalls",
    source:
      "course-2.1-windscreen-replacement/module-003-common-application-pitfalls",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "nl",
    brand: "teroson",
    title: "How to Replace a Windscreen",

    no: 4,
    course: "Windscreen Replacement",
    module: "How to Replace a Windscreen",
    source:
      "course-2.1-windscreen-replacement/module-004-how-to-replace-a-windscreen",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "nl",
    brand: "teroson",
    title: "Select the Right Adhesive",

    no: 5,
    course: "Windscreen Replacement",
    module: "Select the Right Adhesive",
    source:
      "course-2.1-windscreen-replacement/module-005-select-the-right-adhesive",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "nl",
    brand: "teroson",
    title: "Mythbusters",

    no: 6,
    course: "Windscreen Replacement",
    module: "Mythbusters",
    source: "course-2.1-windscreen-replacement/module-006-mythbusters",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "nl",
    brand: "teroson",
    title: "Recycling Made Easy",

    no: 7,
    course: "Windscreen Replacement",
    module: "Recycling Made Easy",
    source: "course-2.1-windscreen-replacement/module-007-recycling-made-easy",

    navigation: true,
    sidebar: true,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2.1 Windscreen Replacement PL
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pl",
    brand: "teroson",
    title: "Basic Introduction to Windscreen Replacement",

    no: 1,
    course: "Windscreen Replacement",
    module: "Basic Introduction",
    source: "course-2.1-windscreen-replacement/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pl",
    brand: "teroson",
    title: "Polyurethane Adhesives 101",

    no: 2,
    course: "Windscreen Replacement",
    module: "Polyurethane Adhesives 101",
    source:
      "course-2.1-windscreen-replacement/module-002-polyurethane-adhesives-101",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pl",
    brand: "teroson",
    title: "Common Application Pitfalls",

    no: 3,
    course: "Windscreen Replacement",
    module: "Common Application Pitfalls",
    source:
      "course-2.1-windscreen-replacement/module-003-common-application-pitfalls",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pl",
    brand: "teroson",
    title: "How to Replace a Windscreen",

    no: 4,
    course: "Windscreen Replacement",
    module: "How to Replace a Windscreen",
    source:
      "course-2.1-windscreen-replacement/module-004-how-to-replace-a-windscreen",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pl",
    brand: "teroson",
    title: "Select the Right Adhesive",

    no: 5,
    course: "Windscreen Replacement",
    module: "Select the Right Adhesive",
    source:
      "course-2.1-windscreen-replacement/module-005-select-the-right-adhesive",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pl",
    brand: "teroson",
    title: "Mythbusters",

    no: 6,
    course: "Windscreen Replacement",
    module: "Mythbusters",
    source: "course-2.1-windscreen-replacement/module-006-mythbusters",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pl",
    brand: "teroson",
    title: "Recycling Made Easy",

    no: 7,
    course: "Windscreen Replacement",
    module: "Recycling Made Easy",
    source: "course-2.1-windscreen-replacement/module-007-recycling-made-easy",

    navigation: true,
    sidebar: true,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2.1 Windscreen Replacement IT
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "it",
    brand: "teroson",
    title: "Basic Introduction to Windscreen Replacement",

    no: 1,
    course: "Windscreen Replacement",
    module: "Basic Introduction",
    source: "course-2.1-windscreen-replacement/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "it",
    brand: "teroson",
    title: "Polyurethane Adhesives 101",

    no: 2,
    course: "Windscreen Replacement",
    module: "Polyurethane Adhesives 101",
    source:
      "course-2.1-windscreen-replacement/module-002-polyurethane-adhesives-101",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "it",
    brand: "teroson",
    title: "Common Application Pitfalls",

    no: 3,
    course: "Windscreen Replacement",
    module: "Common Application Pitfalls",
    source:
      "course-2.1-windscreen-replacement/module-003-common-application-pitfalls",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "it",
    brand: "teroson",
    title: "How to Replace a Windscreen",

    no: 4,
    course: "Windscreen Replacement",
    module: "How to Replace a Windscreen",
    source:
      "course-2.1-windscreen-replacement/module-004-how-to-replace-a-windscreen",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "it",
    brand: "teroson",
    title: "Select the Right Adhesive",

    no: 5,
    course: "Windscreen Replacement",
    module: "Select the Right Adhesive",
    source:
      "course-2.1-windscreen-replacement/module-005-select-the-right-adhesive",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "it",
    brand: "teroson",
    title: "Mythbusters",

    no: 6,
    course: "Windscreen Replacement",
    module: "Mythbusters",
    source: "course-2.1-windscreen-replacement/module-006-mythbusters",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "it",
    brand: "teroson",
    title: "Recycling Made Easy",

    no: 7,
    course: "Windscreen Replacement",
    module: "Recycling Made Easy",
    source: "course-2.1-windscreen-replacement/module-007-recycling-made-easy",

    navigation: true,
    sidebar: true,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2.1 Windscreen Replacement ES
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "es",
    brand: "teroson",
    title: "Basic Introduction to Windscreen Replacement",

    no: 1,
    course: "Windscreen Replacement",
    module: "Basic Introduction",
    source: "course-2.1-windscreen-replacement/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "es",
    brand: "teroson",
    title: "Polyurethane Adhesives 101",

    no: 2,
    course: "Windscreen Replacement",
    module: "Polyurethane Adhesives 101",
    source:
      "course-2.1-windscreen-replacement/module-002-polyurethane-adhesives-101",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "es",
    brand: "teroson",
    title: "Common Application Pitfalls",

    no: 3,
    course: "Windscreen Replacement",
    module: "Common Application Pitfalls",
    source:
      "course-2.1-windscreen-replacement/module-003-common-application-pitfalls",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "es",
    brand: "teroson",
    title: "How to Replace a Windscreen",

    no: 4,
    course: "Windscreen Replacement",
    module: "How to Replace a Windscreen",
    source:
      "course-2.1-windscreen-replacement/module-004-how-to-replace-a-windscreen",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "es",
    brand: "teroson",
    title: "Select the Right Adhesive",

    no: 5,
    course: "Windscreen Replacement",
    module: "Select the Right Adhesive",
    source:
      "course-2.1-windscreen-replacement/module-005-select-the-right-adhesive",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "es",
    brand: "teroson",
    title: "Mythbusters",

    no: 6,
    course: "Windscreen Replacement",
    module: "Mythbusters",
    source: "course-2.1-windscreen-replacement/module-006-mythbusters",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "es",
    brand: "teroson",
    title: "Recycling Made Easy",

    no: 7,
    course: "Windscreen Replacement",
    module: "Recycling Made Easy",
    source: "course-2.1-windscreen-replacement/module-007-recycling-made-easy",

    navigation: true,
    sidebar: true,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2.1 Windscreen Replacement ES-MX
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "es-MX",
    brand: "teroson",
    title: "Basic Introduction to Windscreen Replacement",

    no: 1,
    course: "Windscreen Replacement",
    module: "Basic Introduction",
    source: "course-2.1-windscreen-replacement/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "es-MX",
    brand: "teroson",
    title: "Polyurethane Adhesives 101",

    no: 2,
    course: "Windscreen Replacement",
    module: "Polyurethane Adhesives 101",
    source:
      "course-2.1-windscreen-replacement/module-002-polyurethane-adhesives-101",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "es-MX",
    brand: "teroson",
    title: "Common Application Pitfalls",

    no: 3,
    course: "Windscreen Replacement",
    module: "Common Application Pitfalls",
    source:
      "course-2.1-windscreen-replacement/module-003-common-application-pitfalls",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "es-MX",
    brand: "teroson",
    title: "How to Replace a Windscreen",

    no: 4,
    course: "Windscreen Replacement",
    module: "How to Replace a Windscreen",
    source:
      "course-2.1-windscreen-replacement/module-004-how-to-replace-a-windscreen",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "es-MX",
    brand: "teroson",
    title: "Select the Right Adhesive",

    no: 5,
    course: "Windscreen Replacement",
    module: "Select the Right Adhesive",
    source:
      "course-2.1-windscreen-replacement/module-005-select-the-right-adhesive",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "es-MX",
    brand: "teroson",
    title: "Mythbusters",

    no: 6,
    course: "Windscreen Replacement",
    module: "Mythbusters",
    source: "course-2.1-windscreen-replacement/module-006-mythbusters",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "es-MX",
    brand: "teroson",
    title: "Recycling Made Easy",

    no: 7,
    course: "Windscreen Replacement",
    module: "Recycling Made Easy",
    source: "course-2.1-windscreen-replacement/module-007-recycling-made-easy",

    navigation: true,
    sidebar: false,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2.1 Windscreen Replacement TR
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "tr",
    brand: "teroson",
    title: "Basic Introduction to Windscreen Replacement",

    no: 1,
    course: "Windscreen Replacement",
    module: "Basic Introduction",
    source: "course-2.1-windscreen-replacement/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "tr",
    brand: "teroson",
    title: "Polyurethane Adhesives 101",

    no: 2,
    course: "Windscreen Replacement",
    module: "Polyurethane Adhesives 101",
    source:
      "course-2.1-windscreen-replacement/module-002-polyurethane-adhesives-101",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "tr",
    brand: "teroson",
    title: "Common Application Pitfalls",

    no: 3,
    course: "Windscreen Replacement",
    module: "Common Application Pitfalls",
    source:
      "course-2.1-windscreen-replacement/module-003-common-application-pitfalls",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "tr",
    brand: "teroson",
    title: "How to Replace a Windscreen",

    no: 4,
    course: "Windscreen Replacement",
    module: "How to Replace a Windscreen",
    source:
      "course-2.1-windscreen-replacement/module-004-how-to-replace-a-windscreen",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "tr",
    brand: "teroson",
    title: "Select the Right Adhesive",

    no: 5,
    course: "Windscreen Replacement",
    module: "Select the Right Adhesive",
    source:
      "course-2.1-windscreen-replacement/module-005-select-the-right-adhesive",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "tr",
    brand: "teroson",
    title: "Mythbusters",

    no: 6,
    course: "Windscreen Replacement",
    module: "Mythbusters",
    source: "course-2.1-windscreen-replacement/module-006-mythbusters",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "tr",
    brand: "teroson",
    title: "Recycling Made Easy",

    no: 7,
    course: "Windscreen Replacement",
    module: "Recycling Made Easy",
    source: "course-2.1-windscreen-replacement/module-007-recycling-made-easy",

    navigation: true,
    sidebar: true,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2.1 Windscreen Replacement FR
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "fr",
    brand: "teroson",
    title: "Basic Introduction to Windscreen Replacement",

    no: 1,
    course: "Windscreen Replacement",
    module: "Basic Introduction",
    source: "course-2.1-windscreen-replacement/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "fr",
    brand: "teroson",
    title: "Polyurethane Adhesives 101",

    no: 2,
    course: "Windscreen Replacement",
    module: "Polyurethane Adhesives 101",
    source:
      "course-2.1-windscreen-replacement/module-002-polyurethane-adhesives-101",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "fr",
    brand: "teroson",
    title: "Common Application Pitfalls",

    no: 3,
    course: "Windscreen Replacement",
    module: "Common Application Pitfalls",
    source:
      "course-2.1-windscreen-replacement/module-003-common-application-pitfalls",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "fr",
    brand: "teroson",
    title: "How to Replace a Windscreen",

    no: 4,
    course: "Windscreen Replacement",
    module: "How to Replace a Windscreen",
    source:
      "course-2.1-windscreen-replacement/module-004-how-to-replace-a-windscreen",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "fr",
    brand: "teroson",
    title: "Select the Right Adhesive",

    no: 5,
    course: "Windscreen Replacement",
    module: "Select the Right Adhesive",
    source:
      "course-2.1-windscreen-replacement/module-005-select-the-right-adhesive",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "fr",
    brand: "teroson",
    title: "Mythbusters",

    no: 6,
    course: "Windscreen Replacement",
    module: "Mythbusters",
    source: "course-2.1-windscreen-replacement/module-006-mythbusters",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "fr",
    brand: "teroson",
    title: "Recycling Made Easy",

    no: 7,
    course: "Windscreen Replacement",
    module: "Recycling Made Easy",
    source: "course-2.1-windscreen-replacement/module-007-recycling-made-easy",

    navigation: true,
    sidebar: true,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2.1 Windscreen Replacement PT
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pt",
    brand: "teroson",
    title: "Basic Introduction to Windscreen Replacement",

    no: 1,
    course: "Windscreen Replacement",
    module: "Basic Introduction",
    source: "course-2.1-windscreen-replacement/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pt",
    brand: "teroson",
    title: "Polyurethane Adhesives 101",

    no: 2,
    course: "Windscreen Replacement",
    module: "Polyurethane Adhesives 101",
    source:
      "course-2.1-windscreen-replacement/module-002-polyurethane-adhesives-101",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pt",
    brand: "teroson",
    title: "Common Application Pitfalls",

    no: 3,
    course: "Windscreen Replacement",
    module: "Common Application Pitfalls",
    source:
      "course-2.1-windscreen-replacement/module-003-common-application-pitfalls",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pt",
    brand: "teroson",
    title: "How to Replace a Windscreen",

    no: 4,
    course: "Windscreen Replacement",
    module: "How to Replace a Windscreen",
    source:
      "course-2.1-windscreen-replacement/module-004-how-to-replace-a-windscreen",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pt",
    brand: "teroson",
    title: "Select the Right Adhesive",

    no: 5,
    course: "Windscreen Replacement",
    module: "Select the Right Adhesive",
    source:
      "course-2.1-windscreen-replacement/module-005-select-the-right-adhesive",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pt",
    brand: "teroson",
    title: "Mythbusters",

    no: 6,
    course: "Windscreen Replacement",
    module: "Mythbusters",
    source: "course-2.1-windscreen-replacement/module-006-mythbusters",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pt",
    brand: "teroson",
    title: "Recycling Made Easy",

    no: 7,
    course: "Windscreen Replacement",
    module: "Recycling Made Easy",
    source: "course-2.1-windscreen-replacement/module-007-recycling-made-easy",

    navigation: true,
    sidebar: false,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2.1 Windscreen Replacement PT-BR
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pt-BR",
    brand: "teroson",
    title: "Basic Introduction to Windscreen Replacement",

    no: 1,
    course: "Windscreen Replacement",
    module: "Basic Introduction",
    source: "course-2.1-windscreen-replacement/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pt-BR",
    brand: "teroson",
    title: "Polyurethane Adhesives 101",

    no: 2,
    course: "Windscreen Replacement",
    module: "Polyurethane Adhesives 101",
    source:
      "course-2.1-windscreen-replacement/module-002-polyurethane-adhesives-101",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pt-BR",
    brand: "teroson",
    title: "Common Application Pitfalls",

    no: 3,
    course: "Windscreen Replacement",
    module: "Common Application Pitfalls",
    source:
      "course-2.1-windscreen-replacement/module-003-common-application-pitfalls",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pt-BR",
    brand: "teroson",
    title: "How to Replace a Windscreen",

    no: 4,
    course: "Windscreen Replacement",
    module: "How to Replace a Windscreen",
    source:
      "course-2.1-windscreen-replacement/module-004-how-to-replace-a-windscreen",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pt-BR",
    brand: "teroson",
    title: "Select the Right Adhesive",

    no: 5,
    course: "Windscreen Replacement",
    module: "Select the Right Adhesive",
    source:
      "course-2.1-windscreen-replacement/module-005-select-the-right-adhesive",

    navigation: true,
    sidebar: false,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pt-BR",
    brand: "teroson",
    title: "Mythbusters",

    no: 6,
    course: "Windscreen Replacement",
    module: "Mythbusters",
    source: "course-2.1-windscreen-replacement/module-006-mythbusters",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pt-BR",
    brand: "teroson",
    title: "Recycling Made Easy",

    no: 7,
    course: "Windscreen Replacement",
    module: "Recycling Made Easy",
    source: "course-2.1-windscreen-replacement/module-007-recycling-made-easy",

    navigation: true,
    sidebar: false,
  },

  /*<===
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2.1 Windscreen Replacement RU
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "ru",
    brand: "teroson",
    title: "Basic Introduction to Windscreen Replacement",

    no: 1,
    course: "Windscreen Replacement",
    module: "Basic Introduction",
    source: "course-2.1-windscreen-replacement/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "ru",
    brand: "teroson",
    title: "Polyurethane Adhesives 101",

    no: 2,
    course: "Windscreen Replacement",
    module: "Polyurethane Adhesives 101",
    source:
      "course-2.1-windscreen-replacement/module-002-polyurethane-adhesives-101",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "ru",
    brand: "teroson",
    title: "Common Application Pitfalls",

    no: 3,
    course: "Windscreen Replacement",
    module: "Common Application Pitfalls",
    source:
      "course-2.1-windscreen-replacement/module-003-common-application-pitfalls",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "ru",
    brand: "teroson",
    title: "How to Replace a Windscreen",

    no: 4,
    course: "Windscreen Replacement",
    module: "How to Replace a Windscreen",
    source:
      "course-2.1-windscreen-replacement/module-004-how-to-replace-a-windscreen",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "ru",
    brand: "teroson",
    title: "Select the Right Adhesive",

    no: 5,
    course: "Windscreen Replacement",
    module: "Select the Right Adhesive",
    source:
      "course-2.1-windscreen-replacement/module-005-select-the-right-adhesive",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "ru",
    brand: "teroson",
    title: "Mythbusters",

    no: 6,
    course: "Windscreen Replacement",
    module: "Mythbusters",
    source: "course-2.1-windscreen-replacement/module-006-mythbusters",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "ru",
    brand: "teroson",
    title: "Recycling Made Easy",

    no: 7,
    course: "Windscreen Replacement",
    module: "Recycling Made Easy",
    source: "course-2.1-windscreen-replacement/module-007-recycling-made-easy",

    navigation: true,
    sidebar: false,
  },

<===  */

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2.1 Windscreen Replacement TH
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "th",
    brand: "teroson",
    title: "Basic Introduction to Windscreen Replacement",

    no: 1,
    course: "Windscreen Replacement",
    module: "Basic Introduction",
    source: "course-2.1-windscreen-replacement/module-001-basic-introduction",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "th",
    brand: "teroson",
    title: "Polyurethane Adhesives 101",

    no: 2,
    course: "Windscreen Replacement",
    module: "Polyurethane Adhesives 101",
    source:
      "course-2.1-windscreen-replacement/module-002-polyurethane-adhesives-101",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "th",
    brand: "teroson",
    title: "Common Application Pitfalls",

    no: 3,
    course: "Windscreen Replacement",
    module: "Common Application Pitfalls",
    source:
      "course-2.1-windscreen-replacement/module-003-common-application-pitfalls",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "th",
    brand: "teroson",
    title: "How to Replace a Windscreen",

    no: 4,
    course: "Windscreen Replacement",
    module: "How to Replace a Windscreen",
    source:
      "course-2.1-windscreen-replacement/module-004-how-to-replace-a-windscreen",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "th",
    brand: "teroson",
    title: "Select the Right Adhesive",

    no: 5,
    course: "Windscreen Replacement",
    module: "Select the Right Adhesive",
    source:
      "course-2.1-windscreen-replacement/module-005-select-the-right-adhesive",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "th",
    brand: "teroson",
    title: "Mythbusters",

    no: 6,
    course: "Windscreen Replacement",
    module: "Mythbusters",
    source: "course-2.1-windscreen-replacement/module-006-mythbusters",

    navigation: true,
    sidebar: true,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "th",
    brand: "teroson",
    title: "Recycling Made Easy",

    no: 7,
    course: "Windscreen Replacement",
    module: "Recycling Made Easy",
    source: "course-2.1-windscreen-replacement/module-007-recycling-made-easy",

    navigation: true,
    sidebar: true,
  },

  //  ==========================================================
  //
  //				3.1 Company Overview
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3.1 Company Overview EN
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "The Loctite Story",

    no: 1,
    course: "Company Overview",
    module: "The Loctite Story",
    source: "course-3.1-company-overview/module-001-the-loctite-story",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "LOCTITE a Henkel Business",

    no: 2,
    course: "Company Overview",
    module: "LOCTITE a Henkel Business",
    source: "course-3.1-company-overview/module-002-loctite-a-henkel-business",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Capabilities and Value Propositions",

    no: 3,
    course: "Company Overview",
    module: "Capabilities and Value Propositions",
    source:
      "course-3.1-company-overview/module-003-capabilities-and-value-prop",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ==========================================================
  //
  //				3.2 Product Technology
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3.2 Product Technology EN
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "A Product For Every Need",

    no: 1,
    course: "Product Technology",
    module: "A Product For Every Need",
    source: "course-3.2-product-technology/module-001-a-product-for-every-need",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Cleaning & Preparation",

    no: 2,
    course: "Product Technology",
    module: "Cleaning and Preparation",
    source: "course-3.2-product-technology/module-002-cleaning-and-preparation",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Threadlocking",

    no: 3,
    course: "Product Technology",
    module: "Threadlocking",
    source: "course-3.2-product-technology/module-003-threadlocking",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Threadsealing",

    no: 4,
    course: "Product Technology",
    module: "Threadsealing",
    source: "course-3.2-product-technology/module-004-threadsealing",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Gasketing",

    no: 5,
    course: "Product Technology",
    module: "Gasketing",
    source: "course-3.2-product-technology/module-005-gasketing",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Retaining",

    no: 6,
    course: "Product Technology",
    module: "Retaining",
    source: "course-3.2-product-technology/module-006-retaining",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Bonding",

    no: 7,
    course: "Product Technology",
    module: "Bonding",
    source: "course-3.2-product-technology/module-007-bonding",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  // {
  // 	build: false,
  // 	scorm: '1.2',

  // 	version: '1.0.0',
  // 	lang: 'en',
  // 	brand: 'loctite',
  // 	title: 'A Product For Every Need',

  // 	no: 1,
  // 	course: 'Product Technology',
  // 	module: 'The Loctite Story',
  // 	source: 'course-3.2-product-technology/module-001-a-product-for-every-need',

  // 	navigation: true,
  // 	sidebar: true,
  // },
  // {
  // 	build: false,
  // 	scorm: '1.2',

  // 	version: '1.0.0',
  // 	lang: 'en',
  // 	brand: 'loctite',
  // 	title: 'Threadlocking',

  // 	no: 2,
  // 	course: 'Product Technology',
  // 	module: 'Threadlocking',
  // 	source: 'course-3.2-product-technology/module-002-threadlocking',

  // 	navigation: true,
  // 	sidebar: true,
  // },
  // {
  // 	build: false,
  // 	scorm: '1.2',

  // 	version: '1.0.0',
  // 	lang: 'en',
  // 	brand: 'loctite',
  // 	title: 'Threadsealing',

  // 	no: 3,
  // 	course: 'Product Technology',
  // 	module: 'Threadsealing',
  // 	source: 'course-3.2-product-technology/module-003-threadsealing',

  // 	navigation: true,
  // 	sidebar: true,
  // },
  // {
  // 	build: false,
  // 	scorm: '1.2',

  // 	version: '1.0.0',
  // 	lang: 'en',
  // 	brand: 'loctite',
  // 	title: 'Gasketing',

  // 	no: 4,
  // 	course: 'Product Technology',
  // 	module: 'Gasketing',
  // 	source: 'course-3.2-product-technology/module-004-gasketing',

  // 	navigation: true,
  // 	sidebar: true,
  // },
  // {
  // 	build: false,
  // 	scorm: '1.2',

  // 	version: '1.0.0',
  // 	lang: 'en',
  // 	brand: 'loctite',
  // 	title: 'Retaining',

  // 	no: 5,
  // 	course: 'Product Technology',
  // 	module: 'Retaining',
  // 	source: 'course-3.2-product-technology/module-005-retaining',

  // 	navigation: true,
  // 	sidebar: true,
  // },
  // {
  // 	build: false,
  // 	scorm: '1.2',

  // 	version: '1.0.0',
  // 	lang: 'en',
  // 	brand: 'loctite',
  // 	title: 'Bonding',

  // 	no: 6,
  // 	course: 'Product Technology',
  // 	module: 'Bonding',
  // 	source: 'course-3.2-product-technology/module-006-bonding',

  // 	navigation: true,
  // 	sidebar: true,
  // },

  //  ==========================================================
  //
  //				3.3 Market Knowledge
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3.3 Market Knowledge EN
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Overview",

    no: 1,
    course: "Market Knowledge",
    module: "Our Hunting Grounds",
    source: "course-3.3-market-knowledge/module-001-our-hunting-grounds",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ==========================================================
  //
  //				3.4 Commercial Knowledge
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3.4 Commercial Knowledge EN
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "The LOCTITE Selling Model",

    no: 1,
    course: "Commercial Knowledge",
    module: "The LOCTITE Selling Model",
    source:
      "course-3.4-commercial-knowledge/module-001-the-loctite-selling-model",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "LOCTITE Moments",

    no: 2,
    course: "Commercial Knowledge",
    module: "LOCTITE Moments",
    source: "course-3.4-commercial-knowledge/module-002-loctite-moments",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Land of Objections and Opportunities",

    no: 3,
    course: "Commercial Knowledge",
    module: "Land of Objections and Opportunities",
    source:
      "course-3.4-commercial-knowledge/module-003-land-of-objections-and-opportunities",

    navigation: true,
    sidebar: false,
    css: 2,
  },

  //  ==========================================================
  //
  //				3.5 VAA Capabilities
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3.5 VAA Capabilities EN
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "The HUBB",

    no: 1,
    course: "VAA Capabilities",
    module: "The HUBB",
    source: "course-3.5-vaa-capabilities/module-001-the-hubb",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "All You Need to Know About VAAs",

    no: 2,
    course: "VAA Capabilities",
    module: "All You Need to Know About VAAs",
    source: "course-3.5-vaa-capabilities/module-002-all-you-need-to-know",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Joint Sales Calls",

    no: 3,
    course: "VAA Capabilities",
    module: "Joint Sales Calls",
    source: "course-3.5-vaa-capabilities/module-003-joint-sales-calls",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Line and Plant Surveys",

    no: 4,
    course: "VAA Capabilities",
    module: "Line and Plant Surveys",
    source: "course-3.5-vaa-capabilities/module-004-line-and-plant-surveys",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Maintenence Reliabliity Workshops",

    no: 5,
    course: "VAA Capabilities",
    module: "Maintenence Reliabliity Workshops",
    source:
      "course-3.5-vaa-capabilities/module-005-maintenence-reliabliity-workshops",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "In-Plant Seminars",

    no: 6,
    course: "VAA Capabilities",
    module: "In-Plant Seminars",
    source: "course-3.5-vaa-capabilities/module-006-in-plant-seminars",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ==========================================================
  //
  //				3.6	Digital Tools and Guides
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3.6 Digital Tools and Guides EN
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  // {
  // 	build: false,
  // 	scorm: '1.2',

  // 	version: '1.0.0',
  // 	lang: 'en',
  // 	brand: 'loctite',
  // 	title:  'The Pitcher',

  // 	no: 1,
  // 	course: 'Digital Tools and Guides',
  // 	module: 'The Pitcher',
  // 	source: 'course-3.6-digital-tools-and-guides/module-001-the-pitcher',

  // 	navigation: true,
  // 	sidebar: true,
  // 	css: 2
  // },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Get IN the Game",

    no: 1,
    course: "Digital Tools and Guides",
    module: "Get IN the Game",
    source: "course-3.6-digital-tools-and-guides/module-001-get-in-the-game",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Customer Communication Capabilities",

    no: 2,
    course: "Digital Tools and Guides",
    module: "Customer Communication Capabilities",
    source:
      "course-3.6-digital-tools-and-guides/module-002-customer-communication-capabilities",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ==========================================================
  //
  //				4.1 Bonding
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. Introduction to Bonding
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Introduction to Bonding",

    no: 1,
    course: "Bonding",
    module: "Introduction to Bonding",
    source: "course-4.1-bonding/module-001-intro-to-bonding",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2. The Substrate Challenge
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "The Substrate Challenge",

    no: 2,
    course: "Bonding",
    module: "The Substrate Challenge",
    source: "course-4.1-bonding/module-002-the-substrate-challenge",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  3.
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Benefits of Bonding",

    no: 3,
    course: "Bonding",
    module: "Benefits of Bonding",
    source: "course-4.1-bonding/module-003-benefits-of-bonding",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	4. Non-Adhesive Technologies
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Non-Adhesive Technologies",

    no: 4,
    course: "Bonding",
    module: "Non-Adhesive Technologies",
    source: "course-4.1-bonding/module-004-non-adhesive-technologies",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	5. Prepare to be Amazed
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Prepare to be Amazed",

    no: 5,
    course: "Bonding",
    module: "Prepare to be Amazed",
    source: "course-4.1-bonding/module-005-prepare-to-be-amazed",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	6. How to bond properly
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "How to bond properly",

    no: 6,
    course: "Bonding",
    module: "How to bond properly",
    source: "course-4.1-bonding/module-006-how-to-bond-properly",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  1. Introduction to Bonding - de
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "de",
    brand: "loctite",
    title: "Introduction to Bonding",
    no: 1,
    course: "Bonding",
    module: "Introduction to Bonding",
    source: "course-4.1-bonding/module-001-intro-to-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  2. The Substrate Challenge - de
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "de",
    brand: "loctite",
    title: "The Substrate Challenge",
    no: 2,
    course: "Bonding",
    module: "The Substrate Challenge",
    source: "course-4.1-bonding/module-002-the-substrate-challenge",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  3. Benefits of Bonding - de
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "de",
    brand: "loctite",
    title: "Benefits of Bonding",
    no: 3,
    course: "Bonding",
    module: "Benefits of Bonding",
    source: "course-4.1-bonding/module-003-benefits-of-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  4. Non-Adhesive Technologies - de
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "de",
    brand: "loctite",
    title: "Non-Adhesive Technologies",
    no: 4,
    course: "Bonding",
    module: "Non-Adhesive Technologies",
    source: "course-4.1-bonding/module-004-non-adhesive-technologies",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  5. Prepare to be Amazed - de
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "de",
    brand: "loctite",
    title: "Prepare to be Amazed",
    no: 5,
    course: "Bonding",
    module: "Prepare to be Amazed",
    source: "course-4.1-bonding/module-005-prepare-to-be-amazed",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  6. How to bond properly - de
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "de",
    brand: "loctite",
    title: "How to bond properly",
    no: 6,
    course: "Bonding",
    module: "How to bond properly",
    source: "course-4.1-bonding/module-006-how-to-bond-properly",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  1. Introduction to Bonding - es
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es",
    brand: "loctite",
    title: "Introduction to Bonding",
    no: 1,
    course: "Bonding",
    module: "Introduction to Bonding",
    source: "course-4.1-bonding/module-001-intro-to-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  2. The Substrate Challenge - es
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es",
    brand: "loctite",
    title: "The Substrate Challenge",
    no: 2,
    course: "Bonding",
    module: "The Substrate Challenge",
    source: "course-4.1-bonding/module-002-the-substrate-challenge",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  3. Benefits of Bonding - es
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es",
    brand: "loctite",
    title: "Benefits of Bonding",
    no: 3,
    course: "Bonding",
    module: "Benefits of Bonding",
    source: "course-4.1-bonding/module-003-benefits-of-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  4. Non-Adhesive Technologies - es
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es",
    brand: "loctite",
    title: "Non-Adhesive Technologies",
    no: 4,
    course: "Bonding",
    module: "Non-Adhesive Technologies",
    source: "course-4.1-bonding/module-004-non-adhesive-technologies",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  5. Prepare to be Amazed - es
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es",
    brand: "loctite",
    title: "Prepare to be Amazed",
    no: 5,
    course: "Bonding",
    module: "Prepare to be Amazed",
    source: "course-4.1-bonding/module-005-prepare-to-be-amazed",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  6. How to bond properly - es
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es",
    brand: "loctite",
    title: "How to bond properly",
    no: 6,
    course: "Bonding",
    module: "How to bond properly",
    source: "course-4.1-bonding/module-006-how-to-bond-properly",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  1. Introduction to Bonding - es-MX
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es-MX",
    brand: "loctite",
    title: "Introduction to Bonding",
    no: 1,
    course: "Bonding",
    module: "Introduction to Bonding",
    source: "course-4.1-bonding/module-001-intro-to-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  2. The Substrate Challenge - es-MX
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es-MX",
    brand: "loctite",
    title: "The Substrate Challenge",
    no: 2,
    course: "Bonding",
    module: "The Substrate Challenge",
    source: "course-4.1-bonding/module-002-the-substrate-challenge",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  3. Benefits of Bonding - es-MX
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es-MX",
    brand: "loctite",
    title: "Benefits of Bonding",
    no: 3,
    course: "Bonding",
    module: "Benefits of Bonding",
    source: "course-4.1-bonding/module-003-benefits-of-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  4. Non-Adhesive Technologies - es-MX
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es-MX",
    brand: "loctite",
    title: "Non-Adhesive Technologies",
    no: 4,
    course: "Bonding",
    module: "Non-Adhesive Technologies",
    source: "course-4.1-bonding/module-004-non-adhesive-technologies",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  5. Prepare to be Amazed - es-MX
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es-MX",
    brand: "loctite",
    title: "Prepare to be Amazed",
    no: 5,
    course: "Bonding",
    module: "Prepare to be Amazed",
    source: "course-4.1-bonding/module-005-prepare-to-be-amazed",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  6. How to bond properly - es-MX
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "es-MX",
    brand: "loctite",
    title: "How to bond properly",
    no: 6,
    course: "Bonding",
    module: "How to bond properly",
    source: "course-4.1-bonding/module-006-how-to-bond-properly",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  1. Introduction to Bonding - fr
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "fr",
    brand: "loctite",
    title: "Introduction to Bonding",
    no: 1,
    course: "Bonding",
    module: "Introduction to Bonding",
    source: "course-4.1-bonding/module-001-intro-to-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  2. The Substrate Challenge - fr
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "fr",
    brand: "loctite",
    title: "The Substrate Challenge",
    no: 2,
    course: "Bonding",
    module: "The Substrate Challenge",
    source: "course-4.1-bonding/module-002-the-substrate-challenge",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  3. Benefits of Bonding - fr
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "fr",
    brand: "loctite",
    title: "Benefits of Bonding",
    no: 3,
    course: "Bonding",
    module: "Benefits of Bonding",
    source: "course-4.1-bonding/module-003-benefits-of-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  4. Non-Adhesive Technologies - fr
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "fr",
    brand: "loctite",
    title: "Non-Adhesive Technologies",
    no: 4,
    course: "Bonding",
    module: "Non-Adhesive Technologies",
    source: "course-4.1-bonding/module-004-non-adhesive-technologies",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  5. Prepare to be Amazed - fr
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "fr",
    brand: "loctite",
    title: "Prepare to be Amazed",
    no: 5,
    course: "Bonding",
    module: "Prepare to be Amazed",
    source: "course-4.1-bonding/module-005-prepare-to-be-amazed",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  6. How to bond properly - fr
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "fr",
    brand: "loctite",
    title: "How to bond properly",
    no: 6,
    course: "Bonding",
    module: "How to bond properly",
    source: "course-4.1-bonding/module-006-how-to-bond-properly",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  1. Introduction to Bonding - it
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "it",
    brand: "loctite",
    title: "Introduction to Bonding",
    no: 1,
    course: "Bonding",
    module: "Introduction to Bonding",
    source: "course-4.1-bonding/module-001-intro-to-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  2. The Substrate Challenge - it
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "it",
    brand: "loctite",
    title: "The Substrate Challenge",
    no: 2,
    course: "Bonding",
    module: "The Substrate Challenge",
    source: "course-4.1-bonding/module-002-the-substrate-challenge",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  3. Benefits of Bonding - it
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "it",
    brand: "loctite",
    title: "Benefits of Bonding",
    no: 3,
    course: "Bonding",
    module: "Benefits of Bonding",
    source: "course-4.1-bonding/module-003-benefits-of-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  4. Non-Adhesive Technologies - it
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "it",
    brand: "loctite",
    title: "Non-Adhesive Technologies",
    no: 4,
    course: "Bonding",
    module: "Non-Adhesive Technologies",
    source: "course-4.1-bonding/module-004-non-adhesive-technologies",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  5. Prepare to be Amazed - it
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "it",
    brand: "loctite",
    title: "Prepare to be Amazed",
    no: 5,
    course: "Bonding",
    module: "Prepare to be Amazed",
    source: "course-4.1-bonding/module-005-prepare-to-be-amazed",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  6. How to bond properly - it
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "it",
    brand: "loctite",
    title: "How to bond properly",
    no: 6,
    course: "Bonding",
    module: "How to bond properly",
    source: "course-4.1-bonding/module-006-how-to-bond-properly",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  1. Introduction to Bonding - pl
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pl",
    brand: "loctite",
    title: "Introduction to Bonding",
    no: 1,
    course: "Bonding",
    module: "Introduction to Bonding",
    source: "course-4.1-bonding/module-001-intro-to-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  2. The Substrate Challenge - pl
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pl",
    brand: "loctite",
    title: "The Substrate Challenge",
    no: 2,
    course: "Bonding",
    module: "The Substrate Challenge",
    source: "course-4.1-bonding/module-002-the-substrate-challenge",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  3. Benefits of Bonding - pl
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pl",
    brand: "loctite",
    title: "Benefits of Bonding",
    no: 3,
    course: "Bonding",
    module: "Benefits of Bonding",
    source: "course-4.1-bonding/module-003-benefits-of-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  4. Non-Adhesive Technologies - pl
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pl",
    brand: "loctite",
    title: "Non-Adhesive Technologies",
    no: 4,
    course: "Bonding",
    module: "Non-Adhesive Technologies",
    source: "course-4.1-bonding/module-004-non-adhesive-technologies",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  5. Prepare to be Amazed - pl
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pl",
    brand: "loctite",
    title: "Prepare to be Amazed",
    no: 5,
    course: "Bonding",
    module: "Prepare to be Amazed",
    source: "course-4.1-bonding/module-005-prepare-to-be-amazed",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  6. How to bond properly - pl
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pl",
    brand: "loctite",
    title: "How to bond properly",
    no: 6,
    course: "Bonding",
    module: "How to bond properly",
    source: "course-4.1-bonding/module-006-how-to-bond-properly",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  1. Introduction to Bonding - pt-BR
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt-BR",
    brand: "loctite",
    title: "Introduction to Bonding",
    no: 1,
    course: "Bonding",
    module: "Introduction to Bonding",
    source: "course-4.1-bonding/module-001-intro-to-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  2. The Substrate Challenge - pt-BR
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt-BR",
    brand: "loctite",
    title: "The Substrate Challenge",
    no: 2,
    course: "Bonding",
    module: "The Substrate Challenge",
    source: "course-4.1-bonding/module-002-the-substrate-challenge",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  3. Benefits of Bonding - pt-BR
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt-BR",
    brand: "loctite",
    title: "Benefits of Bonding",
    no: 3,
    course: "Bonding",
    module: "Benefits of Bonding",
    source: "course-4.1-bonding/module-003-benefits-of-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  4. Non-Adhesive Technologies - pt-BR
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt-BR",
    brand: "loctite",
    title: "Non-Adhesive Technologies",
    no: 4,
    course: "Bonding",
    module: "Non-Adhesive Technologies",
    source: "course-4.1-bonding/module-004-non-adhesive-technologies",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  5. Prepare to be Amazed - pt-BR
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt-BR",
    brand: "loctite",
    title: "Prepare to be Amazed",
    no: 5,
    course: "Bonding",
    module: "Prepare to be Amazed",
    source: "course-4.1-bonding/module-005-prepare-to-be-amazed",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  6. How to bond properly - pt-BR
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt-BR",
    brand: "loctite",
    title: "How to bond properly",
    no: 6,
    course: "Bonding",
    module: "How to bond properly",
    source: "course-4.1-bonding/module-006-how-to-bond-properly",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  1. Introduction to Bonding - pt
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt",
    brand: "loctite",
    title: "Introduction to Bonding",
    no: 1,
    course: "Bonding",
    module: "Introduction to Bonding",
    source: "course-4.1-bonding/module-001-intro-to-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  2. The Substrate Challenge - pt
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt",
    brand: "loctite",
    title: "The Substrate Challenge",
    no: 2,
    course: "Bonding",
    module: "The Substrate Challenge",
    source: "course-4.1-bonding/module-002-the-substrate-challenge",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  3. Benefits of Bonding - pt
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt",
    brand: "loctite",
    title: "Benefits of Bonding",
    no: 3,
    course: "Bonding",
    module: "Benefits of Bonding",
    source: "course-4.1-bonding/module-003-benefits-of-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  4. Non-Adhesive Technologies - pt
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt",
    brand: "loctite",
    title: "Non-Adhesive Technologies",
    no: 4,
    course: "Bonding",
    module: "Non-Adhesive Technologies",
    source: "course-4.1-bonding/module-004-non-adhesive-technologies",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  5. Prepare to be Amazed - pt
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt",
    brand: "loctite",
    title: "Prepare to be Amazed",
    no: 5,
    course: "Bonding",
    module: "Prepare to be Amazed",
    source: "course-4.1-bonding/module-005-prepare-to-be-amazed",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  6. How to bond properly - pt
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt",
    brand: "loctite",
    title: "How to bond properly",
    no: 6,
    course: "Bonding",
    module: "How to bond properly",
    source: "course-4.1-bonding/module-006-how-to-bond-properly",
    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  1. Introduction to Bonding - tr
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "tr",
    brand: "loctite",
    title: "Introduction to Bonding",
    no: 1,
    course: "Bonding",
    module: "Introduction to Bonding",
    source: "course-4.1-bonding/module-001-intro-to-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  2. The Substrate Challenge - tr
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "tr",
    brand: "loctite",
    title: "The Substrate Challenge",
    no: 2,
    course: "Bonding",
    module: "The Substrate Challenge",
    source: "course-4.1-bonding/module-002-the-substrate-challenge",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  3. Benefits of Bonding - tr
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "tr",
    brand: "loctite",
    title: "Benefits of Bonding",
    no: 3,
    course: "Bonding",
    module: "Benefits of Bonding",
    source: "course-4.1-bonding/module-003-benefits-of-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  4. Non-Adhesive Technologies - tr
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "tr",
    brand: "loctite",
    title: "Non-Adhesive Technologies",
    no: 4,
    course: "Bonding",
    module: "Non-Adhesive Technologies",
    source: "course-4.1-bonding/module-004-non-adhesive-technologies",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  5. Prepare to be Amazed - tr
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "tr",
    brand: "loctite",
    title: "Prepare to be Amazed",
    no: 5,
    course: "Bonding",
    module: "Prepare to be Amazed",
    source: "course-4.1-bonding/module-005-prepare-to-be-amazed",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  6. How to bond properly - tr
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "tr",
    brand: "loctite",
    title: "How to bond properly",
    no: 6,
    course: "Bonding",
    module: "How to bond properly",
    source: "course-4.1-bonding/module-006-how-to-bond-properly",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  1. Introduction to Bonding - th
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "th",
    brand: "loctite",
    title: "Introduction to Bonding",
    no: 1,
    course: "Bonding",
    module: "Introduction to Bonding",
    source: "course-4.1-bonding/module-001-intro-to-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  2. The Substrate Challenge - th
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "th",
    brand: "loctite",
    title: "The Substrate Challenge",
    no: 2,
    course: "Bonding",
    module: "The Substrate Challenge",
    source: "course-4.1-bonding/module-002-the-substrate-challenge",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  3. Benefits of Bonding - th
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "th",
    brand: "loctite",
    title: "Benefits of Bonding",
    no: 3,
    course: "Bonding",
    module: "Benefits of Bonding",
    source: "course-4.1-bonding/module-003-benefits-of-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  4. Non-Adhesive Technologies - th
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "th",
    brand: "loctite",
    title: "Non-Adhesive Technologies",
    no: 4,
    course: "Bonding",
    module: "Non-Adhesive Technologies",
    source: "course-4.1-bonding/module-004-non-adhesive-technologies",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  5. Prepare to be Amazed - th
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "th",
    brand: "loctite",
    title: "Prepare to be Amazed",
    no: 5,
    course: "Bonding",
    module: "Prepare to be Amazed",
    source: "course-4.1-bonding/module-005-prepare-to-be-amazed",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  6. How to bond properly - th
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "th",
    brand: "loctite",
    title: "How to bond properly",
    no: 6,
    course: "Bonding",
    module: "How to bond properly",
    source: "course-4.1-bonding/module-006-how-to-bond-properly",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  1. Introduction to Bonding - nl
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "nl",
    brand: "loctite",
    title: "Introduction to Bonding",
    no: 1,
    course: "Bonding",
    module: "Introduction to Bonding",
    source: "course-4.1-bonding/module-001-intro-to-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  2. The Substrate Challenge - nl
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "nl",
    brand: "loctite",
    title: "The Substrate Challenge",
    no: 2,
    course: "Bonding",
    module: "The Substrate Challenge",
    source: "course-4.1-bonding/module-002-the-substrate-challenge",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  3. Benefits of Bonding - nl
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "nl",
    brand: "loctite",
    title: "Benefits of Bonding",
    no: 3,
    course: "Bonding",
    module: "Benefits of Bonding",
    source: "course-4.1-bonding/module-003-benefits-of-bonding",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  4. Non-Adhesive Technologies - nl
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "nl",
    brand: "loctite",
    title: "Non-Adhesive Technologies",
    no: 4,
    course: "Bonding",
    module: "Non-Adhesive Technologies",
    source: "course-4.1-bonding/module-004-non-adhesive-technologies",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  5. Prepare to be Amazed - nl
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "nl",
    brand: "loctite",
    title: "Prepare to be Amazed",
    no: 5,
    course: "Bonding",
    module: "Prepare to be Amazed",
    source: "course-4.1-bonding/module-005-prepare-to-be-amazed",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  6. How to bond properly - nl
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "nl",
    brand: "loctite",
    title: "How to bond properly",
    no: 6,
    course: "Bonding",
    module: "How to bond properly",
    source: "course-4.1-bonding/module-006-how-to-bond-properly",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ==========================================================
  //
  //				5.1 Magnet Bonding
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. Introduction to Magnet Bonding
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Introduction to Magnet Bonding",

    no: 1,
    course: "Magnet Bonding",
    module: "Introduction to Magnet Bonding",
    source: "course-5.1-magnet-bonding/module-001-intro-to-magnet-bonding",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2. E-motors
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "E-motors",

    no: 2,
    course: "Magnet Bonding",
    module: "E-motors",
    source: "course-5.1-magnet-bonding/module-002-e-motors",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3. Dispensing
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Dispensing",

    no: 3,
    course: "Magnet Bonding",
    module: "Dispensing",
    source: "course-5.1-magnet-bonding/module-003-dispensing",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	4. Chemistry
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Chemistry",

    no: 4,
    course: "Magnet Bonding",
    module: "Chemistry",
    source: "course-5.1-magnet-bonding/module-004-chemistry",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	5. Product Selector
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Product Selector",

    no: 5,
    course: "Magnet Bonding",
    module: "Product Selector",
    source: "course-5.1-magnet-bonding/module-005-product-selector",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ==========================================================
  //
  //				4.2 Fundamentals of Bonding
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	0. The Magnificent Bonding Game Show
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "The Magnificent Bonding Game Show",

    no: 0,
    course: "Fundamentals of Bonding",
    module: "The Magnificent Bonding Game Show",
    source:
      "course-4.2-fundamentals-of-bonding/module-000-the-magnificent-bonding-game-show",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. Bond Design
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Bond Design",

    no: 1,
    course: "Fundamentals of Bonding",
    module: "Bond Design",
    source: "course-4.2-fundamentals-of-bonding/module-001-bond-design",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2. Factors for Bonding
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Factors for Bonding",

    no: 2,
    course: "Fundamentals of Bonding",
    module: "Factors for Bonding",
    source: "course-4.2-fundamentals-of-bonding/module-002-factors-for-bonding",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3. Flexible Bonding and Sealing
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Flexible Bonding and Sealing",

    no: 3,
    course: "Fundamentals of Bonding",
    module: "Flexible Bonding and Sealing",
    source:
      "course-4.2-fundamentals-of-bonding/module-003-flexible-bonding-and-sealing",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	4. Rigid Bonding
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Rigid Bonding",

    no: 4,
    course: "Fundamentals of Bonding",
    module: "Rigid Bonding",
    source: "course-4.2-fundamentals-of-bonding/module-004-rigid-bonding",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	5. Tech Selector Tool
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Tech Selector Tool",

    no: 5,
    course: "Fundamentals of Bonding",
    module: "Tech Selector Tool",
    source: "course-4.2-fundamentals-of-bonding/module-005-tech-selector-tool",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	6. Mythbustres
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Mythbustres",

    no: 6,
    course: "Fundamentals of Bonding",
    module: " Mythbustres",
    source: "course-4.2-fundamentals-of-bonding/module-006-mythbusters",

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
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "teroson-collision",
    title: "Collision Repair from A to Z",

    no: 1,
    course: "Introduction to Collision Repair",
    module: "Collision Repair from A to Z",
    source:
      "course-6.1-introduction-to-collision-repair/module-001-collision-repair-from-a-to-z",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2. Top 10 Damages
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "teroson-collision",
    title: "Top 10 Damages",

    no: 2,
    course: "Introduction to Collision Repair",
    module: "Top 10 Damages",
    source:
      "course-6.1-introduction-to-collision-repair/module-002-top-10-damages",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3. Find the right product
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "teroson-collision",
    title: "Find the right product",

    no: 3,
    course: "Introduction to Collision Repair",
    module: "Find the right product",
    source:
      "course-6.1-introduction-to-collision-repair/module-003-find-the-right-product",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. Collision Repair from A to Z -it
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "it",
    brand: "teroson-collision",
    title: "Collision Repair from A to Z",

    no: 1,
    course: "Introduction to Collision Repair",
    module: "Collision Repair from A to Z",
    source:
      "course-6.1-introduction-to-collision-repair/module-001-collision-repair-from-a-to-z",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2. Top 10 Damages - it
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "it",
    brand: "teroson-collision",
    title: "Top 10 Damages",

    no: 2,
    course: "Introduction to Collision Repair",
    module: "Top 10 Damages",
    source:
      "course-6.1-introduction-to-collision-repair/module-002-top-10-damages",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3. Find the right product - it
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "it",
    brand: "teroson-collision",
    title: "Find the right product",

    no: 3,
    course: "Introduction to Collision Repair",
    module: "Find the right product",
    source:
      "course-6.1-introduction-to-collision-repair/module-003-find-the-right-product",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. Collision Repair from A to Z - tr
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "tr",
    brand: "teroson-collision",
    title: "Collision Repair from A to Z",

    no: 1,
    course: "Introduction to Collision Repair",
    module: "Collision Repair from A to Z",
    source:
      "course-6.1-introduction-to-collision-repair/module-001-collision-repair-from-a-to-z",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2. Top 10 Damages - tr
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "tr",
    brand: "teroson-collision",
    title: "Top 10 Damages",

    no: 2,
    course: "Introduction to Collision Repair",
    module: "Top 10 Damages",
    source:
      "course-6.1-introduction-to-collision-repair/module-002-top-10-damages",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3. Find the right product - tr
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "tr",
    brand: "teroson-collision",
    title: "Find the right product",

    no: 3,
    course: "Introduction to Collision Repair",
    module: "Find the right product",
    source:
      "course-6.1-introduction-to-collision-repair/module-003-find-the-right-product",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. Collision Repair from A to Z - nl
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: true,
    scorm: "1.2",

    version: "1.0.0",
    lang: "nl",
    brand: "teroson-collision",
    title: "Collision Repair from A to Z",

    no: 1,
    course: "Introduction to Collision Repair",
    module: "Collision Repair from A to Z",
    source:
      "course-6.1-introduction-to-collision-repair/module-001-collision-repair-from-a-to-z",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2. Top 10 Damages - nl
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: true,
    scorm: "1.2",

    version: "1.0.0",
    lang: "nl",
    brand: "teroson-collision",
    title: "Top 10 Damages",

    no: 2,
    course: "Introduction to Collision Repair",
    module: "Top 10 Damages",
    source:
      "course-6.1-introduction-to-collision-repair/module-002-top-10-damages",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3. Find the right product - nl
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: true,
    scorm: "1.2",

    version: "1.0.0",
    lang: "nl",
    brand: "teroson-collision",
    title: "Find the right product",

    no: 3,
    course: "Introduction to Collision Repair",
    module: "Find the right product",
    source:
      "course-6.1-introduction-to-collision-repair/module-003-find-the-right-product",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. Collision Repair from A to Z -es
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "es",
    brand: "teroson-collision",
    title: "Collision Repair from A to Z",

    no: 1,
    course: "Introduction to Collision Repair",
    module: "Collision Repair from A to Z",
    source:
      "course-6.1-introduction-to-collision-repair/module-001-collision-repair-from-a-to-z",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2. Top 10 Damages - es
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "es",
    brand: "teroson-collision",
    title: "Top 10 Damages",

    no: 2,
    course: "Introduction to Collision Repair",
    module: "Top 10 Damages",
    source:
      "course-6.1-introduction-to-collision-repair/module-002-top-10-damages",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3. Find the right product - es
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "es",
    brand: "teroson-collision",
    title: "Find the right product",

    no: 3,
    course: "Introduction to Collision Repair",
    module: "Find the right product",
    source:
      "course-6.1-introduction-to-collision-repair/module-003-find-the-right-product",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. Collision Repair from A to Z - es-MX
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "es-MX",
    brand: "teroson-collision",
    title: "Collision Repair from A to Z",

    no: 1,
    course: "Introduction to Collision Repair",
    module: "Collision Repair from A to Z",
    source:
      "course-6.1-introduction-to-collision-repair/module-001-collision-repair-from-a-to-z",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2. Top 10 Damages - es-MX
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "es-MX",
    brand: "teroson-collision",
    title: "Top 10 Damages",

    no: 2,
    course: "Introduction to Collision Repair",
    module: "Top 10 Damages",
    source:
      "course-6.1-introduction-to-collision-repair/module-002-top-10-damages",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3. Find the right product - es-MX
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "es-MX",
    brand: "teroson-collision",
    title: "Find the right product",

    no: 3,
    course: "Introduction to Collision Repair",
    module: "Find the right product",
    source:
      "course-6.1-introduction-to-collision-repair/module-003-find-the-right-product",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  1. Collision Repair from A to Z - pt
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt",
    brand: "teroson-collision",
    title: "Collision Repair from A to Z",
    no: 1,
    course: "Introduction to Collision Repair",
    module: "Collision Repair from A to Z",
    source:
      "course-6.1-introduction-to-collision-repair/module-001-collision-repair-from-a-to-z",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  2. Top 10 Damages - pt
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt",
    brand: "teroson-collision",
    title: "Top 10 Damages",
    no: 2,
    course: "Introduction to Collision Repair",
    module: "Top 10 Damages",
    source:
      "course-6.1-introduction-to-collision-repair/module-002-top-10-damages",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  3. Find the right product - PT
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt",
    brand: "teroson-collision",
    title: "Find the right product",
    no: 3,
    course: "Introduction to Collision Repair",
    module: "Find the right product",
    source:
      "course-6.1-introduction-to-collision-repair/module-003-find-the-right-product",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  1. Collision Repair from A to Z - pt-BR
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt-BR",
    brand: "teroson-collision",
    title: "Collision Repair from A to Z",
    no: 1,
    course: "Introduction to Collision Repair",
    module: "Collision Repair from A to Z",
    source:
      "course-6.1-introduction-to-collision-repair/module-001-collision-repair-from-a-to-z",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  2. Top 10 Damages - pt-BR
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt-BR",
    brand: "teroson-collision",
    title: "Top 10 Damages",
    no: 2,
    course: "Introduction to Collision Repair",
    module: "Top 10 Damages",
    source:
      "course-6.1-introduction-to-collision-repair/module-002-top-10-damages",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //  3. Find the right product - pt-BR
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",
    version: "1.0.0",
    lang: "pt-BR",
    brand: "teroson-collision",
    title: "Find the right product",
    no: 3,
    course: "Introduction to Collision Repair",
    module: "Find the right product",
    source:
      "course-6.1-introduction-to-collision-repair/module-003-find-the-right-product",
    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. Collision Repair from A to Z -de
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "de",
    brand: "teroson-collision",
    title: "Collision Repair from A to Z",

    no: 1,
    course: "Introduction to Collision Repair",
    module: "Collision Repair from A to Z",
    source:
      "course-6.1-introduction-to-collision-repair/module-001-collision-repair-from-a-to-z",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2. Top 10 Damages - de
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "de",
    brand: "teroson-collision",
    title: "Top 10 Damages",

    no: 2,
    course: "Introduction to Collision Repair",
    module: "Top 10 Damages",
    source:
      "course-6.1-introduction-to-collision-repair/module-002-top-10-damages",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3. Find the right product - de
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "de",
    brand: "teroson-collision",
    title: "Find the right product",

    no: 3,
    course: "Introduction to Collision Repair",
    module: "Find the right product",
    source:
      "course-6.1-introduction-to-collision-repair/module-003-find-the-right-product",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. Collision Repair from A to Z - fr
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "fr",
    brand: "teroson-collision",
    title: "Collision Repair from A to Z",

    no: 1,
    course: "Introduction to Collision Repair",
    module: "Collision Repair from A to Z",
    source:
      "course-6.1-introduction-to-collision-repair/module-001-collision-repair-from-a-to-z",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2. Top 10 Damages - fr
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "fr",
    brand: "teroson-collision",
    title: "Top 10 Damages",

    no: 2,
    course: "Introduction to Collision Repair",
    module: "Top 10 Damages",
    source:
      "course-6.1-introduction-to-collision-repair/module-002-top-10-damages",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3. Find the right product - fr
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "fr",
    brand: "teroson-collision",
    title: "Find the right product",

    no: 3,
    course: "Introduction to Collision Repair",
    module: "Find the right product",
    source:
      "course-6.1-introduction-to-collision-repair/module-003-find-the-right-product",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. Collision Repair from A to Z - pl
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pl",
    brand: "teroson-collision",
    title: "Collision Repair from A to Z",

    no: 1,
    course: "Introduction to Collision Repair",
    module: "Collision Repair from A to Z",
    source:
      "course-6.1-introduction-to-collision-repair/module-001-collision-repair-from-a-to-z",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2. Top 10 Damages
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pl",
    brand: "teroson-collision",
    title: "Top 10 Damages",

    no: 2,
    course: "Introduction to Collision Repair",
    module: "Top 10 Damages",
    source:
      "course-6.1-introduction-to-collision-repair/module-002-top-10-damages",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3. Find the right product
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "pl",
    brand: "teroson-collision",
    title: "Find the right product",

    no: 3,
    course: "Introduction to Collision Repair",
    module: "Find the right product",
    source:
      "course-6.1-introduction-to-collision-repair/module-003-find-the-right-product",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ==========================================================
  //
  //				6.3 OEM Seams as a System
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. The Big Recap Quiz
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
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

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3. The Chemistry Pit Stop Race
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "teroson-collision",
    title: "The Chemistry Pit Stop Race",

    no: 3,
    course: "OEM Seams as a System",
    module: "The Chemistry Pit Stop Race",
    source:
      "course-6.3-oem-seams-as-a-system/module-003-the-chemistry-pit-stop-race",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	4. Rebuilding OEM Seams
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "teroson-collision",
    title: "Rebuilding OEM Seams",

    no: 4,
    course: "OEM Seams as a System",
    module: "Rebuilding OEM Seams",
    source: "course-6.3-oem-seams-as-a-system/module-004-rebuilding-oem-seams",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	5. One System To Rule Them All
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "teroson-collision",
    title: "One System To Rule Them All",

    no: 5,
    course: "OEM Seams as a System",
    module: "One System To Rule Them All",
    source:
      "course-6.3-oem-seams-as-a-system/module-005-one-system-to-rule-them-all",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	6. Mythbusters
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "teroson-collision",
    title: "Mythbusters",

    no: 6,
    course: "OEM Seams as a System",
    module: "Mythbusters",
    source: "course-6.3-oem-seams-as-a-system/module-006-mythbusters",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	10. Introduction - Old
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "teroson-collision",
    title: "Introduction - Old",

    no: 10,
    course: "OEM Seams as a System",
    module: "Introduction",
    source: "course-6.3-oem-seams-as-a-system/module-010-introduction-old",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ==========================================================
  //
  //				Tryouts
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	Meet The Experts
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Tryouts",

    no: 1,
    course: "Tryouts",
    module: "Meet the Experts",
    source: "tryouts/meet-the-experts",

    navigation: true,
    sidebar: true,
    css: 2,
  },
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	Stop and Go
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "en",
    brand: "loctite",
    title: "Tryouts",

    no: 1,
    course: "Tryouts",
    module: "Stop and Go",
    source: "tryouts/stop-and-go",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ==========================================================
  //
  //				7.1 Commercial knowledge (Shared) - DIST
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	0. Recap Quiz
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "Recap Quiz",

    no: 1,
    course: "Commercial Knowledge (Shared)",
    module: "Recap Quiz",
    source: "course-7.1-commercial-knowledge-shared/module-000-recap-quiz",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. Big $$$ with LOCTITE
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "Big $ with LOCTITE",

    no: 2,
    course: "Commercial Knowledge (Shared)",
    module: "Big $ with LOCTITE",
    source:
      "course-7.1-commercial-knowledge-shared/module-001-big-sss-with-loctite",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2. How LOCTITE can get you in the door
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "How LOCTITE Can Get You In the Door",

    no: 3,
    course: "Commercial Knowledge (Shared)",
    module: "How LOCTITE Can Get You In the Door",
    source:
      "course-7.1-commercial-knowledge-shared/module-002-how-loctite-can-get-you-in-the-door",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3. X-Sales
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "X-Sales",

    no: 4,
    course: "Commercial Knowledge (Shared)",
    module: "X-Sales",
    source: "course-7.1-commercial-knowledge-shared/module-003-x-sales",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	4. Selling Like the Pro You Are
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "Selling Like the Pro You Are",

    no: 5,
    course: "Commercial Knowledge (Shared)",
    module: "Selling Like the Pro You Are",
    source:
      "course-7.1-commercial-knowledge-shared/module-004-selling-like-the-pro-you-are",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	5. Personal Partnership Planning
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "Personal Partnership Planning",

    no: 6,
    course: "Commercial Knowledge (Shared)",
    module: "Personal Partnership Planning",
    source:
      "course-7.1-commercial-knowledge-shared/module-005-personal-partnership-planning",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	6. Utilizing LOCTITE's many resources
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "Utilizing LOCTITE's many resources",

    no: 7,
    course: "Commercial Knowledge (Shared)",
    module: "Utilizing LOCTITE's many resources",
    source:
      "course-7.1-commercial-knowledge-shared/module-006-utilizing-loctites-many-resources",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	7. Templates
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "Templates",

    no: 8,
    course: "Commercial Knowledge (Shared)",
    module: "Templates",
    source: "course-7.1-commercial-knowledge-shared/templates",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ==========================================================
  //
  //				7.2 Product Technology (MRO) - DIST
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. MRO Bonding
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "MRO Bonding",

    no: 1,
    course: "Product Technology (MRO)",
    module: "MRO Bonding",
    source: "course-7.2-product-technology-mro/module-001-mro-bonding",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2. Metal Rebuild
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "Metal Rebuild",

    no: 2,
    course: "Product Technology (MRO)",
    module: "Metal Rebuild",
    source: "course-7.2-product-technology-mro/module-002-metal-rebuild",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3. Protective Coatings
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "Protective Coatings",

    no: 3,
    course: "Product Technology (MRO)",
    module: "Protective Coatings",
    source: "course-7.2-product-technology-mro/module-003-protective-coatings",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	4. Rubber Repair
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "Rubber Repair",

    no: 4,
    course: "Product Technology (MRO)",
    module: "Rubber Repair",
    source: "course-7.2-product-technology-mro/module-004-rubber-repair",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	5. LOCTITE Concrete Repair Solutions
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "LOCTITE Concrete Repair Solutions",

    no: 5,
    course: "Product Technology (MRO)",
    module: "LOCTITE Concrete Repair Solutions",
    source:
      "course-7.2-product-technology-mro/module-005-loctite-concrete-repair-solutions",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	6. Anti Seize and Lubricants
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "Anti Seize and Lubricants",

    no: 6,
    course: "Product Technology (MRO)",
    module: "Anti Seize and Lubricants",
    source:
      "course-7.2-product-technology-mro/module-006-anti-seize-and-lubricants",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ==========================================================
  //
  //				7.3 MRO Devices - DIST
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. Pumps
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "Pumps",

    no: 1,
    course: "MRO Devices",
    module: "Pumps",
    source: "course-7.3-mro-devices/module-001-pumps",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2. Gearboxes
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "Gearboxes",

    no: 2,
    course: "MRO Devices",
    module: "Gearboxes",
    source: "course-7.3-mro-devices/module-002-gearboxes",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3. Shafts
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "Shafts",

    no: 3,
    course: "MRO Devices",
    module: "Shafts",
    source: "course-7.3-mro-devices/module-003-shafts",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	4. Centrifuges
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "Centrifuges",

    no: 4,
    course: "MRO Devices",
    module: "Centrifuges",
    source: "course-7.3-mro-devices/module-004-centrifuges",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ==========================================================
  //
  //				7.4 Commercial Knowledge (MRO) - DIST
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. Game: Qualifying the Account and Opportunity
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "Game: Qualifying the Account and Opportunity",

    no: 1,
    course: "Commercial Knowledge (MRO)",
    module: "Game: Qualifying the Account and Opportunity",
    source:
      "course-7.4-commercial-knowledge-mro/module-001-qualifying-the-account-and-opportunity",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ==========================================================
  //
  //				7.5 Product Technology (OEM) - DIST
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. Instant Bonding
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "Instant Bonding",

    no: 1,
    course: "Product Technology (OEM)",
    module: "Instant Bonding",
    source: "course-7.5-product-technology-oem/module-001-instant-bonding",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	2. Flexible Bonding
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "Flexible Bonding",

    no: 2,
    course: "Product Technology (OEM)",
    module: "Flexible Bonding",
    source: "course-7.5-product-technology-oem/module-002-flexible-bonding",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	3. Structural Bonding
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "Structural Bonding",

    no: 3,
    course: "Product Technology (OEM)",
    module: "Structural Bonding",
    source: "course-7.5-product-technology-oem/module-003-structural-bonding",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	4. Potting, Sealing, and Encapsulating
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "Potting, Sealing, and Encapsulating",

    no: 4,
    course: "Product Technology (OEM)",
    module: "Potting, Sealing, and Encapsulating",
    source:
      "course-7.5-product-technology-oem/module-004-potting-sealing-and-encapsulating",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	5. Light Cure
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "Light Cure",

    no: 5,
    course: "Product Technology (OEM)",
    module: "Light Cure",
    source: "course-7.5-product-technology-oem/module-005-light-cure",

    navigation: true,
    sidebar: true,
    css: 2,
  },

  //  ==========================================================
  //
  //				7.6 Commercial Knowledge (OEM) - DIST
  //
  //  ==========================================================

  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //	1. The Game: Qualifying OEM Accounts and Opportunities
  //  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  {
    build: false,
    scorm: "1.2",

    version: "1.0.0",
    lang: "us-DIST",
    brand: "loctite",
    title: "The Game: Qualifying OEM Accounts and Opportunities",

    no: 1,
    course: "Commercial Knowledge (OEM)",
    module: "The Game: Qualifying OEM Accounts and Opportunities",
    source:
      "course-7.6-commercial-knowledge-oem/module-001-the-game-qualifying-oem-accounts-and-opportunities",

    navigation: true,
    sidebar: true,
    css: 2,
  },
];
